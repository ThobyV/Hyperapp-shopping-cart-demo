import { h } from 'hyperapp'

export const CartItems = ({ movie_id, title, price, quantity, total, poster }) => (

    <div>

         <article class="media">

         <figure class="media-left">
         <p class="image is-64x64">
         <img src={`http://${poster}`}/>      
         </p>
         </figure>

         <div class="media-content">
         <div class="content">

            <p class="title is-5 has-text-white"> {title} </p>

            <small> ${price} x </small> 
            <b>{quantity} copies</b>

            <p/>

            <small> Total price: </small> <b> ${total}</b>
            
            <hr/>
            
         </div>
         </div>

          </article>

    </div>
        )