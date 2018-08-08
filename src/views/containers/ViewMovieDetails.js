import { h } from 'hyperapp';

import { MovieDetails  } from '../../components/MovieDetails'


export const ViewMovieDetails = ({match}) => (state, actions) => (

<div> 


{ 
   
    state.
    movie_list.
    filter( movie => movie.id == match.params.movie_id ).
    map( ({ id, title, overview, poster_path, vote_average, release_date , price }) => 

    <MovieDetails 
        cart_count={state.cart_item_count}
        id={id}
        title={title}
        plot={overview}
        poster={poster_path}
        price={price}
        rating={vote_average}
        release_date={release_date}
        addAction={  () => actions.ADD_MOVIE_TO_CART(id) }
        />
     
    )
  } 
</div>
)
