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
          const extraClassName = isAlive
            ? 'node-alive'
            : '';

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
