import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { productDbRecordToProductRecord } from "@/lib/content-mappers";

const sortMap: Record<string, Prisma.ProductOrderByWithRelationInput> = {
  "price-low": { price: "asc" },
  "price-high": { price: "desc" },
  name: { name: "asc" },
};

export const revalidate = 0;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const sort = searchParams.get("sort") ?? "featured";
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Number.parseInt(limitParam, 10) : undefined;

  const where: Prisma.ProductWhereInput = {};

  if (category && category !== "all") {
    where.categoryId = category;
  }

  if (search) {
    const ilike = `%${search.toLowerCase()}%`;
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
      { scent: { contains: search, mode: "insensitive" } },
    ];
    // SQLite does not support ilike; Prisma will handle contains mode insensitive
  }

  const orderBy = sortMap[sort] ?? undefined;

  const products = await prisma.product.findMany({
    where,
    orderBy,
    include: {
      category: true,
    },
    take: Number.isFinite(limit) ? limit : undefined,
  });

  const formatted = products.map(productDbRecordToProductRecord);

  return NextResponse.json({ products: formatted });
};
