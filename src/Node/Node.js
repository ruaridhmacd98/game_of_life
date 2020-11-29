import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
    render() {
          const {
                  col,
                  isAlive,
                  timeDead,
                  onMouseDown,
                  onMouseEnter,
                  onMouseUp,
                  row,
                } = this.props;
	  console.log(timeDead)
          const extraClassName = (
            isAlive ? 'node-alive' :
            !isAlive && timeDead === 1 ? 'node-dead1' :
            !isAlive && timeDead === 2 ? 'node-dead2' :
            ''
          );

          return (
                  <div
                    id={`node-${row}-${col}`}
                    className={`node ${extraClassName}`}
                    onMouseDown={() => onMouseDown(row, col)}
                    onMouseEnter={() => onMouseEnter(row, col)}
                    onMouseUp={() => onMouseUp()}></div>
                );
        }
}
