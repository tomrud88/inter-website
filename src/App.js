import TopContainer from './components/TopContainer'
import Button from '@material-ui/core/Button'
import './App.css';
import DrawerComponent from './components/DrawerComponent';
import Topbar from './components/Topbar';
import MainContainer from './components/MainContainer';
import Trophies from './components/Trophies';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import FirstTeam from './components/TeamMenu/FirstTeam';
import Staff from './components/TeamMenu/Staff';
import Coach from './components/TeamMenu/Coach';
import Transfers from './components/TeamMenu/Transfers';
import Fixtures from './components/SerieAMenu/Fixtures';
import Table from './components/SerieAMenu/Table';
import TopScorers from './components/SerieAMenu/TopScorers';
import ChampionsLeague from './components/CupsMenu/ChampionsLeague';
import ItalianCup from './components/CupsMenu/ItalianCup';
import Anthem from './components/FansMenu/Anthem';
import FanToken from './components/FansMenu/FanToken';
import MainNews from './components/newsFolder/MainNews';
import NewsOne from './components/newsFolder/NewsOne';
import NewsTwo from './components/newsFolder/NewsTwo';
import NewsThree from './components/newsFolder/NewsThree';
import NewsFour from './components/newsFolder/NewsFour';
import NewsFive from './components/newsFolder/NewsFive';
import NewsSix from './components/newsFolder/NewsSix';
import NewsSeven from './components/newsFolder/NewsSeven';
import NewsEight from './components/newsFolder/NewsEight';
import { useState, useContext } from 'react';
import zIndex from '@material-ui/core/styles/zIndex';
import { makeStyles } from '@material-ui/core';
import ProfileForm from './components/ProfileForm';
import AuthContext, { AuthContextProvider } from './store/auth-context';


const useStyles = makeStyles((theme)=>({
   
}));

function App() {
  const classes = useStyles()

  const authCtx = useContext(AuthContext)
  return (
    <Router>
      <div className={classes.App}>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<MainContainer />} />
          {authCtx.isLoggedIn && (
            <Route path="/profile" element={<ProfileForm />} />
          )}
          <Route path="/first-team" element={<FirstTeam/>} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/coach" element={<Coach/>} />
          <Route path="/transfers" element={<Transfers/>} />
          <Route path="/fixtures" element={<Fixtures/>} />
          <Route path="/table" element={<Table/>} />
          <Route path="/top-scorers" element={<TopScorers/>} />
          <Route path="/champions-league" element={<ChampionsLeague/>} />
          <Route path="/italian-cup" element={<ItalianCup/>} />
          <Route path="/anthem" element={<Anthem/>} />
          <Route path="/fantoken" element={<FanToken/>} />
          <Route path="/mainNews" element={<MainNews/>} />
          <Route path="/id1" element={<NewsOne/>} />
          <Route path="/id2" element={<NewsTwo/>} />
          <Route path="/id3" element={<NewsThree/>} />
          <Route path="/id4" element={<NewsFour/>} />
          <Route path="/id5" element={<NewsFive/>} />
          <Route path="/id6" element={<NewsSix/>} />
          <Route path="/id7" element={<NewsSeven/>} />
          <Route path="/id8" element={<NewsEight/>} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
