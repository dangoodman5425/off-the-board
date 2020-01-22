import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navigation from "./components/navigation/Navigation";
import BetHistory from "./components/bethistory/BetHistory";
import Leagues from "./components/leagues/Leagues";
import Games from "./components/games/Games";
import ActiveBets from "./components/activebets/ActiveBets";
import Settings from "./components/settings/Settings";
import Filters from "./components/filters/Filters";


const MainNavigator = createStackNavigator({
    Home: {screen: Home},
    Login: {screen: Login},
    Navigation: {screen: Navigation},
    BetHistory: {screen: BetHistory},
    Leagues: {screen: Leagues},
    Games: {screen: Games},
    ActiveBets: {screen: ActiveBets},
    Settings: {screen: Settings},
    Filters: {screen: Filters},
});

const App = createAppContainer(MainNavigator);

export default App;
