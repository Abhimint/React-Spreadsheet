import { evaluate } from 'mathjs';

// update this to accomodate infinite # of params
export const addOrSubtract = (operandA, operandB, operation) => {
    return (operation === "+") ? (operandA + operandB) : (operandA - operandB)
}

export const getCellNumericValue = (formulaBarOutput) => {
    if (!!formulaBarOutput){
        return evaluate(formulaBarOutput);
    } else {
        return;
    }
}

// update this to only give the list of the operators in the end
// export const inputValueStringStrip = (inputExpression) => {
//     const operandA, operandB, operation;
//     inputExpression.trim();
//     const operandArr = inputExpression.split('{opera}')
//     switch (key) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
// }

// export const parseAdditionSeparatedExpression = (expression) => {
//     const numbersString = expression.split('+');
//     const numbers = numbersString.map((arrElement) => +arrElement);
// }

export default getCellNumericValue;