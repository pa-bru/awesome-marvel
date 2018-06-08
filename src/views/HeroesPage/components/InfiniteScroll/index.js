import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Center from 'components/Center'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  margin: {
    marginTop: theme.spacing.unit * 3,
  },
})

const GAP = 150

class InfiniteScroll extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onDidMount: PropTypes.func,
    getNextPage: PropTypes.func,
    isFetching: PropTypes.bool,
    isLastPage: PropTypes.bool,
    children: PropTypes.node,
  }

  static defaultProps = {
    isFetching: false,
    isLastPage: false,
  }

  componentDidMount() {
    const { onDidMount } = this.props
    if (onDidMount && typeof onDidMount === 'function') {
      onDidMount()
    }
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  handleScroll = () => {
    const { isFetching, isLastPage, getNextPage } = this.props
    const { innerHeight, scrollY } = window
    const { offsetTop, scrollHeight } = this.rootRef
    const isAtBottom = innerHeight + scrollY > offsetTop + scrollHeight - GAP

    if (isAtBottom && !isFetching && !isLastPage) {
      getNextPage()
    }
  }

  setRootRef = element => {
    this.rootRef = element
  }

  render() {
    const { isFetching, children, isLastPage, classes } = this.props

    return (
      <div ref={this.setRootRef}>
        {children}
        {isFetching && (
          <Center>
            <CircularProgress color="secondary" className={classes.margin} />
          </Center>
        )}
        {isLastPage && (
          <Center>
            <Typography variant="body2" color="secondary" className={classes.margin}>
              No more items available
            </Typography>
          </Center>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(InfiniteScroll)
