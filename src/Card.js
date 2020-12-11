import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Card(props) {
  return (
  <div>
    <div class="ui fluid card">
      <div className="meme">
        <img src={props.memeData.image} alt=""/>
        <h2 className="top">{props.memeData.top_text}</h2>
        <h2 className="bottom">{props.memeData.bottom_text}</h2>
      </div>
      <div class="content">
        <Link class="header">Username</Link>
      </div>
    </div>
  </div>
  )
}
