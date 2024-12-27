import Link from "next/link";
import Button from "@mui/material/Button";
import { getBlogs } from "@/app/blogs/fetchers";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="w-full max-w-7xl mx-auto px-4">
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Documentación de Procesos Internos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Accede a toda la información sobre procesos, protocolos y políticas
            de la empresa en un solo lugar. Mantente actualizado con los últimos
            procedimientos y directrices.
          </p>
          <Button className="text-white bg-gray-800 hover:bg-gray-700">
            Comenzar
          </Button>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {blogs.map((blog, i) => (
            <article
              key={i}
              className="border rounded-lg shadow-md p-4 flex flex-col"
            >
              <h1 className="text-xl font-bold mb-2">
                {blog.frontmatter.title}
              </h1>
              <p className="text-sm text-gray-500">{blog.frontmatter.author}</p>
              <p className="text-sm text-gray-500">
                {blog.frontmatter.publishDate}
              </p>
              <div className="mt-auto">
                <Link href={`/blogs/${blog.slug}`}>Read More</Link>
              </div>
            </article>
          ))}
        </section>
      </div>

      {/*
      <h1 className="text-3xl">Static Blog Demo</h1>

      <Link href={"blogs"} className="text-blue-500 text-xl underline">
        Blogs - next-mdx-remote library example
      </Link>
      <Link href={"next-mdx"} className="text-blue-500 text-xl underline">
        next-mdx library example
      </Link>
      */}
    </main>
  );
}
