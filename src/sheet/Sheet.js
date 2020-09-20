import React from 'react';
import ReactDOM from 'react-dom';
import './Sheet.css';

import Cell from './../cell/Cell';
import strings from "./../Strings.json";
import withCellIdentifyingLayout from '../withCellIdentifyingLayout';

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
        const {activeCellChangeCallback} = this.props;
        activeCellChangeCallback(firstCell.id);
    }

    getActiveCell = (event) => {
        // Callback from parent to fill active cell value
        const {activeCellChangeCallback} = this.props;
        activeCellChangeCallback(event.target.id);
        this.setState({currentActiveCell: event.target});
    }

    render() {
        const cellsToRender = [];
        for (let rows = 0; rows <= 30; rows++){
            for (let cols = 0; cols <= strings.alphabetList.length - 1; cols++){
                cellsToRender.push(<Cell id={strings.alphabetList[cols]+rows.toString()}></Cell>);
            }
        }
        return (
                <div 
                    className="sheet"
                    onClick={(event) => this.getActiveCell(event)}
                >
                        {cellsToRender}
                </div>
        );
    }
}

const SheetClass = withCellIdentifyingLayout(Sheet);

export default SheetClass;