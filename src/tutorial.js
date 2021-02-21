import React from 'react';
import Popup from 'reactjs-popup';
import './tutorial.css';

export default () => (
  <Popup
    trigger={<button className="button"> Tutorial </button>}
    open='true'
    modal
    nested
  >
    {close => (
      <div className="tut">
	<center>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"><h1>Tutorial</h1></div>
        <div className="content">
          {' '}
          Click and drag to place cells. <br/>
	  Or press 'Random' to start with a random grid.<br/> 
	  Press 'Run' to start the simulation.<br/>
	    <h1>Explanation</h1>
	At each step in time, the following transitions occur: <br/>

Any live cell with fewer than two live neighbours dies, as if by underpopulation. <br/>
Any live cell with two or three live neighbours lives on to the next generation. <br/>
Any live cell with more than three live neighbours dies, as if by overpopulation. <br/>
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.<br/>
	    <br/>
        </div>
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
            Got it.
          </button>
        </div>
	</center>
      </div>
    )}
  </Popup>
);
