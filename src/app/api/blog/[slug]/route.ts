import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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
    post: {
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      slug: post.slug,
      image: post.image,
      readingTime: post.readingTime,
      sections: JSON.parse(post.sections),
      takeaways: JSON.parse(post.takeaways),
      publishedAt: post.publishedAt.toISOString(),
    },
    related: related.map((item) => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      slug: item.slug,
      image: item.image,
      readingTime: item.readingTime,
      sections: JSON.parse(item.sections),
      takeaways: JSON.parse(item.takeaways),
      publishedAt: item.publishedAt.toISOString(),
    })),
  });
};
