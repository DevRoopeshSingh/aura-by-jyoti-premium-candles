import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import prisma from "@/lib/prisma";
import { mapProductRecord } from "@/lib/content-mappers";
import type { Product, ProductRecord } from "@/types/content";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const getBaseUrl = () => {
  const host = headers().get("host");
  const protocol = process.env.VERCEL ? "https" : "http";
  return `${protocol}://${host}`;
};

export const generateStaticParams = async () => {
  const productIds = await prisma.product.findMany({
    select: { id: true },
  });

  return productIds.map(({ id }) => ({ id }));
};

export const generateMetadata = async ({
  params,
}: ProductDetailPageProps): Promise<Metadata> => {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: {
      category: true,
    },
  });

  if (!product) {
    return { title: "Product Not Found" };
  }

  const mappedProduct = mapProductRecord({
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    scent: product.scent,
    burnTime: product.burnTime,
    size: product.size,
    image: product.image,
    features: JSON.parse(product.features),
    category: {
      id: product.category.id,
      name: product.category.name,
    },
  });

  return {
    title: mappedProduct.name,
    description: mappedProduct.description,
    openGraph: {
      title: mappedProduct.name,
      description: mappedProduct.description,
      type: "website",
      images: [
        {
          url: mappedProduct.image.src,
          alt: mappedProduct.name,
        },
      ],
    },
  };
};

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const baseUrl = getBaseUrl();
  const productResponse = await fetch(`${baseUrl}/api/products/${params.id}`, {
    cache: "no-store",
  });

  if (productResponse.status === 404) {
    notFound();
  }

  if (!productResponse.ok) {
    throw new Error("Failed to load product");
  }

  const productData = (await productResponse.json()) as { product: ProductRecord };
  const product = mapProductRecord(productData.product);

  const relatedResponse = await fetch(
    `${baseUrl}/api/products?category=${product.category.id}`,
    {
      cache: "no-store",
    },
  );

  if (!relatedResponse.ok) {
    throw new Error("Failed to load related products");
  }

  const relatedData = (await relatedResponse.json()) as { products: ProductRecord[] };
  const relatedProducts: Product[] = relatedData.products
    .filter((item) => item.id !== product.id)
    .map(mapProductRecord)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
};

export default ProductDetailPage;
