module.exports = async (req, res) => {
  const { dateFrom, dateTo } = req.query;

  try {
    const response = await fetch(
      `https://api.football-data.org/v4/competitions/CL/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`,
      {
        method: "GET",
        headers: {
          "X-Auth-Token": "3cb5b9dd8f50443e97d7c53804bd5634",
        },
      }
    );
    const responseData = await response.json();
    

    // Process the data if needed

    // Set CORS headers
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://inter-website.vercel.app"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS"); // Adjust this based on your needs
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.json(responseData);
  } catch (error) {
    console.error("Error fetching fixtures:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
