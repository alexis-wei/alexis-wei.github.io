import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.png"
import "./layout.css"

const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem'}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
  <div style={{ margin: `2rem auto`, maxWidth: 1000, padding: `0 0.5rem` }}>
    <header style={{ marginBottom: `0`}}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <img src={ logo } alt="AW"  style={{height: 80, paddingBottom: "1rem"}}/>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
        </ul>
    </header>
    {children}
  </div>
)