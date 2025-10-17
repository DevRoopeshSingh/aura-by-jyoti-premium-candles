import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const revalidate = 0;

interface RouteContext {
  params: {
    id: string;
  };
}

export const GET = async (_request: Request, { params }: RouteContext) => {
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: {
      category: true,
    },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({
    product: {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      scent: product.scent,
      burnTime: product.burnTime,
      size: product.size,
      image: product.image,
      features: JSON.parse(product.features) as string[],
      category: {
        id: product.category.id,
        name: product.category.name,
      },
    },
  });
};
