import React from 'react'

const Highlighter = (props) => {
  return (
    <span
    style={{
        backgroundColor: '#E04C4C',
        color: 'white',
        fontFamily: 'Bangers',
        padding: '7px 10px',
        boxShadow: '4px 4px lightgray',
        marginRight: '6px'
    }}
    >
        {props.text}
    </span>
  )
}

export default Highlighter
