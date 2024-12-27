import Link from "next/link";
import { Search, FileText, Calendar, CreditCard, AlertCircle, BookOpen, Clock, Users } from 'lucide-react'
import Input from '@mui/material/Input';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              <h1 className="text-2xl font-bold">CompanyDocs</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar documentación..." className="pl-8" />
              </div>
            </div>
          </div>
        </header>
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
