import React from 'react';
import styles from './AskAssistant.module.css';

export default function AskAssistant() {
  return (
    <button
      className={styles.btn}
      onClick={() => window.__hrChatToggle?.()}
      aria-label="Open AI Assistant"
    >
      <span className={styles.icon}>✦</span>
      Ask Assistant
    </button>
  );
}
