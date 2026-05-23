export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY is missing in Vercel." });
  }

  try {
    const form = req.body;

    const prompt = `
You are LexVisa AI, an AI-assisted UK immigration workflow assistant.

Do not provide legal advice. Use cautious language.

Analyse this Global Talent visa case and return:

1. Route Assessment
2. Exceptional Talent vs Exceptional Promise
3. Criteria Mapping
4. Strengths
5. Weaknesses
6. Missing Evidence
7. Risk Flags
8. Recommended Evidence Checklist
9. Client Follow-up Questions
10. Draft Document Suggestions
11. Overall Evidence Strength

Candidate information:
${JSON.stringify(form, null, 2)}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a careful UK immigration workflow assistant." },
          { role: "user", content: prompt },
        ],
        temperature: 0.3,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        error: data.error?.message || "OpenAI API error",
      });
    }

    return res.status(200).json({
      result: data.choices[0].message.content,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Server error",
    });
  }
}
