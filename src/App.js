import React from "react";
import Home from "./Screens/Home";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./styles.css";
import Category from "./Screens/Category";

export default function App() {
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home keyword="India"/>
    </Route>
    

<Route exact path="/:keyword" render={(props) => {
   const keyword = props.match.params.keyword;
    return <Category keyword={keyword} />
}}  />

  </Switch>
</div>
</Router>
  );
}
