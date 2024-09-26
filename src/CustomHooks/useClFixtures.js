import { useState, useEffect } from "react";

const useClFixtures = (initialStartDate, initialEndDate, daysIncrement = 30) => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  useEffect(() => {
    const fetchFixtures = async () => {
        setLoading(true);
        const scrollPosition = window.scrollY;
      try {
        const response = await fetch(
          `/api/fetchFixtures?dateFrom=${startDate}&dateTo=${endDate}`
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

        setFixtures((prevFixtures) => [...prevFixtures, ...loadedData]);
          setLoading(false);
          window.scrollTo(0, scrollPosition);
      } catch (error) {
        console.error("Error fetching fixtures:", error);
        setLoading(false);
      }
    };

    fetchFixtures();
  }, [startDate, endDate]);
    
    useEffect(() => {
      const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } =
          document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
          const newStartDate = new Date(endDate);
          const newEndDate = new Date(newStartDate.getDate() + 1);
          newEndDate.setDate(newEndDate.getDate() + daysIncrement);

          setStartDate(newStartDate.toISOString().split("T")[0]);
          setEndDate(newEndDate.toISOString().split("T")[0]);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [endDate, daysIncrement]);

  return { fixtures, loading };
};

export default useClFixtures;
