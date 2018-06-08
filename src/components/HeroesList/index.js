import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import HeroCard from 'components/HeroCard'

class HeroesList extends Component {
  static propTypes = {
    heroes: PropTypes.array.isRequired,
  }

  static defaultProps = {
    heroes: [],
  }

  render() {
    const { heroes } = this.props
    return (
      <Grid container spacing={24}>
        {heroes.map((hero, index) => (
          <Grid item key={index} style={{ display: 'flex' }} xs={12} sm={6} md={4} lg={3}>
            <HeroCard {...hero} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default HeroesList
