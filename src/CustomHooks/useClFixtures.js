import { useState, useEffect } from "react";

const useClFixtures = (initialStartDate, initialEndDate) => {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dateRange, setDateRange] = useState({
        startDate: initialStartDate,
        endDate: initialEndDate,
    });



    useEffect(() => {
        const fetchFixtures = async () => {
            const response = await fetch(`/api/fetchChampionsLeague?dateFrom=${dateRange.startDate}&dateTo=${dateRange.endDate}`);
            const responseData = await response.json();

            const matches = responseData.matches;
            console.log(matches);

            const loadedData = [];

            for (const key in matches) {
                loadedData.push({
                    id: key,
                    homeTeam: matches[key].homeTeam.name,
                    awayTeam: matches[key].awayTeam.name,
                    scoreHomeTeam: matches[key].score.fullTime.home,
                    scoreAwayTeam: matches[key].score.fullTime.away,
                    round: matches[key].matchday,
                    date: matches[key].utcDate,
                });
            }
            setFixtures(loadedData);
        };
        fetchFixtures();
    }, []);

    return { fixtures, loading };
}

export default useClFixtures;