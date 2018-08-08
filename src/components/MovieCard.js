import { h } from 'hyperapp'
import {Enter, Exit, Move} from "@hyperapp/transitions"
import { Link, Route, location, Switch } from "@hyperapp/router"

export const MovieCard = ({ movie_id, title, poster, price, rating, planet_shipping, plot }) => (

<div>

<Link to={`/Hyperapp-shopping-cart-demo/details/${movie_id}`} >

 <Enter time={200} easing="ease-in-out" 
        css={{opacity: "0", transform: "scale(1,1)"}}>

    <div class="box">
    <div class="media">
    
    <div class="media-content">

      <div class="content">
      <span class="badge is-badge-warning is-badge-large" data-badge={rating}></span>
      </div>

       <div class="content">
       <p class="title is-6 has-text-light"> {title} </p>
       </div>

        <div class="content">
       <div class="tags has-addons">
         { planet_shipping &&
         <span class="tag is-success">ships to mars</span>  } 
        </div>
        </div>


       <div class="content">
       <figure class="image">
       <img src={`http://${poster}`}/>
       </figure>
       </div>
      

      <nav class="level is-mobile">
    
            <span class="level-item"> 
            <b> ${price} </b>
             </span>
        

      </nav>
      </div>


    </div>
    </div>

    
    </Enter>
    </Link>
</div>
    )
