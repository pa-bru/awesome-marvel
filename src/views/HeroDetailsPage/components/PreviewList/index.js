import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
  typo: theme.mixins.gutters({
    marginTop: 12,
    marginBottom: 12,
  }),
})

const PreviewList = ({ element, emptyLabel, dense, classes }) => {
  if (element.available > 0) {
    return (
      <List dense={dense}>
        {element.items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    )
  }

  return <Typography className={classes.typo}>{emptyLabel}</Typography>
}

PreviewList.defaultProps = {
  element: {
    available: 0,
    items: [],
  },
  emptyLabel: 'Nothing here',
  dense: true,
}

PreviewList.propTypes = {
  element: PropTypes.shape({
    available: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }).isRequired,
  emptyLabel: PropTypes.string,
  dense: PropTypes.bool,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PreviewList)
