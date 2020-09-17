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
    this.setState({activeCell: currentActiveCell});
    console.warn('Currently Active cell is', currentActiveCell);
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
              <FormulaBar />
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