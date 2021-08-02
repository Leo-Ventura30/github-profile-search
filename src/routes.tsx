import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ProfileDetailsScreen } from "./features/githubProfile/screens/ProfileDetails"
import { ProfileSearchScreen } from "./features/githubProfile/screens/ProfileSearch"


export const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/profile-search">
            <ProfileSearchScreen />
          </Route>
          
          <Route path="/profile-details">
            <ProfileDetailsScreen />
          </Route>

          <Redirect
            to={{
              pathname: "/profile-search",
            }}
          />
        </Switch>
    </Router>
  );
}
