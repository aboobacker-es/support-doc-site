import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const CATEGORIES = [
  {
    icon: '🖥️',
    title: 'Screen',
    description: 'Create tests, invite candidates, and review results.',
    href: '/hackerrank-screen',
    count: 88,
    color: '#dcfce7',
  },
  {
    icon: '💬',
    title: 'Interviews',
    description: 'Conduct live technical interviews with integrated tools.',
    href: '/interviews',
    count: 43,
    color: '#dbeafe',
  },
  {
    icon: '🔗',
    title: 'Integrations',
    description: 'Connect HackerRank with your ATS, SSO, and other tools.',
    href: '/integrations-1',
    count: 95,
    color: '#fef9c3',
  },
  {
    icon: '⚙️',
    title: 'Account Settings',
    description: 'Manage users, roles, teams, and company configuration.',
    href: '/account-settings',
    count: 51,
    color: '#f3e8ff',
  },
  {
    icon: '📚',
    title: 'Library',
    description: 'Build and manage your question bank and assessments.',
    href: '/library',
    count: 51,
    color: '#ffedd5',
  },
  {
    icon: '❓',
    title: 'General Help',
    description: 'Release notes, evaluation guides, and FAQs.',
    href: '/general-help',
    count: 28,
    color: '#e0f2fe',
  },
  {
    icon: '🎓',
    title: 'SkillUp',
    description: 'Learning paths and upskilling for developers.',
    href: '/skillup',
    count: 19,
    color: '#fce7f3',
  },
  {
    icon: '🤖',
    title: 'Chakra AI',
    description: 'AI-powered interview documentation and guides.',
    href: '/chakra',
    count: 7,
    color: '#ccfbf1',
  },
  {
    icon: '⚡',
    title: 'Engage',
    description: 'Developer engagement and community features.',
    href: '/engage-',
    count: 9,
    color: '#fef3c7',
  },
];

const QUICK_LINKS = [
  { label: 'Create a test', href: '/hackerrank-screen/managing-tests/creating-a-new-test' },
  { label: 'Invite candidates', href: '/hackerrank-screen/inviting-candidates' },
  { label: 'Set up SSO', href: '/integrations-1/single-sign-on-(sso)-' },
  { label: 'Connect an ATS', href: '/integrations-1/applicant-tracking-systems' },
  { label: 'Manage team roles', href: '/account-settings/roles-management' },
  { label: 'Test integrity', href: '/hackerrank-screen/test_integrity' },
];

function CategoryCard({ icon, title, description, href, count, color }) {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.cardIcon} style={{ background: color }}>
        <span>{icon}</span>
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>
        <span className={styles.cardCount}>{count} articles</span>
      </div>
    </Link>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Help Center" description={siteConfig.tagline} noSidebar>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>HackerRank Documentation</p>
          <h1 className={styles.heroTitle}>How can we help you?</h1>
          <p className={styles.heroSubtitle}>
            Find answers, guides, and resources for all HackerRank products.
          </p>
        </div>
      </div>

      {/* Quick links */}
      <div className={styles.quickSection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Popular articles</p>
          <div className={styles.quickGrid}>
            {QUICK_LINKS.map((link) => (
              <Link key={link.href} to={link.href} className={styles.quickLink}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Category grid */}
      <div className={styles.categorySection}>
        <div className={styles.sectionInner}>
          <p className={styles.sectionLabel}>Browse by product</p>
          <div className={styles.cardGrid}>
            {CATEGORIES.map((cat) => (
              <CategoryCard key={cat.href} {...cat} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
