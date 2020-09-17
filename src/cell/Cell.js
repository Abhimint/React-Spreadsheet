import React from 'react';
import './Cell.css';
import PropTypes from 'prop-types'
// import { RealTimeCellInput } from './../App';
// import CellContext from './../context-provider/CellContext';

/*
Goals
    - #1: get the cells to have default behaviour of disabled -- done
    - #2: on double mouseDown callback change input from being disabled to be abled -- done
    - #3: design how you can get the value of the cell to be updatable once it is modified by the 
    formula component 
    - #4: check how to enable the direction key capability on every input cell
        - using focus on the cell as a state in on the cell level itself that is updated via prop
        - might then have to control this using an HOC 
    - #5: add a onkeypress event handler that updates the 'readonly' state to false 
    and allows you to type
    - #6: * optional * on hover of the cell, display its id 
*/

export default class Cell extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            readOnly: true,
            reaTimeCellInput: ''
        };
        this.thisCell = React.createRef();
    }

    enableForAddingValue() {
        this.setState({readOnly: !this.state.readOnly})
        console.warn("doubleclick fired");
    }

    stateWhenFocused() {
        const node = this.thisCell.current;
        node.activeElement ? this.setState({readOnly: false}) : this.setState({readOnly: true});
    }

    render() {
        return (
            // <cellContentContext.Consumer>
            // <CellContext.Consumer>
                <input 
                    type="number"
                    className="base-cell"
                    id={this.props.id}
                    ref={this.thisCell}
                    // disabled={(this.state.disabled) ? "disabled" : ""}
                    readOnly={this.state.readOnly}
                    onFocus={this.stateWhenFocused.bind(this)}
                    onDoubleClick={this.enableForAddingValue.bind(this)}
                    // onChange={this.props.handleChange}
                    // value={this.context}
                >
                </input>
            // </CellContext.Consumer>
            //</cellContentContext.Consumer> 
        );
    }
}

Cell.propTypes = {
    id: PropTypes.string.isRequired
}