import React from "react";
import Navbar from "./components/navbar";

import './style/styles.css';




function App() {
  return (
    
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="textBox">
          <h2>Created With Extreme<br/><span>Durability</span></h2>
          <p>Shoes transform your body language and attitude. They Lift you
          <br/>physically and emotionally.
          </p>
          <a href="#">ADD TO CART</a>
          <br></br>
          <a href="#">FIND A STORE</a>
        </div>
        </div>
     
     
    </div>
  );
}

export default App;
