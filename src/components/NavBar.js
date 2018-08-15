import { h } from 'hyperapp'

import { Link, Route, location, Switch } from "@hyperapp/router"

export const NavBar =  ({cart_count}) => (
<nav class="navbar is-primary has-shadows" role="navigation" aria-label="main navigation">
<div class="navbar-brand">

<a class="navbar-item" href=""> 
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" 
viewBox="0 0 133.80357 132.29168"><g transform="translate(-37.57 -49.048)"><rect width="132.292" height="90.714" x="38.554" y="90.625" ry="9.719" fill="#edc905" paint-order="stroke fill markers"/><rect width="5.292" height="61.988" x="12.631" y="72.602" ry="1.911" transform="rotate(-34.65)" fill="#edc905" paint-order="stroke fill markers"/><rect transform="rotate(-145.35)" ry="1.911" y="-39.86" x="-154.078" height="61.988" width="5.292" fill="#edc905" paint-order="stroke fill markers"/><ellipse cx="148.923" cy="115.949" rx="7.56" ry="7.182" paint-order="stroke fill markers"/></g></svg>
</a>

<Link to="/cart" class="navbar-item">
<span class="badge is-badge-danger is-badge-medium" data-badge={cart_count}>
<svg xmlns="http://www.w3.org/2000/svg" 
width="25" height="25" fill="#FFFFFF" 
viewBox="0 0 8 8">
<path d="M.34 0a.5.5 0 0 0 .16 1h1.5l.09.25.41 1.25.41 1.25c.04.13.21.25.34.25h3.5c.14 0 .3-.12.34-.25l.81-2.5c.04-.13-.02-.25-.16-.25h-4.44l-.38-.72a.5.5 0 0 0-.44-.28h-2a.5.5 0 0 0-.09 0 .5.5 0 0 0-.06 0zm3.16 5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"
transform="translate(0 1)" />
</svg>
</span>
</Link>
</div>

</nav> )