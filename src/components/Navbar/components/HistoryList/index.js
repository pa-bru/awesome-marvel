import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'

import LoadingView from 'components/LoadingView'
import ErrorView from 'components/ErrorView'

import { listActions } from 'store/actions'
import HistoryListItem from '../HistoryListItem'

const styles = {
  button: {
    display: 'flex',
    margin: '10px auto',
  },
}

export class HistoryList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loadHistoryList: PropTypes.func.isRequired,
    clearHistory: PropTypes.func.isRequired,
    removeFromHistory: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    historyList: PropTypes.array,
    isIncomplete: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    historyList: [],
  }

  componentDidMount() {
    this.props.loadHistoryList()
  }

  render() {
    const {
      historyList,
      clearHistory,
      removeFromHistory,
      classes,
      history,
      isIncomplete,
    } = this.props

    if (history.error) {
      return <ErrorView>{history.error.status}</ErrorView>
    }

    if (history.isFetching || isIncomplete) {
      return <LoadingView />
    }

    return (
      <List
        component="div"
        disablePadding
        subheader={<ListSubheader component="div">Your History</ListSubheader>}
      >
        {historyList.length ? (
          <Fragment>
            {historyList.map((item, index) => (
              <HistoryListItem key={index} {...item} onClick={() => removeFromHistory(item.id)} />
            ))}
            <Button
              variant="contained"
              color="default"
              onClick={clearHistory}
              className={classes.button}
            >
              Clear History
            </Button>
          </Fragment>
        ) : (
          <ListItem dense>
            <ListItemText primary="No History, start navigating to see your history" />
          </ListItem>
        )}
      </List>
    )
  }
}

export const mapStateToProps = ({ list: { history }, heroes }) => {
  const historyList = history.ids.map(id => heroes[id])
  const isIncomplete = historyList.some(item => !item)

  return {
    historyList,
    history,
    isIncomplete,
  }
}

const mapDispatchToProps = {
  loadHistoryList: listActions.loadHistoryList,
  removeFromHistory: listActions.removeFromHistory,
  clearHistory: listActions.clearHistory,
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HistoryList)
