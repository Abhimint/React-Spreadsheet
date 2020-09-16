import React from 'react';
import ReactDOM from 'react-dom';
import './Sheet.css';

import Cell from './../cell/Cell';
import strings from "./../Strings.json";
import withCellIdentifyingLayout from '../withCellIdentifyingLayout';

/*
Goals
    - #1: get the Sheet component to display a series of static cells in one row
    for a fixed width  -- done
    - #2: add multiple rows to copy the same  -- done
    - #3: keep focus still active on cell if next activeElement is FormulaBar  -- * optional *
    - #4: maybe create a 'focus stack'? that keeps a track of which cell was last in focus before 
    user moved onto the formula bar?
        - use state to check which cell is in focus and feed that as a prop on the sheet level -- done
            - Had to use a callback prop to do this. States cannot be used to mutate the prop of the same component
*/ 

/*
Thoughts
    - Choosing "grid" layout over "table" layout to make it easier to get set up 
    with dynamic positioning and tagging of elements
        - furthermore, it is much more easier to extend the grid for a "dynamic spreadsheet"
        and is a more robust, new api in this context compared to table
*/

class Sheet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reaTimeCellInput: '',
            currentActiveCell: null
        }
    }

    componentDidMount() {
        const firstCell = ReactDOM.findDOMNode(this).childNodes[0];
        firstCell.focus();
        // Temp. For accuracy when the first cell by default is 'A0'. Shift this callback later 
        // into a state or some default const on app init
        const {activeCellChangeCallback} = this.props;
        activeCellChangeCallback(firstCell.id);
    }

    componentDidUpdate() {
        console.warn("From app to sheet: input for focused cell - ", this.props.inputForActiveCell);
        // declaring setState here on load will break; too many cells to display
        // this.setState({reaTimeCellInput: this.props.inputForActiveCell});
        // const currentActiveCell = this.state.currentActiveCell;
        // currentActiveCell.value = this.props.inputForActiveCell;
        // console.warn("Ran handleChange in Sheet. Current active cell", currentActiveCell);
    }

    getActiveCell = (event) => {
        const {activeCellChangeCallback} = this.props;
        activeCellChangeCallback(event.target.id);

        this.setState({currentActiveCell: event.target});
    }

    render() {
        // console.warn(strings.alphabetList.length);
        const rowsToRender = [];
        for (let rows = 0; rows <= 30; rows++){
            rowsToRender.push(<div>{rows.toString}</div>+"\n");
        }

        const cellsToRender = [];
        for (let rows = 0; rows <= 30; rows++){
            for (let cols = 0; cols <= strings.alphabetList.length - 1; cols++){
                cellsToRender.push(<Cell id={strings.alphabetList[cols]+rows.toString()}></Cell>);
            }
        }
        return (
            // <CellIdentifier>
                <div 
                    className="sheet"
                    onClick={(event) => this.getActiveCell(event)}
                    // inputForActiveCell={this.props.inputForActiveCell}
                >
                        {cellsToRender}
                </div>
            // </CellIdentifier>
        );
    }
}

const SheetClass = withCellIdentifyingLayout(Sheet);

export default SheetClass;