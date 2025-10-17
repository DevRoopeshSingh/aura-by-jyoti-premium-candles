import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { blogDbRecordToBlogPostRecord } from "@/lib/content-mappers";

export const revalidate = 0;

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get("limit");
  const limit = limitParam ? Number.parseInt(limitParam, 10) : undefined;

  const posts = await prisma.blogPost.findMany({
    orderBy: {
      publishedAt: "desc",
    },
    take: Number.isFinite(limit) ? limit : undefined,
  });

  const formatted = posts.map(blogDbRecordToBlogPostRecord);

  return NextResponse.json({ posts: formatted });
};
