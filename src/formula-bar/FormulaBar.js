import React from 'react';
import './FormulaBar.css';
import strings from './../Strings.json'
import { getCellNumericValue } from './../common/utils/ArithmeticFunctions';

export default class FormulaBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    afterSubmit(event) {
        event.preventDefault();
        let allowedOperandStructure = /^(([A-Z]{0,1})[0-9]{1,2})/g;
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