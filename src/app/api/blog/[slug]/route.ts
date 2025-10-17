import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { blogDbRecordToBlogPostRecord } from "@/lib/content-mappers";

interface RouteContext {
  params: {
    slug: string;
  };
}

export const revalidate = 0;

export const GET = async (_request: Request, { params }: RouteContext) => {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const related = await prisma.blogPost.findMany({
    where: { id: { not: post.id } },
    orderBy: {
      publishedAt: "desc",
    },
    take: 3,
  });

  return NextResponse.json({
    post: blogDbRecordToBlogPostRecord(post),
    related: related.map(blogDbRecordToBlogPostRecord),
  });
};
