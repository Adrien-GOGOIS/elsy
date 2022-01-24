import React from 'react';

const css = {
    fontSize: '100',
    color: 'black'
}

class Steps extends React.Component {
    render() {
        return ( <div className='box col-sm-3 col-6'>
        <span className="material-icons" style={css}>
directions_walk
</span>
        </div>
        );   
    }
}

export default Steps;