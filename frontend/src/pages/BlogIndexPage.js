import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { BLOG_POSTS } from '../data/blogPosts';

const BlogIndexPage = () => {
  useSEO({
    title: 'Insights & Briefings | OnPoint Authority Systems',
    description:
      'Architectural thought-leadership from the OnPoint Authority Systems engineering desk — fault tolerance, agentic identity, and the elimination of single points of failure in enterprise infrastructure.',
    canonical: 'https://onpointauthoritysystems.com/blog'
  });

  const featured = BLOG_POSTS[0];
  const previous = BLOG_POSTS.slice(1);

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #0E1217 0%, #141A22 40%, #11161D 100%)'
      }}
      data-testid="blog-index-page"
    >
      {/* Texture overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 28%, rgba(197,160,89,0.18) 0%, transparent 45%), radial-gradient(circle at 82% 72%, rgba(57,255,20,0.06) 0%, transparent 45%)'
        }}
      />

      {/* Nav */}
      <nav className="relative z-20 border-b border-white/5 backdrop-blur-md bg-[#0E1217]/70">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              data-testid="blog-back-home"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-sm tracking-tight">Back to OnPoint</span>
            </Link>
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] hidden md:inline">
              Insights · Engineering Desk
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10">
        <div className="container-custom pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#C5A059]/30 rounded-full mb-8">
              <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.3em] uppercase">
                Insights & Briefings
              </span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              Architectural <span className="italic text-[#C5A059]">thought leadership</span>
              <br />
              from the OnPoint engineering desk.
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
              Long-form briefings on fault tolerance, decentralized substrates, agentic identity,
              and the structural patterns that separate institutional-grade platforms from legacy
              modernization theater.
            </p>
          </div>
        </div>
      </header>

      {/* Featured Article Card */}
      <section className="relative z-10 pb-12 md:pb-16">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
            <span className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em]">
              Featured Briefing
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-[#C5A059]/40 to-transparent" />
          </div>

          <Link
            to={`/blog/${featured.slug}`}
            className="group block rounded-lg overflow-hidden border border-white/10 hover:border-[#C5A059]/40 transition-colors bg-gradient-to-br from-[#13191F] to-[#0F141A]"
            data-testid="blog-featured-card"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left visual band */}
              <div className="lg:col-span-4 relative border-b lg:border-b-0 lg:border-r border-white/5 p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(197,160,89,0.5) 0%, transparent 50%, rgba(57,255,20,0.3) 100%)'
                  }}
                />
                <div className="relative">
                  <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-3">
                    {featured.eyebrow}
                  </div>
                  <div className="text-[11px] text-gray-500 leading-relaxed max-w-xs">
                    {featured.focus}
                  </div>
                </div>
                <div className="relative flex items-center gap-4 text-[11px] text-gray-500 mt-8">
                  <span>{featured.publishedAt}</span>
                  <span className="text-gray-700">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {featured.readingMinutes} min read
                  </span>
                </div>
              </div>

              {/* Right content */}
              <div className="lg:col-span-8 p-8 md:p-10 lg:p-12">
                <h2
                  className="text-2xl md:text-3xl lg:text-[34px] font-bold text-white leading-[1.2] tracking-tight mb-4 group-hover:text-[#C5A059] transition-colors"
                  style={{ fontFamily: 'Libre Baskerville, serif' }}
                >
                  {featured.title}
                </h2>
                <p className="text-gray-400 text-[15px] leading-[1.8] mb-6 max-w-2xl">
                  {featured.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-gray-400 border border-white/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-1">
                      Prepared by
                    </div>
                    <div className="text-sm text-white">{featured.author}</div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-[#C5A059] text-sm font-medium group-hover:gap-3 transition-all">
                    Read briefing
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Previous Briefings (if any) */}
      {previous.length > 0 && (
        <section className="relative z-10 pb-12 md:pb-16">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                Previous Briefings
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-testid="blog-previous-grid">
              {previous.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block rounded-lg border border-white/10 hover:border-[#C5A059]/40 transition-colors bg-[#0F141A]/70 p-6 md:p-7"
                  data-testid={`blog-previous-card-${post.slug}`}
                >
                  <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-3">
                    {post.eyebrow}
                  </div>
                  <h3
                    className="text-lg md:text-xl font-bold text-white leading-[1.25] tracking-tight mb-3 group-hover:text-[#C5A059] transition-colors"
                    style={{ fontFamily: 'Libre Baskerville, serif' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-[13.5px] leading-[1.75] mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-gray-500">
                    <span className="inline-flex items-center gap-3">
                      <span>{post.publishedAt}</span>
                      <span className="text-gray-700">·</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {post.readingMinutes} min
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#C5A059] group-hover:gap-2.5 transition-all">
                      Read
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon placeholder */}
      <section className="relative z-10 pb-20 md:pb-28">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
              On the Editorial Calendar
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
          </div>

          <div
            className="rounded-lg border border-dashed border-white/10 bg-[#0F141A]/60 p-10 md:p-12 text-center"
            data-testid="blog-coming-soon"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#C5A059]/30 mb-5">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
            >
              More insights coming soon.
            </h3>
            <p className="text-gray-400 text-[14px] leading-relaxed max-w-xl mx-auto">
              The next briefings in the OnPoint Insights series will cover institutional
              compliance telemetry, sovereign data residency, and the operational economics of
              autonomous workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-600">
          <div>
            © {new Date().getFullYear()} OnPoint Authority Systems, Inc. All rights reserved.
          </div>
          <div className="tracking-[0.2em] uppercase">
            USPTO S/N 99653409 · OPAS Authority OS™ S/N 99748939
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogIndexPage;
