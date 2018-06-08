import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import ErrorBoundary from 'components/ErrorBoundary'
import Navbar from 'components/Navbar'
import Head from 'components/Head'
import ThemeProvider from 'components/ThemeProvider'

import AboutPage from 'views/AboutPage'
import HeroesPage from 'views/HeroesPage'
import HeroDetailsPage from 'views/HeroDetailsPage'
import NotFoundPage from 'views/NotFoundPage'

const styles = theme => ({
  layout: theme.mixins.gutters({
    fontFamily: 'Roboto',
    minHeight: '100vh',
    maxWidth: '100%',
    margin: '0px auto',
    paddingTop: 80,
  }),
  [theme.breakpoints.up('lg')]: {
    layout: {
      maxWidth: theme.breakpoints.values.lg,
    },
  },
})

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  render() {
    const { classes } = this.props
    return (
      <ThemeProvider>
        <ErrorBoundary>
          {/* Default meta tags, get overriden by anything further down the tree */}
          <Head title="Home" description="Awesome Marvel" />
          <Router>
            {/* Global navigation */}
            <Navbar>
              <div className={classes.layout}>
                {/* Switch only renders the first match */}
                <Switch>
                  <Route exact path="/" component={HeroesPage} />
                  <Route path="/about" component={AboutPage} />
                  <Route path="/characters/:id" component={HeroDetailsPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
            </Navbar>
          </Router>
        </ErrorBoundary>
      </ThemeProvider>
    )
  }
}

export default withStyles(styles)(App)
