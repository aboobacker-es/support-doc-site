import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/* ── AI Ask input (UI only — submitting opens search) ────────── */
const SUGGESTIONS = [
  'How do I create a test?',
  'How do I create an interview?',
  'How do I create an AI interviewer?',
];

function HeroAIInput() {
  const [value, setValue] = useState('');

  function handleAsk(question) {
    if (!question.trim()) return;
    // Open Docusaurus search with the query pre-filled
    const btn = document.querySelector('.navbar__search-input');
    if (btn) {
      btn.focus();
      btn.value = question;
      btn.dispatchEvent(new Event('input', { bubbles: true }));
    } else {
      // Fallback: focus search button
      document.querySelector('[class*="searchButton"]')?.click();
    }
    setValue('');
  }

  return (
    <div className={styles.aiWrap}>
      <div className={styles.aiInputRow}>
        <span className={styles.aiStar}>✦</span>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAsk(value)}
          placeholder="Ask a question"
          className={styles.aiInput}
        />
        <button
          onClick={() => handleAsk(value)}
          disabled={!value.trim()}
          className={styles.aiBtn}
          style={{ background: value.trim() ? '#16a34a' : '#e2e8f0', color: value.trim() ? '#fff' : '#94a3b8' }}
        >
          Ask AI
        </button>
      </div>
      <div className={styles.aiChips}>
        {SUGGESTIONS.map(s => (
          <button key={s} onClick={() => handleAsk(s)} className={styles.aiChip}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Product guide cards ─────────────────────────────────────── */
const PRODUCTS = [
  { slug: 'screen',     label: 'Screen',    desc: 'Save time and accelerate your hiring',   href: '/hackerrank-screen', count: 88 },
  { slug: 'interviews', label: 'Interview',  desc: 'Conduct stellar technical interviews',   href: '/interviews',        count: 43 },
  { slug: 'engage',     label: 'Engage',     desc: 'Promote your tech brand',               href: '/engage',            count: 9  },
  { slug: 'skillup',    label: 'SkillUp',    desc: 'Mobilize your tech talent',             href: '/skillup',           count: 19 },
  { slug: 'chakra',     label: 'Chakra',     desc: 'Pre-screen with AI interviews',         href: '/chakra',            count: 7  },
];

/* ── More section cards ──────────────────────────────────────── */
const MORE = [
  { label: 'Platform Guides',  desc: 'Library & Settings',    href: '/library/getting_started/hackerrank-library-navigation' },
  { label: 'Integrations',     desc: 'ATS & platform connectors', href: '/integrations-1/getting-started-with-integrations/integrations-overview' },
  { label: 'Release Notes',    desc: "What's new",            href: '/general-help/release-notes/april-2026-release-notes' },
  { label: 'General Help',     desc: 'FAQs & support',        href: '/general-help/academy/hackerrank-academy-video-tutorial' },
];

function SectionLabel({ children }) {
  return <h2 className={styles.sectionLabel}>{children}</h2>;
}

export default function Home() {
  return (
    <Layout title="Docs" description="HackerRank product documentation, guides, and resources." noSidebar>
      <div className={styles.page}>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>HackerRank Documentation</h1>
            <p className={styles.heroSubtitle}>
              Explore guides and resources for all HackerRank products.
            </p>
            <HeroAIInput />
          </div>
        </div>

        <div className={styles.inner}>

          {/* ── Product guides ─────────────────────────────────── */}
          <section className={styles.section}>
            <SectionLabel>Product guides</SectionLabel>
            <div className={styles.productGrid}>
              {PRODUCTS.map(p => (
                <Link key={p.slug} to={p.href} className={styles.productCard}>
                  <img
                    src={`/img/logo-${p.slug}.svg`}
                    alt={p.label}
                    className={styles.productLogo}
                  />
                  <span className={styles.productName}>{p.label}</span>
                  <span className={styles.productDesc}>{p.desc}</span>
                  <span className={styles.productCount}>{p.count} articles</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── More ───────────────────────────────────────────── */}
          <section className={styles.section}>
            <SectionLabel>More</SectionLabel>
            <div className={styles.moreGrid}>
              {MORE.map(m => (
                <Link key={m.href} to={m.href} className={styles.moreCard}>
                  <span className={styles.moreName}>{m.label}</span>
                  <span className={styles.moreDesc}>{m.desc}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── What's New ─────────────────────────────────────── */}
          <section className={styles.section}>
            <div className={styles.whatsNewHeader}>
              <SectionLabel>What&apos;s New</SectionLabel>
              <Link to="/general-help/release-notes/april-2026-release-notes" className={styles.viewAll}>
                View all release notes →
              </Link>
            </div>
            <Link to="/general-help/release-notes/april-2026-release-notes" className={styles.releaseCard}>
              <div className={styles.releaseIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <div className={styles.releaseBody}>
                <span className={styles.releaseName}>April 2026 Release Notes</span>
                <span className={styles.releaseDesc}>New features, improvements, and bug fixes across all HackerRank products.</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </section>

        </div>
      </div>
    </Layout>
  );
}
