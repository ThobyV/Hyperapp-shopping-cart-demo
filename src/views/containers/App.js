import { h } from 'hyperapp'
import { Link, Route, location, Switch } from "@hyperapp/router"

import { NavBar } from '../../components/NavBar'
import { MovieCard }  from '../../components/MovieCard'


export const App = () => ( state, actions ) =>


<div oncreate= { () => actions.GET_ALL_MOVIES() } >

      <NavBar cart_count= {state.cart_count}/> 

<section class="section">
<div class="container">    
<div class="columns">
<div class="column  is-3">    

    <div class="box">
    <div class="content">   
    <b> Highest Price: ${state.range_value} </b>
    <input   
    type="range" 
    oninput = { (event) => actions.FILTER_BY_PRICE(event) }    
    onchange = { (event) => actions.FILTER_BY_PRICE(event) }                          
    class="slider is-fullwidth is-small is-circle" 
    step="0.1" min="0" max="150" 
    value = {state.range_value}  />
    </div>

    <h1 class="title is-6 has-text-white"> Only show mars shipping movies</h1>

    <div class="field">
    <input id="switchMovie"
     type="checkbox" 
     name="switchMovie" 
     class="switch is-success" 
     checked={state.switch_value}
     onchange= { (event) => actions.FILTER_BY_SHIPPING(event) } />
     <label for="switchMovie"></label>
 
     </div>

    </div>

    </div>  

<div class="column  is-9">    
<div class="columns is-multiline is-mobile">

  { state.movie_list &&
    state.movie_list.map(
   ({ id, title, poster_path, price, vote_average, planet_shipping, overview, release_date }) =>

<div className="column  is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd">


      <MovieCard movie_id = {id}
                 title = {title } 
                 poster = {poster_path }
                 price = {price}
                 rating = {vote_average}
                 planet_shipping = { planet_shipping } 
                 plot = { overview }
                 release_date = {release_date }  /> 
        
          </div>  
                  )

  } 

</div>
</div>
</div>
</div>
</section>

     </div>   
 
 