export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      nationality,
      location,
      experience,
      evidence
    } = req.body;

    const prompt = `
You are an expert UK immigration Global Talent assessor.

Analyse this candidate and provide:

1. Recommended route
2. Exceptional Talent vs Promise
3. Main strengths
4. Main weaknesses
5. Missing evidence
6. Risk flags
7. Recommended next steps
8. Overall success potential

Candidate:

Nationality: ${nationality}
Location: ${location}

Professional experience:
${experience}

Evidence:
${evidence}
`;

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are a senior UK immigration Global Talent assessor.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
        }),
      }
    );

    const data = await response.json();

    const result =
      data.choices?.[0]?.message?.content ||
      "No assessment generated.";

    res.status(200).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
