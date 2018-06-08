import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: 'center',
  }),
  margin: {
    marginTop: theme.spacing.unit * 3,
  },
})

const NotFoundPage = ({ classes }) => {
  return (
    <div className={classes.center}>
      <Paper className={classes.paper}>
        <Typography variant="display4" component="h1" className={classes.margin}>
          Oups{' '}
          <span role="img" aria-label="emoji with monocle">
            🧐
          </span>
        </Typography>
        <Typography variant="display2" component="h2" className={classes.margin}>
          There is nothing here
        </Typography>
        <Link to="/">
          <Button variant="outlined" color="default" className={classes.margin}>
            Go To Home
          </Button>
        </Link>
      </Paper>
    </div>
  )
}

NotFoundPage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NotFoundPage)
