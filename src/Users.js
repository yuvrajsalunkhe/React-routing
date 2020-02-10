import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useLocation,
    useParams    
  } from 'react-router-dom';

export default function Users() {
    let match = useRouteMatch();
    return (
        <div>
         <h2>Users</h2>

        <ul>
        <li>
            <Link to={`${match.url}/yuvi`}>Yuvraj</Link>
        </li>
        <li>
            <Link to={`${match.url}/Sagar`}>
            Sagar
            </Link>
        </li>
        </ul>


        <Switch>
        <Route path={`${match.path}/:username`}>
            <User />
        </Route>
        <Route path={match.path}>
            <h3>Please select a user.</h3>
        </Route>
        </Switch>
        </div>
    )
}

function User() {
    let { username } = useParams();
    console.log(useLocation())
    return <h3>User Name: {username}</h3>;
  }