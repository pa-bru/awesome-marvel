import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import BugReportIcon from '@material-ui/icons/BugReport'
import Typography from '@material-ui/core/Typography'

import Head from 'components/Head'

const styles = {
  centered: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Roboto',
    padding: 0,
    margin: 0,
    width: '100%',
  },
}

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
  }

  state = {
    error: false,
  }

  componentDidCatch(error) {
    this.setState({ error: true })
  }

  render() {
    const { children, classes } = this.props
    const { error } = this.state

    if (error) {
      return (
        <div className={classes.centered}>
          <Head title="Oups..." description="An error occured" />
          <Typography variant="headline">An error has occured, please reload the page.</Typography>
          <BugReportIcon />
        </div>
      )
    }
    return children
  }
}

export default withStyles(styles)(ErrorBoundary)
