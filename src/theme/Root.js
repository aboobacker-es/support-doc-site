import React, { useState, useEffect } from 'react';
import AIChatPanel from '@site/src/components/AIChatPanel';

export default function Root({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.__hrChatOpen  = () => setOpen(true);
    window.__hrChatClose = () => setOpen(false);
    window.__hrChatToggle = () => setOpen(o => !o);
    return () => {
      delete window.__hrChatOpen;
      delete window.__hrChatClose;
      delete window.__hrChatToggle;
    };
  }, []);

  return (
    <>
      {children}
      <AIChatPanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
