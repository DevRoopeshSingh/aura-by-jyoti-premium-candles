import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import prisma from "@/lib/prisma";
import { mapProductRecord, productDbRecordToProductRecord } from "@/lib/content-mappers";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

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

  const mappedProduct = mapProductRecord(productDbRecordToProductRecord(product));

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
  const productRow = await prisma.product.findUnique({
    where: { id: params.id },
    include: { category: true },
  });

  if (!productRow) {
    notFound();
  }

  const productRecord = productDbRecordToProductRecord(productRow);
  const product = mapProductRecord(productRecord);

  const relatedRows = await prisma.product.findMany({
    where: {
      categoryId: productRow.categoryId,
      id: { not: productRow.id },
    },
    include: { category: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  const relatedProducts = relatedRows
    .map(productDbRecordToProductRecord)
    .map(mapProductRecord);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
};

export default ProductDetailPage;
