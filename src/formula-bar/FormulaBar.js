import React from 'react';
import './FormulaBar.css';
import strings from './../Strings.json'
import { getCellNumericValue } from './../common/utils/ArithmeticFunctions';

export default class FormulaBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    // TODO: Need to upgrade RegEx pattern to utilize ONLY + or - to sunset using math.js. Too bulky

    afterSubmit(event) {
        event.preventDefault();
        const {computedValue} = this.props;
        let allowedOperandStructure = /^(([A-Z]{0,1})[0-9]{1,2})/g;
        allowedOperandStructure.test(event.target.children[1].value) ?
            computedValue(getCellNumericValue((event.target.children[1].value))) :
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