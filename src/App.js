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