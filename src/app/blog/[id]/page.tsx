import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/blog/BlogPostClient";
import { blogPosts } from "@/data/blog";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export const generateStaticParams = () =>
  blogPosts.map((post) => ({
    id: post.id,
  }));

export const generateMetadata = ({ params }: BlogPostPageProps): Metadata => {
  const post = blogPosts.find((item) => item.id === params.id);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [
        {
          url: post.image.src,
          alt: post.title,
        },
      ],
    },
  };
};

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = blogPosts.find((item) => item.id === params.id);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.id !== post.id).slice(0, 3);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
};

export default BlogPostPage;
