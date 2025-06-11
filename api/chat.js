import puter from 'puter.ai';

export default async function handler(req, res) {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const result = await puter.ai.chat(prompt);
    res.status(200).json({ text: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'PuterAI failed', details: err.message });
  }
}
