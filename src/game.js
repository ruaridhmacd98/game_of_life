import React, {Component} from 'react';
import Node from './Node/Node';

import './game.css';

export default class PathfindingVisualizer extends Component {
    constructor() {
          super();
          this.state = {
                  grid: getInitialGrid(),
                  mouseIsPressed: false,
                  interval: 100,
                  isRunning: false,
                };
        }

    runGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
          window.clearTimeout(this.timeoutHandler);
          this.timeoutHandler = null;
        }
    }

    runIteration() {
      let newBoard = getInitialGrid();
      for (let row = 0; row < newBoard.length ; row++) {
            for (let col = 0; col < newBoard[0].length; col++) {
                    let neighbors = this.calculateNeighbors(this.state.grid, col, row);
                    if (this.state.grid[row][col].isAlive) {
                        if (neighbors === 2 || neighbors === 3) {
                            newBoard[row][col].isAlive=true;
                        } else {
                            newBoard[row][col].isAlive=false;
			    newBoard[row][col].timeDead=1;
                        }
                    } else {
                        if (neighbors === 3) {
                            newBoard[row][col].isAlive=true;
                        }
                        else {
                            newBoard[row][col].isAlive=false;
			    newBoard[row][col].timeDead = 1 + this.state.grid[row][col].timeDead;
                        }
                    }
            }
      }
      this.setState({ grid: newBoard });
      this.timeoutHandler = window.setTimeout(() => {
          this.runIteration();
      },
      this.state.interval);
    }

    calculateNeighbors(grid, col, row) {
            let neighbors = 0;
            const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
            for (let i = 0; i < dirs.length; i++) {
                const dir = dirs[i];
                let y1 = row + dir[0];
                let x1 = col + dir[1];

                if (x1 >= 0 && x1 < grid[0].length && y1 >= 0 && y1 < grid.length && grid[y1][x1].isAlive) {
                        neighbors++;
                }
            }

            return neighbors;
    }

    handleIntervalChange = (event) => {
        this.setState({ interval: event.target.value });
    }

/*
    componentDidMount() {
          const grid = getInitialGrid();
          this.setState({grid});
        }
        */

    handleMouseDown(row, col) {
          const newGrid = getNewGridWithCellToggled(this.state.grid, row, col);
          this.setState({grid: newGrid, mouseIsPressed: true});
        }

    handleMouseEnter(row, col) {
          if (!this.state.mouseIsPressed) return;
          const newGrid = getNewGridWithCellToggled(this.state.grid, row, col);
          this.setState({grid: newGrid});
        }

    handleMouseUp() {
          this.setState({mouseIsPressed: false});
        }

    clearBoard = () => {
          this.setState({ grid: getInitialGrid() });
    }

    randomBoard = () => {
          this.setState({ grid: getRandomGrid() });
    }

    render() {
          const {grid, mouseIsPressed} = this.state;

          return (
          <>
            <div className="controls">
		  Conway's Game of Life
		    <select onChange={this.handleIntervalChange} class="slider" id="myRange" >
			  <option selected disabled>Select Iteration Speed</option>
			  <option value="200">Slow</option>
			  <option value="100">Medium</option>
			  <option value="50">Fast</option>
			  <option value="10">Very Fast</option>
		    </select>
                  {this.state.isRunning ? <button className="button" onClick={this.stopGame}>Stop</button>
                            : <button className="button" onClick={this.runGame}>Run</button>
                  }
                  <button className="button" onClick={this.clearBoard}>Clear Board</button>
                  <button className="button" onClick={this.randomBoard}>Generate Random Starting Pattern</button>
            </div>
            <div className="grid">
              {grid.map((row, rowIdx) => {
                return (
                    <div key={rowIdx}>
                       {row.map((node, nodeIdx) => {
                       const {row, col, isAlive, timeDead} = node;
                       return (
                          <Node
                            key={nodeIdx}
                            col={col}
                            isAlive={isAlive}
			    timeDead={timeDead}
                            mouseIsPressed={mouseIsPressed}
                            onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                            onMouseEnter={(row, col) => this.handleMouseEnter(row, col)}
                            onMouseUp={() => this.handleMouseUp()}
                            row={row}></Node>
                        );
                          })}
                  </div>
                );
              })}
            </div>
          </>
        );
        }
}
const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 25; row++) {
          const currentRow = [];
          for (let col = 0; col < 50; col++) {
                  currentRow.push(createNode(col, row, false));
                }
          grid.push(currentRow);
        }
    return grid;
};
const getRandomGrid = () => {
    const grid = [];
    for (let row = 0; row < 25; row++) {
          const currentRow = [];
          for (let col = 0; col < 50; col++) {
		  var random_boolean = Math.random() < 0.5;
                  currentRow.push(createNode(col, row, random_boolean));
                }
          grid.push(currentRow);
        }
    return grid;
};
const createNode = (col, row, alive) => {
    return {
          col,
          row,
          isAlive: alive,
	  timeDead: 20,
        };
};
const getNewGridWithCellToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
          ...node,
          isAlive: !node.isAlive,
        };
    newGrid[row][col] = newNode;
    return newGrid;
};
