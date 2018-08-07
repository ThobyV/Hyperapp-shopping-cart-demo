import { h } from 'hyperapp';

import { CartItems } from '../../components/CartItems'
import { NavBar } from '../../components/NavBar'



export const ViewCart = ({match}) => ( state, actions ) => (
   
    
<div>

    <NavBar cart_count= {state.cart_count}/> 

<section class="section">
<div class="container">    

             <p class="title is-3 has-text-white"> Cart Items </p>

{
    state.cart.filter(res => res.id )
    .map( res => 
    
        <CartItems movie_id={res.id}
        title={res.movie_title}
        price={res.price}
        quantity= {res.quantity}
        total= {res.quantity * res.price }
        poster= {res.movie_poster}
        />


    )

    
}
    { <p class="title is-5 has-text-white"> total price: ${state.cart_total}  </p> }


</div>
</section>
</div>

)

