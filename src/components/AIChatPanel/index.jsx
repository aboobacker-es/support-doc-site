import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';

function renderText(text) {
  // Simple inline markdown: **bold**, `code`, newlines
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\n)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={i} className={styles.inlineCode}>{part.slice(1, -1)}</code>;
    if (part === '\n') return <br key={i} />;
    return part;
  });
}

export default function AIChatPanel({ open, onClose }) {
  const [messages, setMessages]   = useState([]);
  const [input, setInput]         = useState('');
  const [loading, setLoading]     = useState(false);
  const messagesEndRef            = useRef(null);
  const textareaRef               = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open]);

  const getPageContext = () => {
    const content = document.querySelector('.markdown')?.innerText?.trim() || '';
    const title   = document.querySelector('article h1')?.innerText
                  || document.title.replace(' | HackerRank Docs', '').trim();
    return { content: content.slice(0, 4000), title };
  };

  const send = async () => {
    if (!input.trim() || loading) return;
    const text       = input.trim();
    const newMsgs    = [...messages, { role: 'user', content: text }];
    setMessages(newMsgs);
    setInput('');
    setLoading(true);

    const { content, title } = getPageContext();

    try {
      const res  = await fetch('http://localhost:3001/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMsgs, context: content, pageTitle: title }),
      });
      const data = await res.json();
      setMessages(m => [...m, {
        role: 'assistant',
        content: data.error ? `⚠️ ${data.error}` : data.reply,
      }]);
    } catch {
      setMessages(m => [...m, {
        role: 'assistant',
        content: '⚠️ Could not reach the AI server. Make sure `node api-server.js` is running.',
      }]);
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  };

  if (!open) return null;

  return (
    <div className={styles.panel}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.headerTitle}>
          <span className={styles.sparkle}>✦</span> Assistant
        </span>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close assistant">✕</button>
      </div>

      <p className={styles.disclaimer}>
        Responses are generated using AI and may contain mistakes.
      </p>

      {/* Messages */}
      <div className={styles.messages}>
        {messages.length === 0 && (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>✦</span>
            <p>Ask me anything about HackerRank documentation.</p>
            <div className={styles.suggestions}>
              {['How do I create a test?', 'What integrations are supported?', 'How does proctoring work?'].map(q => (
                <button key={q} className={styles.suggestion} onClick={() => { setInput(q); textareaRef.current?.focus(); }}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? styles.userMsg : styles.assistantMsg}>
            {m.role === 'assistant' ? renderText(m.content) : m.content}
          </div>
        ))}

        {loading && (
          <div className={styles.assistantMsg}>
            <span className={styles.dots}><span/><span/><span/></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className={styles.inputRow}>
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Ask a question..."
          rows={1}
        />
        <button
          className={styles.sendBtn}
          onClick={send}
          disabled={!input.trim() || loading}
          aria-label="Send"
        >↑</button>
      </div>
    </div>
  );
}
