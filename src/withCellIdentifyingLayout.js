import React from 'react';
import strings from './Strings.json';
import './cell/Cell.css';

const withCellIdentifyingLayout = (WrappedComponent) => {
    class withCellIdentifyingLayout extends React.Component {
        
        render() {
            const rowsToRender = [];
            for (let rows = 0; rows <= 30; rows++){
                rowsToRender.push(<div className="row-numbering">{rows.toString()}</div>);
            }
            const colsToRender = [];
            for (let cols = 0; cols <= strings.alphabetList.length -1; cols++){
                colsToRender.push(<div className="col-alphabetized">{strings.alphabetList[cols]}</div>);
            }
            return(
                <div className="layout-hoc" style={{display: "grid"}}>
                    <div className="col-alphabetized-container" style={{display: "inline-flex"}}>{colsToRender}</div>
                    <div style={{gridColumnStart: "1", gridColumnEnd: "2", gridRow: "2/31"}}>{rowsToRender}</div>
                    <div style={{gridColumnStart: "2", gridColumnEnd: "27", gridRow: "2/31"}}><WrappedComponent {...this.props} /></div>
                </div>
            );
        }
    }
    return withCellIdentifyingLayout;
}
export default withCellIdentifyingLayout;