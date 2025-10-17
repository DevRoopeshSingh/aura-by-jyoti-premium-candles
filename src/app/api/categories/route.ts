import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export const GET = async () => {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const formatted = [
    { id: "all", name: "All Products" },
    ...categories.map((category) => ({ id: category.id, name: category.name })),
  ];

  return NextResponse.json({ categories: formatted });
};
