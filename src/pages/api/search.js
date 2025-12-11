export default function handler(req, res) {
  const { query } = req.query;

  const services = [
    { name: "Washing Machine Repair", description: "Fix leaks, spin issues, and power faults." },
    { name: "Dryer Repair", description: "Solve heating or drum problems." },
    { name: "Iron Repair", description: "Fix temperature or steam problems." },
    { name: "Fridge Repair", description: "Handle cooling issues and compressor faults." },
  ];

  // If no query, return empty
  if (!query) return res.status(200).json({ results: [] });

  const results = services.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json({ results });
}
