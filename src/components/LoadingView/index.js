import React, { Fragment } from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import Center from 'components/Center'
import Head from 'components/Head'

const LoadingView = () => (
  <Fragment>
    <Head title="Loading..." />
    <Center>
      <CircularProgress color="secondary" />
    </Center>
  </Fragment>
)

export default LoadingView
