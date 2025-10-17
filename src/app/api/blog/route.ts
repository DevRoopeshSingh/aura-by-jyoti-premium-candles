import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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

  const formatted = posts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    image: post.image,
    readingTime: post.readingTime,
    sections: JSON.parse(post.sections),
    takeaways: JSON.parse(post.takeaways),
    publishedAt: post.publishedAt.toISOString(),
  }));

  return NextResponse.json({ posts: formatted });
};
