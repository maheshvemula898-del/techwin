import { useMemo, useState } from "react";
import { Link } from "@/lib/router";
import { ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { SEO } from "@/components/SEO";
import { useSEO } from "@/hooks/useSEO";
import { blogPosts } from "@/data/blogData";

const Resources = () => {
  const seo = useSEO();
  const [category, setCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const posts = useMemo(
    () => category === "All" ? blogPosts : blogPosts.filter((post) => post.category === category),
    [category],
  );
  const featured = blogPosts[0];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <SEO {...seo} />
      <Navbar />
      <PageHero
        title="Insights & Ideas"
        description="Practical perspectives for technology leaders navigating security, cloud, AI, engineering, and enterprise transformation."
        label="TECHWEN BLOG"
        breadcrumbs={[{ label: "Insights" }]}
        backgroundImage="/techwin-network-hero.webp"
      />
      <main>
        <section className="border-b border-neutral-200 bg-white py-16">
          <div className="container mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={featured.image} alt={featured.title} decoding="async" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#315f98]">Featured insight · {featured.category}</p>
              <h1 className="mt-5 text-4xl font-medium leading-tight tracking-[-.045em]">{featured.title}</h1>
              <p className="mt-5 text-sm leading-7 text-neutral-600">{featured.excerpt}</p>
              <Link to={`/resources/blog/${featured.slug}`} className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#315f98]">Read the insight <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-6 border-b border-neutral-200 pb-7 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#315f98]">Latest thinking</p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-.04em]">Explore 30+ enterprise technology insights</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button key={item} onClick={() => setCategory(item)} className={`border px-3 py-2 text-[11px] font-semibold ${category === item ? "border-neutral-950 bg-neutral-950 text-white" : "border-neutral-300 bg-white text-neutral-700"}`}>{item}</button>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link to={`/resources/blog/${post.slug}`}>
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    </div>
                    <div className="pt-5">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.14em] text-[#315f98]"><span>{post.category}</span><span className="flex items-center gap-1 text-neutral-500"><Clock className="h-3 w-3" />{post.readTime}</span></div>
                      <h3 className="mt-3 text-xl font-semibold leading-7 tracking-[-.025em] group-hover:text-[#315f98]">{post.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-neutral-600">{post.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold">Read article <ArrowRight className="h-4 w-4" /></span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
