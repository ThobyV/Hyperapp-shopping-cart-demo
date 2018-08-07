import { location } from "@hyperapp/router"


export const actions = {

  location: location.actions,

  GET_ALL_MOVIES: () => (state) => ({ 
    movie_list: state.movie_list = state.movies,      
  }),

  FILTER_BY_PRICE: (event) => (state) => ({ 
    range_value: state.range_value = event.target.value,    
    movie_list: state.movie_list = state.movies.filter( movies => 
      state.switch_value ? 
      movies.price <=  state.range_value && movies.planet_shipping == true :
      movies.price <= state.range_value ),
  }),

  FILTER_BY_SHIPPING: (event) => (state) => ({
    switch_value: state.switch_value = event.target.checked,    
    movie_list: state.movie_list = state.movies.filter( movies => 
      state.switch_value ? 
      movies.price <=  state.range_value && movies.planet_shipping == true :
      movies.price <= state.range_value ),   
  }),


  ADD_MOVIE_TO_CART: (movie_id) => (state) => ({
    cart_count: state.cart_count += 1,
    cart:  state.cart.filter(movie => movie.id === movie_id).length>0  ?
    Object.assign(state.cart, state.cart[state.cart.findIndex(obj =>
    obj.id === movie_id )].quantity ++ )
     : 
    state.cart.concat(state.movies.filter( movie => movie.id == movie_id).map(res =>
    ({ movie_title: res.title,
       price: res.price, 
       movie_poster: res.poster_path, 
       total: res.price, quantity: 1,
       id: res.id }) )),
    cart_total: state.cart.reduce( (acc, cur) => {
    return acc + cur.price * cur.quantity;
    
    }, 0),
    
  }),

}
 