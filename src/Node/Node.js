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
            !isAlive && timeDead === 3 ? 'node-dead3' :
            !isAlive && timeDead === 4 ? 'node-dead4' :
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
