import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import { products } from "@/data/products";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export const generateStaticParams = () =>
  products.map((product) => ({
    id: product.id,
  }));

export const generateMetadata = ({ params }: ProductDetailPageProps): Metadata => {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website",
      images: [
        {
          url: product.image.src,
          alt: product.name,
        },
      ],
    },
  };
};

const ProductDetailPage = ({ params }: ProductDetailPageProps) => {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
};

export default ProductDetailPage;
