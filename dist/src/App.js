import TopContainer from './components/TopContainer'
import Button from '@material-ui/core/Button'
import './App.css';
import DrawerComponent from './components/DrawerComponent';
import Topbar from './components/Topbar';
import MainContainer from './components/MainContainer';
import Trophies from './components/Trophies';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
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
import LoginModal from './components/LoginModal';
import {useState, useContext} from 'react'
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
      <Topbar/>
      <Switch>
      <Route path='/' exact component={MainContainer}/>
      {authCtx.isLoggedIn &&
      <Route path='/profile' component={ProfileForm}/>
      }
      <Route path='/first-team' component={FirstTeam}/>
      <Route path='/staff' component={Staff}/>
      <Route path='/coach' component={Coach}/>
      <Route path='/transfers' component={Transfers}/>
      <Route path='/fixtures' component={Fixtures}/>
      <Route path='/table' component={Table}/>
      <Route path='/top-scorers' component={TopScorers}/>
      <Route path='/champions-league' component={ChampionsLeague}/>
      <Route path='/italian-cup' component={ItalianCup}/>
      <Route path='/anthem' component={Anthem}/>
      <Route path='/fantoken' component={FanToken}/>
      <Route path='/mainNews' component={MainNews}/>
      <Route path='/id1' component={NewsOne}/>
      <Route path='/id2' component={NewsTwo}/>
      <Route path='/id3' component={NewsThree}/>
      <Route path='/id4' component={NewsFour}/>
      <Route path='/id5' component={NewsFive}/>
      <Route path='/id6' component={NewsSix}/>
      <Route path='/id7' component={NewsSeven}/>
      <Route path='/id8' component={NewsEight}/>
      </Switch>
    </div>
    </Router>
  );
}



export default App;
