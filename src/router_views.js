import { h } from 'hyperapp'
import { Link, Route,location, Switch } from "@hyperapp/router"


import { App } from './views/containers/App'
import { ViewMovieDetails } from './views/containers/ViewMovieDetails'
import { ViewCart } from './views/containers/ViewCart'



export const view = ( state, actions ) => 

<div>

<Switch>    
    <Route path="/Hyperapp-shopping-cart-demo" render={ App } />   
    <Route path="/Hyperapp-shopping-cart-demo/cart" render={ ViewCart } />         
    <Route path={ "/Hyperapp-shopping-cart-demo/details/:movie_id"} render={ ViewMovieDetails} />
  </Switch>

</div>
