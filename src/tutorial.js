import React from 'react';
import Popup from 'reactjs-popup';
import './tutorial.css';

export default () => (
  <Popup
    trigger={<button className="button"> Tutorial </button>}
    modal
    nested
  >
    {close => (
      <div className="tut">
	<center>
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> <b>Tutorial</b> </div>
        <div className="content">
          {' '}
          Click and drag to place cells. <br/>
	  Or press 'Random' to start with a random grid.
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
