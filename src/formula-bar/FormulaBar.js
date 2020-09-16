import React from 'react';
import './FormulaBar.css';
import strings from './../Strings.json'
// import cellContentContext from './../context-provider/ContextProvider'
import { getCellNumericValue } from './../common/utils/ArithmeticFunctions';

/*
Goals 
    - #1: 2-way/bi-directional bind content between selected input and formula  -- * optional *
        - with more time, this is best to be set up using redux for scalability
    - #2: set the position to be sticky to the window on horizontal scroll
    - #3: update formula bar by adding it as a form with a submit for 
    executing some operations on submit - done
        - a: form should be able to add two number in the form
            - input should have onChange function that checks if two numbers are present 
    - #4: align form into grid 
*/
/*
Thoughts
    - Upon checking other existing libraries like 'react-datasheet', turns out that none of them 
    have a 'Formula Bar' like mine. Maybe it is because they realized React 
    is unable to do 2-way binding
    - Upon extending the functionality of the operands, the regex will need to be updated
    - Main goal is STILL to get the result from the formula to be displayed in the last focused cell
    - This exercise is REALLY good for string manipulation in js
*/

export default class FormulaBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    //TODO: Build an "allowed" and "not allowed" mode
    /* 3 part process
        - regex to sanitize exactly what is added into the formula
        - string stripping to get + or - from the string and also save the two operands
            - this is also where the condition needs to be that checks if anyone of the operand is
            a cell id
        - function to convert stripped operands into 
            - a number or
            - reference the value from the cell id provided
        and then pass them to another function that accepts the operands, and a param to check what
        kind of a operation it is and then based on a switch case, add or subtract

        -- trying to get the flow to always be
            - write something in a cell first
            - only evaluation should be done in the formula bar
                - for this, always have the '=' sign prefilled by default (onActive)
    */
    handleChange(changeEvent) {
        // #1 - Sanitize input to conform to the requirements  
        let allowedOperandsPattern = /[\s?\d+^\w+\s?]/
        console.warn(allowedOperandsPattern.test(changeEvent.target.value));
        if(changeEvent.target.value.charAt(0) === "=") {
            console.warn(changeEvent.target.value);
        }

        // #2 - Send Formula input back to parent as callback
        const {realTimeFormulaInput} = this.props;
        realTimeFormulaInput(changeEvent.target.value);

        const numericVal = getCellNumericValue(changeEvent);
        console.warn("Numeric value function testing", numericVal);

        // reference to current cell that the formula should write to
        // console.warn("Current cell to write to", this.props.activeCellToWriteTo);
    }

    afterSubmit(event) {
        event.preventDefault();
        // event.target.children[1].value <-- value of the input on submit
        let allowedOperandStructure = /\w\d\d?/;
        allowedOperandStructure.test(event.target.children[1].value) ?
            console.warn("Input operand structure is correct") :
            console.warn("Input operand structure is incorrect so please rectify");
    }

    render() {
        return(
            <form className="form" onSubmit={(event) => this.afterSubmit(event)}>
                <label className="formLabel">
                    {strings.formulaLabel}
                </label>
                <input
                    className="formula"
                    placeholder={strings.formulaPlaceholder}
                    onChange={(event) => this.handleChange(event)}
                    // value={this.props.inputValue}
                >
                </input>
            </form>
        );
        
    }
}