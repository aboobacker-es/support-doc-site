require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app = express();
app.use(cors({ origin: ['http://localhost:3000', 'http://127.0.0.1:3000'] }));
app.use(express.json({ limit: '64kb' }));

app.post('/api/chat', async (req, res) => {
  const { messages, context, pageTitle } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY is not set in .env' });
  }

  const systemPrompt = [
    'You are a helpful documentation assistant for HackerRank.',
    'You help users understand HackerRank products: Screen (technical assessments),',
    'Interviews (live coding), Library (question bank), SkillUp (learning paths),',
    'Chakra (AI interviews), Engage (hackathons), and Settings/Integrations.',
    'Be concise, accurate, and friendly. If asked something outside HackerRank docs, say so.',
    context
      ? `\nThe user is currently reading: "${pageTitle}"\n\nPage content (for context):\n${context}`
      : '',
  ].join(' ');

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: systemPrompt,
        messages,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error?.message || 'Anthropic API error' });
    }
    res.json({ reply: data.content[0].text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.AI_PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅  HackerRank AI proxy → http://localhost:${PORT}`);
  console.log(`    Set ANTHROPIC_API_KEY in .env to enable the Assistant.`);
});
