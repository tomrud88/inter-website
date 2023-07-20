module.exports = async () => {
  const response = await fetch(
    "https://api.football-data.orgv4/competitions/SA/matches",
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

  return matches;
};
