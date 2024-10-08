import { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce"; 

const useSerieAFixtures = (initialStartDate, initialEndDate, daysIncrement = 90) => {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(false);
   const [dateRange, setDateRange] = useState({
     startDate: initialStartDate,
     endDate: initialEndDate,
   });
  const isFetching = useRef(false);
  const lastFetchDate = useRef(null);

  useEffect(() => {
    const fetchFixtures = async () => {
      if (
        isFetching.current ||
        (lastFetchDate.current &&
          new Date(lastFetchDate.current) > new Date(dateRange.endDate))
      )
        return;
      isFetching.current = true;
        setLoading(true);
        const scrollPosition = window.scrollY;
      try {
        console.log(
          "Fetching fixtures from:",
          dateRange.startDate,
          "to:",
          dateRange.endDate
        );
        const response = await fetch(
          `/api/fetchFixtures?dateFrom=${dateRange.startDate}&dateTo=${dateRange.endDate}`
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
        setTimeout(() => {
          window.scrollTo(0, scrollPosition);
        }, 0);
          
      } catch (error) {
        console.error("Error fetching fixtures:", error);
        setLoading(false);
      } finally {
        isFetching.current = false;
        lastFetchDate.current = dateRange.endDate;
      }
    };

    fetchFixtures();
  }, [dateRange]);
    
    const handleScroll = debounce(() => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight && !isFetching.current) {
        setDateRange((prevDateRange) => {
          const endDateObj = new Date(prevDateRange.endDate);
          const newStartDate = new Date(endDateObj);
          newStartDate.setDate(newStartDate.getDate() + 1);
          const newEndDate = new Date(newStartDate);
          newEndDate.setDate(newEndDate.getDate() + daysIncrement);

          const limitDate = new Date("2025-06-24");
          if (newEndDate > limitDate) {
            console.log("Reached the limit date of 2025-06-23. No more fetching.");
            return prevDateRange;
          }

  console.log("Previous End Date:", prevDateRange.endDate);
  console.log("New Start Date:", newStartDate.toISOString().split("T")[0]);
  console.log("New End Date:", newEndDate.toISOString().split("T")[0]);

           return {
             startDate: newStartDate.toISOString().split("T")[0],
             endDate: newEndDate.toISOString().split("T")[0],
           };
        });
      }
    }, 200);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

  return { fixtures, loading };
};

export default useSerieAFixtures;
