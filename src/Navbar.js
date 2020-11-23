import React from "react";

function Navbar() {
    return (
        <div class="ui container">
            <div class="ui secondary menu">
                <a class="active item">Home</a>
                <a class="item">Generator</a>
                <a class="item">My Memes</a>
                <div class="right menu">
                    <a class="item">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar