import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import { heroesActions, listActions } from 'store/actions'
import Head from 'components/Head'
import HeroCard from 'components/HeroCard'
import LoadingView from 'components/LoadingView'
import ErrorView from 'components/ErrorView'

import HeroTabs from './components/HeroTabs'

class HeroDetailsPage extends Component {
  static propTypes = {
    loadHero: PropTypes.func.isRequired,
    addToHistory: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    hero: PropTypes.object,
    error: PropTypes.object,
  }

  componentDidMount() {
    // scrolls to the top
    window.scrollTo(0, 0)

    const { id, loadHero, hero, addToHistory } = this.props
    loadHero(id)
    if (hero) {
      addToHistory(id)
    }
  }

  componentDidUpdate(prevProps) {
    const { id, hero, addToHistory } = this.props
    if ((hero && !prevProps.hero) || prevProps.hero !== hero) {
      addToHistory(id)
    }
  }

  render() {
    const { hero, error } = this.props

    if (error) {
      return <ErrorView>{error.status}</ErrorView>
    }

    if (!hero && !error) {
      return <LoadingView />
    }

    return (
      <Fragment>
        <Head title={hero.name} description={hero.description} />
        <Grid container spacing={24}>
          <Grid item xs={12} md={6}>
            <HeroCard {...hero} extended />
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroTabs hero={hero} />
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ heroes, list: { main } }, { match }) => {
  const id = Number(match.params.id)
  return {
    hero: heroes[id],
    error: main.error,
    id,
  }
}

const mapDispatchToProps = {
  loadHero: heroesActions.loadHero,
  addToHistory: listActions.addToHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetailsPage)
