import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { productDbRecordToProductRecord } from "@/lib/content-mappers";

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
    product: productDbRecordToProductRecord(product),
  });
};
