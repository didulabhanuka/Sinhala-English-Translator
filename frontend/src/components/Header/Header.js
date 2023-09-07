import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Adheader() {

  return (
    <div>

      <body>
        <nav>
          <div class="navbar1">
            <div class="container nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              <div class="logo">
                <br></br><h2>Sinhala-English Translator</h2>
              </div>
              <div class="menu-items">
                <li className="head-li"><a className="head-a" href="/">Translator</a></li>
                <li className="head-li"><a className="head-a" href="/synonym">Synonyms</a></li>
                <li className="head-li"><a className="head-a" href="/antonym">Antonyms</a></li>
                <li className="head-li"><a className="head-a" href="#">Phase book</a></li>
                <li className="head-li"><a className="head-a" href="#">About</a></li>
              </div>
            </div>
          </div>
        </nav>
      </body>

    </div>
  );
}
export default Adheader;