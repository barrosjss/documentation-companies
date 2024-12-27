import { getBlogBySlug, getAllBlogSlug } from "../fetchers";

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <main className="min-h-screen bg-background flex justify-center items-start py-12">
      <article className="prose prose-lg sm:prose-xl lg:prose-2xl w-full max-w-4xl px-4 sm:px-8 md:px-16">
        {blog.content}
      </article>
    </main>
  );
}
