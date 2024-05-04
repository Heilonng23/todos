import React from 'react'

const Scroll = (props) => {
    return (
      <div style={{ overflowY: 'scroll', border: '0px solid black', height: '623px', scrollbarWidth: 'thin', scrollbarColor: 'rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1)', width: '100%', overflowScrolling: 'touch'}}>
        {props.children}
      </div>
    );
};


export default Scroll;