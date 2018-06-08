import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

import PreviewList from '../PreviewList'

class HeroTabs extends Component {
  static propTypes = {
    hero: PropTypes.object,
  }

  static defaultProps = {
    hero: {},
  }

  state = {
    tabIndex: 0,
  }

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex })
  }

  handleChangeIndex = tabIndex => {
    this.setState({ tabIndex })
  }

  render() {
    const { hero } = this.props
    const { tabIndex } = this.state

    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Tabs value={tabIndex} onChange={this.handleChange} indicatorColor="primary">
            <Tab label="Comics" />
            <Tab label="Series" />
            <Tab label="Events" />
          </Tabs>
        </AppBar>
        <Paper>
          <SwipeableViews index={tabIndex} onChangeIndex={this.handleChangeIndex}>
            <PreviewList element={hero.comics} emptyLabel="No comics found for this character" />
            <PreviewList element={hero.series} emptyLabel="No series found for this character" />
            <PreviewList element={hero.events} emptyLabel="No event found for this character" />
          </SwipeableViews>
        </Paper>
      </Fragment>
    )
  }
}

export default HeroTabs
