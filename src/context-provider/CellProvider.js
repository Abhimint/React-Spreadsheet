import React from 'react';
import CellContext from './CellContext';

class CellProvider extends React.Component {
    render() {
        return (
            <CellContext.Provider>
                {this.props.children}
            </CellContext.Provider>
        );
    }
}   

export default CellProvider