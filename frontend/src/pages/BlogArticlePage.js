import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { getPostBySlug } from '../data/blogPosts';

const SubBlock = ({ block }) => {
  if (block.kind === 'paragraph') {
    return (
      <p className="text-gray-300 text-[15px] leading-[1.9] mt-5 max-w-3xl">{block.body}</p>
    );
  }

  if (block.kind === 'closer') {
    return (
      <div
        className="mt-8 pl-6 border-l-2 border-[#C5A059] max-w-3xl"
        data-testid="blog-section-closer"
      >
        <p
          className="text-white text-[16px] md:text-[17px] leading-[1.85] italic"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          {block.body}
        </p>
      </div>
    );
  }

  if (block.kind === 'callout') {
    return (
      <div className="mt-8 rounded-lg border border-white/10 bg-[#0F141A]/80 p-6 md:p-8 max-w-3xl">
        <h3
          className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          {block.heading}
        </h3>
        <p className="text-gray-300 text-[15px] leading-[1.85] mb-5">{block.body}</p>
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="pl-5 border-l border-[#C5A059]/30 text-gray-300 text-[14.5px] leading-[1.75]"
            >
              <span className="text-white font-medium">{item.k}:</span>{' '}
              <span className="text-gray-400">{item.v}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (block.kind === 'table') {
    return (
      <div className="mt-8 max-w-4xl">
        <h3
          className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight"
          style={{ fontFamily: 'Libre Baskerville, serif' }}
        >
          {block.heading}
        </h3>
        {block.body && (
          <p className="text-gray-300 text-[15px] leading-[1.85] mb-5">{block.body}</p>
        )}

        {/* Desktop / tablet table */}
        <div className="hidden md:block rounded-lg border border-white/10 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#0F141A]">
                {block.columns.map((c, i) => (
                  <th
                    key={i}
                    className="px-5 py-4 text-[10px] uppercase tracking-[0.25em] text-[#C5A059] border-b border-white/10"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-5 py-5 text-[14px] leading-[1.7] align-top ${
                        ci === 0 ? 'text-white font-medium' : 'text-gray-400'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden space-y-3">
          {block.rows.map((row, ri) => (
            <div
              key={ri}
              className="rounded-lg border border-white/10 bg-[#0F141A]/60 p-5"
            >
              <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.25em] mb-2">
                {block.columns[0]}
              </div>
              <div className="text-white font-medium text-[14px] mb-4">{row[0]}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-2">
                {block.columns[1]}
              </div>
              <div className="text-gray-300 text-[13.5px] leading-[1.7] mb-4">{row[1]}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.25em] mb-2">
                {block.columns[2]}
              </div>
              <div className="text-gray-400 text-[13.5px] leading-[1.7]">{row[2]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const BlogArticlePage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useSEO({
    title: post
      ? `${post.title} | OnPoint Insights`
      : 'Insight not found | OnPoint Authority Systems',
    description: post?.excerpt,
    canonical: `https://onpointauthoritysystems.com/blog/${slug}`
  });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #0E1217 0%, #141A22 40%, #11161D 100%)'
      }}
      data-testid="blog-article-page"
    >
      {/* Texture overlay */}
      <div
        aria-hidden
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 22% 26%, rgba(197,160,89,0.18) 0%, transparent 45%), radial-gradient(circle at 78% 70%, rgba(57,255,20,0.06) 0%, transparent 45%)'
        }}
      />

      {/* Nav */}
      <nav className="relative z-20 border-b border-white/5 backdrop-blur-md bg-[#0E1217]/70">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              data-testid="blog-article-back"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span className="text-sm tracking-tight">All Insights</span>
            </Link>
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] hidden md:inline">
              {post.eyebrow}
            </span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative z-10">
        <div className="container-custom pt-20 pb-10 md:pt-28 md:pb-14">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#C5A059]/30 rounded-full mb-8">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[#C5A059] text-[11px] font-semibold tracking-[0.3em] uppercase">
                {post.eyebrow}
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: 'Libre Baskerville, serif' }}
              data-testid="blog-article-title"
            >
              {post.title}
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl">
              {post.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-gray-500">
              <div>
                <span className="text-[10px] text-gray-600 uppercase tracking-[0.25em] mr-2">
                  Prepared by
                </span>
                <span className="text-white">{post.author}</span>
              </div>
              <div className="hidden md:block text-gray-700">·</div>
              <div className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readingMinutes} min read
              </div>
              <div className="hidden md:block text-gray-700">·</div>
              <div>{post.publishedAt}</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-gray-400 border border-white/10 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Focus banner */}
      <div className="relative z-10">
        <div className="container-custom">
          <div className="max-w-4xl border-y border-[#C5A059]/20 bg-[#C5A059]/[0.04] px-6 py-4">
            <p className="text-[12.5px] md:text-[13px] text-[#E5C98A] leading-relaxed">
              {post.focus}
            </p>
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="relative z-10 pb-16 md:pb-24">
        <div className="container-custom pt-10 md:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sticky TOC */}
            <aside className="lg:col-span-3">
              <nav className="lg:sticky lg:top-24">
                <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-4">
                  Contents
                </p>
                <ul className="space-y-2.5">
                  {post.sections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="text-xs text-gray-500 hover:text-[#C5A059] transition-colors block"
                      >
                        <span className="text-gray-600 mr-2">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Article */}
            <article className="lg:col-span-9 space-y-14">
              {post.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  {s.kicker && (
                    <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-3">
                      {s.kicker}
                    </div>
                  )}
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight"
                    style={{ fontFamily: 'Libre Baskerville, serif' }}
                  >
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-gray-300 text-[15px] md:text-[15.5px] leading-[1.9] mb-4 max-w-3xl"
                    >
                      {p}
                    </p>
                  ))}
                  {s.subBlocks && s.subBlocks.map((b, i) => <SubBlock key={i} block={b} />)}
                </section>
              ))}

              {/* Tail CTA */}
              <div className="mt-12 rounded-lg border border-[#C5A059]/30 bg-gradient-to-br from-[#C5A059]/[0.08] to-transparent p-8 md:p-10 max-w-3xl">
                <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] mb-3">
                  Engage the Research Desk
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight"
                  style={{ fontFamily: 'Libre Baskerville, serif' }}
                >
                  Map this blueprint to your enterprise estate.
                </h3>
                <p className="text-gray-400 text-[14.5px] leading-relaxed mb-6">
                  OnPoint Authority Systems delivers private Architectural Reviews for Tier-1
                  institutions. Receive a tailored assessment of your single-point-of-failure
                  exposure and a phased remediation plan from our engineering desk.
                </p>
                <Link
                  to="/authority-review"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C5A059] to-[#D4AF6A] text-[#0E1217] text-sm font-semibold rounded hover:opacity-95 transition-opacity"
                  data-testid="blog-article-cta"
                >
                  Request a Strategic Authority Review
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
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

export default BlogArticlePage;
