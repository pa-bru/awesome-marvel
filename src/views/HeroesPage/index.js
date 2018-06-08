import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { listActions } from 'store/actions'
import HeroesList from 'components/HeroesList'
import Head from 'components/Head'
import LoadingView from 'components/LoadingView'
import ErrorView from 'components/ErrorView'

import InfiniteScroll from './components/InfiniteScroll'

class HeroesPage extends Component {
  static propTypes = {
    mainList: PropTypes.object.isRequired,
    heroes: PropTypes.array.isRequired,
    loadMainList: PropTypes.func.isRequired,
  }

  render() {
    const { mainList, heroes, loadMainList } = this.props

    if (mainList.error) {
      return <ErrorView>{mainList.error.status}</ErrorView>
    }

    if (!heroes.length && mainList.isFetching) {
      return <LoadingView />
    }

    return (
      <Fragment>
        <Head title="All Heroes" />
        <InfiniteScroll
          isLastPage={mainList.isLastPage}
          isFetching={mainList.isFetching}
          onDidMount={() => loadMainList()} // get first heroes
          getNextPage={() => loadMainList(true)} // get next heroes
        >
          <HeroesList heroes={heroes} />
        </InfiniteScroll>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ list: { main }, heroes }) => {
  // just take heroes for the current listing
  const mainListHeroes = main.ids.map(id => heroes[id])
  return { heroes: mainListHeroes, mainList: main }
}

const mapDispatchToProps = {
  loadMainList: listActions.loadMainList,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesPage)
