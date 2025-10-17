import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog/BlogPostClient";
import prisma from "@/lib/prisma";
import { blogDbRecordToBlogPostRecord, mapBlogPostRecord } from "@/lib/content-mappers";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const posts = await prisma.blogPost.findMany({
    select: { slug: true },
  });

  return posts.map(({ slug }) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    return { title: "Article Not Found" };
  }

  const mappedPost = mapBlogPostRecord(blogDbRecordToBlogPostRecord(post));

  return {
    title: mappedPost.title,
    description: mappedPost.excerpt,
    openGraph: {
      title: mappedPost.title,
      description: mappedPost.excerpt,
      type: "article",
      images: [
        {
          url: mappedPost.image.src,
          alt: mappedPost.title,
        },
      ],
    },
  };
};

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  });

  if (!post) {
    notFound();
  }

  const relatedPosts = await prisma.blogPost.findMany({
    where: { id: { not: post.id } },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  const mappedPost = mapBlogPostRecord(blogDbRecordToBlogPostRecord(post));
  const mappedRelated = relatedPosts
    .map(blogDbRecordToBlogPostRecord)
    .map(mapBlogPostRecord);

  return <BlogPostClient post={mappedPost} relatedPosts={mappedRelated} />;
};

export default BlogPostPage;
