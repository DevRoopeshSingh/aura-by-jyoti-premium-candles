import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import BlogPostClient from "@/components/blog/BlogPostClient";
import prisma from "@/lib/prisma";
import { mapBlogPostRecord } from "@/lib/content-mappers";
import type { BlogPost, BlogPostRecord } from "@/types/content";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const getBaseUrl = () => {
  const host = headers().get("host");
  const protocol = process.env.VERCEL ? "https" : "http";
  return `${protocol}://${host}`;
};

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

  const mappedPost = mapBlogPostRecord({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    image: post.image,
    readingTime: post.readingTime,
    sections: JSON.parse(post.sections),
    takeaways: JSON.parse(post.takeaways),
    publishedAt: post.publishedAt.toISOString(),
  });

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
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/blog/${params.slug}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to load blog post");
  }

  const data = (await response.json()) as {
    post: BlogPostRecord;
    related: BlogPostRecord[];
  };

  const post = mapBlogPostRecord(data.post);
  const relatedPosts: BlogPost[] = data.related.map(mapBlogPostRecord);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
};

export default BlogPostPage;
