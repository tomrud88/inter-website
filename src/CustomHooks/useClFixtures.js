import { useState, useEffect } from "react";

const useClFixtures = (pageSize = 10) => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchFixtures = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/fetchFixtures?page=${currentPage}&pageSize=${pageSize}`
        );
        const responseData = await response.json();

        const loadedData = responseData.map((item, index) => ({
          id: item.id,
          homeTeam: item.homeTeam.name,
          awayTeam: item.awayTeam.name,
          scoreHomeTeam: item.score.fullTime.home,
          scoreAwayTeam: item.score.fullTime.away,
          round: item.matchday,
        }));

        setFixtures(loadedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching fixtures:", error);
        setLoading(false);
      }
    };

    fetchFixtures();
  }, [currentPage, pageSize]);
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        setCurrentPage((prev) => prev + 1);
      }
    };

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () =>
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));

  return { fixtures, loading, currentPage, nextPage, prevPage };
};

export default useClFixtures;
