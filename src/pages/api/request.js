export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      console.log("New repair request received:", data);

      // You could save this data to a database later (MongoDB, Supabase, etc.)
      return res.status(200).json({ success: true, message: "Request saved successfully!" });
    } catch (error) {
      console.error("Error saving request:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
