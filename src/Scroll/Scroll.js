import React from 'react'

const Scroll = (props) => {
    return (
      <div style={{
        overflowY: 'scroll',
        border: '0px solid black',
        height: '623px',
        scrollbarWidth: 'auto',
        scrollbarColor: 'rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1)',
        width: '100%',
        overflowScrolling: 'auto',
        scrollbarTrackColor: 'rgba(0, 0, 0, 0.2)',
        scrollbarFaceColor: 'rgba(0, 0, 0, 0.3)',
        scrollbarHighlightColor: 'rgba(0, 0, 0, 0.4)',
        scrollbarShadowColor: 'rgba(0, 0, 0, 0.5)',
        scrollbarDarkShadowColor: 'rgba(0, 0, 0, 0.6)',
        overflow: 'scroll'
      }}>
        {props.children}
      </div>
    );
};


export default Scroll;