// pages/api/fetchData.js
import axios from "axios";

// Handler API untuk mengambil data dari API eksternal
export default async function handler(req, res) {
  try {
    // Ganti dengan URL API yang ingin Anda panggil
    const apiUrl =
      "https://isb.lkpp.go.id/isb-2/api/daad772d-5a87-474b-b90f-8a416517ed15/json/1827/SPSE-TenderPengumuman/tipe/4:4/parameter/2024:194";

    // Mengambil data dari API menggunakan axios
    const response = await axios.get(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0", // Jika diperlukan, sesuaikan header
      },
    });

    // Mengirimkan respons data API eksternal ke client
    res.status(200).json(response.data);
  } catch (error) {
    // Menangani error jika API gagal
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data from external API." });
  }
}
