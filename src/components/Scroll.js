import React from 'react'

const Scroll = ({ children }) => {
  return (
    <div style={{overflowY: 'scroll', borderTop: '3px solid black', height: '800px'}}>
      {children}
    </div>
  )
}

export default Scroll