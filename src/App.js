import './App.css';
import Topbar from './components/Topbar';
import MainContainer from './components/MainContainer';
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
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import ProfileForm from './components/ProfileForm';
import AuthContext from './store/auth-context';
import SingleNews from './components/newsFolder/SingleNews';


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
          <Route path="/first-team" element={<FirstTeam />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/coach" element={<Coach />} />
          <Route path="/transfers" element={<Transfers />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/table" element={<Table />} />
          <Route path="/top-scorers" element={<TopScorers />} />
          <Route path="/champions-league" element={<ChampionsLeague />} />
          <Route path="/italian-cup" element={<ItalianCup />} />
          <Route path="/anthem" element={<Anthem />} />
          <Route path="/fantoken" element={<FanToken />} />
          <Route path="/mainNews" element={<MainNews />} />
          <Route path="/:id" element={<SingleNews />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
