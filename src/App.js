import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './cell/Cell';
import Sheet from './sheet/Sheet';
import FormulaBar from './formula-bar/FormulaBar';
// import CellProvider from './context-provider/CellProvider';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeCell: '',
      cellInput: ''
    }
  }

  handleClick = (currentActiveCell) => {
    // state at this point will only produce "pending state" which is always a step behind
    // cannot use it in the same function. Let the cycle of the state update complete before using 
    // it elsewhere
    this.setState({activeCell: currentActiveCell});
    console.warn('Currently Active cell is', currentActiveCell);
  }

  handleChange = (formulaBarRealTimeInput) => {
    // updating the state and writing it to the cell. Not the best implementation as this
    // should have been done using Redux best or atleast via context api or props sent down
    const activeCell = document.getElementById(this.state.activeCell);
    this.setState({cellInput: formulaBarRealTimeInput}, () => {
      activeCell.value = this.state.cellInput;
    });
  }

  render() {
    return (
      // <CellProvider value={this.state.cellInput}> 
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
              <Cell id="firstCell" />
              <FormulaBar
                // activeCellToWriteTo={this.state.activeCell}
                realTimeFormulaInput={this.handleChange.bind(this)}
              />
              <Sheet 
                activeCellChangeCallback={this.handleClick.bind(this)}
                inputForActiveCell={this.state.cellInput}
              />
          </header>
      </div>
      // </CellProvider>
      
    );
  }
}

export default App;