import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import Center from 'components/Center'
import Head from 'components/Head'

const ErrorView = ({ children }) => (
  <Fragment>
    <Head title="Oups..." />
    <Center>
      <Typography variant="body1" color="secondary">
        {children}
      </Typography>
    </Center>
  </Fragment>
)

ErrorView.propTypes = {
  children: PropTypes.node.isRequired,
}

ErrorView.defaultProps = {
  children: 'Something went wrong.',
}

export default ErrorView
