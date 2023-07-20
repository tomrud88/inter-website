module.exports = async () => {
  try {
    const response = await fetch(
      "https://api.football-data.org/v4/competitions/SA/matches",
      {
        method: "GET",
        headers: {
          "X-Auth-Token": "3cb5b9dd8f50443e97d7c53804bd5634",
        },
      }
    );
    const responseData = await response.json();
    const matches = responseData.matches;

    // Process the data if needed

    // Set CORS headers
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://inter-website.vercel.app"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS"); // Adjust this based on your needs
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.json(matches);
  } catch (error) {
    console.error("Error fetching fixtures:", error);
    res.status(500).json({error:"Internal Server Error"})
  }
};
