import { h } from 'hyperapp'
import { Link, Route,location, Switch } from "@hyperapp/router"


import { App } from './views/containers/App'
import { ViewMovieDetails } from './views/containers/ViewMovieDetails'
import { ViewCart } from './views/containers/ViewCart'



export const view = ( state, actions ) => 

<div>

<Switch>    
    <Route path="/" render={ App } />   
    <Route path="/cart" render={ ViewCart } />         
    <Route path={ "/details/:movie_id"} render={ ViewMovieDetails} />
  </Switch>

</div>
