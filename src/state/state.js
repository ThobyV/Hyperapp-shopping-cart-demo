import { location } from "@hyperapp/router"


import  { data } from '../config/data'


export const state =  {
  location: location.state,    
  movies: data,
  movie_list: [],
  cart: [],
  range_value: 160,
  switch_value: false,
  cart_count: 0,
  cart_total: 0,
}

