// pages/api/fetchData.js
import axios from "axios";

export default async function handler(req, res) {
  try {
    const apiUrl =
      "https://isb.lkpp.go.id/isb-2/api/daad772d-5a87-474b-b90f-8a416517ed15/json/1827/SPSE-TenderPengumuman/tipe/4:4/parameter/2024:194";

    // Mengatur headers lebih lengkap agar lebih mirip dengan permintaan dari browser
    const response = await axios.get(apiUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "application/json", // Pastikan API menerima format JSON
        "Content-Type": "application/json",
        // Header tambahan jika diperlukan (sesuaikan dengan dokumentasi API)
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data from external API." });
  }
}
