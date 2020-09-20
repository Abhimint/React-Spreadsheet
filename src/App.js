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
      activeCell: ''
    }
  }

  handleClick = (currentActiveCell) => {
    this.setState({activeCell: currentActiveCell});
    console.warn('Currently Active cell is', currentActiveCell);
  }

  handleFormulaBarResult = (formulaBarResult) => {
    const activeCell = document.getElementById(this.state.activeCell);
    activeCell.value = formulaBarResult;
  }

  render() {
    return (
      // <CellProvider value={this.state.cellInput}> 
        <div className="App">
          <header className="App-header">
            <FormulaBar 
              computedValue={this.handleFormulaBarResult.bind(this)}
            />
            <Sheet 
              activeCellChangeCallback={this.handleClick.bind(this)}
            />
          </header>
      </div>
      // </CellProvider>
      
    );
  }
}

export default App;