import React from 'react'
import PropTypes from 'prop-types'

const Center = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    {children}
  </div>
)

Center.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Center
