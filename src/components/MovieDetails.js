import { h } from 'hyperapp'


export const MovieDetails = ({ cart_count, id, title, addAction, poster, price, rating, release_date, plot }) => (
    <div>
          <div class="modal is-active">
          <div class="modal-background"></div>
          <div class="modal-card">
          <header class="modal-card-head">
          <p class="modal-card-title">{title} </p>
          
          <button class="delete" aria-label="close"  onclick= { () => { window.history.back() }}></button>
          </header>
          <section class="modal-card-body">

          <div class="columns">

          <div class="column">

         <figure class="media-left">
        
         <img src={`http://${poster}`} />      
        
         </figure>
         
          </div>

          <div class="column">
          <p class="title is-5 has-text-white"> Plot: </p>
          <p class="title is-6 has-text-white"> {plot} </p>
          
          <p class="title is-6 has-text-white">Release date {release_date} </p>  
          <span class="tag is-warning">{rating}</span>
          
            
          </div>
          </div>

    </section>
    <footer class="modal-card-foot">
     
    <a class="button is-success" onclick={ addAction }> 
    <b>  Add to Cart  ${price}  </b>
    </a>
    <b> {cart_count} Items in cart</b>  
    

    </footer>
  </div>
</div>

    </div>
        )
