import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

/* ── Featured task cards (top grid) ─────────────────────────── */
const FEATURED = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Create a test',
    desc: 'Build assessments from the library or from scratch.',
    href: '/hackerrank-screen/managing-tests/creating-a-new-test',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 17c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 4l2 2-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Invite candidates',
    desc: 'Send test invitations by email or shareable link.',
    href: '/hackerrank-screen/inviting-candidates',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 8h2M16 8h2M2 12h2M16 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Live interviews',
    desc: 'Run real-time technical interviews with a collaborative IDE.',
    href: '/interviews',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI interviews (Chakra)',
    desc: 'Automate first-round interviews with an AI interviewer.',
    href: '/chakra',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h12M4 10h12M4 14h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Connect your ATS',
    desc: 'Integrate with Greenhouse, Lever, Workday, and 60+ more.',
    href: '/integrations-1/applicant-tracking-systems',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="11" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Set up SSO',
    desc: 'Configure SAML or SCIM with Okta, Azure AD, and others.',
    href: '/integrations-1/single-sign-on-sso',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a5 5 0 015 5v1h1a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h1V7a5 5 0 015-5z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="13" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Test integrity',
    desc: 'Proctoring, plagiarism detection, and security settings.',
    href: '/hackerrank-screen/test_integrity',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Manage team roles',
    desc: 'Set permissions, teams, and admin access levels.',
    href: '/account-settings/roles-management',
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3v3M10 14v3M3 10h3M14 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Question library',
    desc: 'Browse, create, and manage coding and MCQ questions.',
    href: '/library',
  },
];

/* ── Product categories ──────────────────────────────────────── */
const PRODUCTS = [
  { title: 'Screen',      desc: 'Save time and accelerate your hiring with assessments.',  href: '/hackerrank-screen', count: 88,  color: '#16a34a' },
  { title: 'Interview',   desc: 'Conduct stellar technical interviews at scale.',          href: '/interviews',        count: 43,  color: '#2563eb' },
  { title: 'Engage',      desc: 'Promote your tech brand and attract top talent.',         href: '/engage-',           count: 9,   color: '#ea580c' },
  { title: 'SkillUp',     desc: 'Mobilize your tech talent with learning paths.',          href: '/skillup',           count: 19,  color: '#e11d48' },
  { title: 'Chakra',      desc: 'Pre-screen candidates with AI-powered interviews.',       href: '/chakra',            count: 7,   color: '#2EC866' },
];

export default function Home() {
  return (
    <Layout title="Docs" description="HackerRank product documentation, guides, and resources." noSidebar>
      <div className={styles.page}>

        {/* ── Page header ─────────────────────────────────────── */}
        <div className={styles.pageHeader}>
          <div className={styles.inner}>
            <h1 className={styles.pageTitle}>HackerRank Documentation</h1>
            <p className={styles.pageSubtitle}>
              Explore guides and resources for all HackerRank products.
            </p>
          </div>
        </div>

        {/* ── Browse by product ────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <h2 className={styles.sectionHeading}>Browse by product</h2>
            <div className={styles.productGrid}>
              {PRODUCTS.map((p) => (
                <Link key={p.href} to={p.href} className={styles.productCard}>
                  <span className={styles.productDot} style={{ background: p.color }} />
                  <span className={styles.productBody}>
                    <span className={styles.productTitle}>{p.title}</span>
                    <span className={styles.productDesc}>{p.desc}</span>
                  </span>
                  <span className={styles.productCount}>{p.count} articles</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured tasks ───────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.inner}>
            <h2 className={styles.sectionHeading}>Get started</h2>
            <div className={styles.featuredGrid}>
              {FEATURED.map((item) => (
                <Link key={item.href + item.title} to={item.href} className={styles.featuredCard}>
                  <span className={styles.featuredIcon}>{item.icon}</span>
                  <span className={styles.featuredTitle}>{item.title}</span>
                  <span className={styles.featuredDesc}>{item.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
