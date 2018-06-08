import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'

class HistoryListItem extends Component {
  static propTypes = {
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    series: PropTypes.shape({
      available: PropTypes.number,
    }).isRequired,
    comics: PropTypes.shape({
      available: PropTypes.number,
    }).isRequired,
    events: PropTypes.shape({
      available: PropTypes.number,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    history: PropTypes.object,
  }

  static defaultProps = {
    series: {
      available: 0,
    },
    comics: {
      available: 0,
    },
    events: {
      available: 0,
    },
  }

  render() {
    const { thumbnail, id, name, comics, series, events, onClick, history } = this.props
    const secondary = `${comics.available} comics - ${series.available} series - ${
      events.available
    } events`

    return (
      <ListItem button dense onClick={() => history.push(`/characters/${id}`)}>
        <Avatar aria-label="Recipe" src={`${thumbnail.path}.${thumbnail.extension}`} />
        <ListItemText primary={name} secondary={secondary} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={onClick}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default withRouter(HistoryListItem)
