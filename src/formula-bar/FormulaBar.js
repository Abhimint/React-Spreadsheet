import React from 'react';
import './FormulaBar.css';
import strings from './../Strings.json'
import { getCellNumericValue } from './../common/utils/ArithmeticFunctions';

export default class FormulaBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    // handle submit is not doing anything as it is overwritten by afterSubmit
    handleSubmit = (computeEvent) => {
        // #1 - Sanitize input to conform to the requirements  
        // number accepting regex --> /[\-?\+?\d+\+?\-?]/
        let allowedOperandsPattern_old = /[\s?\d+^\w+\s?^[\d+\s+]]/
        let allowedOperandsPattern = /\w/;
        console.warn(allowedOperandsPattern.test(computeEvent.target.value));

        if(computeEvent.target.value.charAt(0) === "=") {
            console.warn(computeEvent.target.value);
        }
    }

    afterSubmit(event) {
        event.preventDefault();
        let allowedOperandStructure = /^(([A-Z]{0,1})[0-9]{1,2})^(\#)/g;
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
                    onSubmit={(computeEvent) => this.handleSubmit(computeEvent)}
                >
                </input>
                <button
                    className="formSubmit"
                    type="submit"
                >
                    Compute
                </button>
            </form>
        );
        
    }
}