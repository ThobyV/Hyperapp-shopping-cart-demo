import { h , app } from 'hyperapp'

import {  location } from "@hyperapp/router"

import { state }  from './state/state'
import  { actions } from './actions/actions'
import { view }   from './router_views'


import  './styles/app.scss'


const main = app(state, actions, view, document.querySelector('.hyperapp-root'))

const unsubscribe = location.subscribe(main.location)