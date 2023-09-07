import React from "react";
import './Synonyms.css';

export default function Synonyms() {

  return (
    <div>
      <br></br>
      <br></br>

      <h1>SYNONYMS</h1>

      <form role="search">
        <input id="search" type="search" placeholder="type any word" />
        <button type="submit">Go</button>
      </form>

      <span class="bi bi-plus-circle-fill"></span>

    </div>

  )
}
