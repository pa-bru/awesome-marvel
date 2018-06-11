import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'

import styles from './styles'

const DEFAULT_DESCRIPTION = 'No description for this character. Sorry.'

const getLink = (type, urls) => {
  const urlObj = urls.find(url => url.type === type)
  return urlObj && urlObj.url
}

export class HeroCard extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    urls: PropTypes.array,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    series: PropTypes.shape({
      available: PropTypes.number,
    }).isRequired,
    comics: PropTypes.shape({
      available: PropTypes.number,
    }).isRequired,
    events: PropTypes.shape({
      available: PropTypes.number,
    }).isRequired,
    extended: PropTypes.bool,
  }

  static defaultProps = {
    urls: [],
    series: {
      available: 0,
    },
    comics: {
      available: 0,
    },
    events: {
      available: 0,
    },
    extended: false,
    thumbnail: {
      path: '',
      extension: '',
    },
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { urls } = nextProps

    // set wikiLink & comicLink on mount or props change
    return {
      wikiLink: getLink('wiki', urls),
      comicLink: getLink('comiclink', urls),
    }
  }

  state = {
    wikiLink: undefined,
    comicLink: undefined,
  }

  computeThumbnail() {
    const { path, extension } = this.props.thumbnail
    return `${path}.${extension}`
  }

  render() {
    const { id, name, description, classes, series, comics, events, extended } = this.props
    const { wikiLink, comicLink } = this.state
    const subheader = `${comics.available} comics - ${series.available} series - ${
      events.available
    } events`

    if (extended) {
      return (
        <Card className={classes.card}>
          <CardHeader
            title={
              <Typography variant="title" component="h1">
                {name}
              </Typography>
            }
            subheader={subheader}
          />
          <CardMedia className={classes.media} image={this.computeThumbnail()} title={name} />
          <CardContent>
            <Typography component="p">{description || DEFAULT_DESCRIPTION}</Typography>
            <div className={classes.chips}>
              <Chip label={`${comics.available} comics`} className={classes.chip} />
              <Chip label={`${series.available} series`} className={classes.chip} />
              <Chip label={`${events.available} events`} className={classes.chip} />
            </div>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            {wikiLink && (
              <Button size="small" color="primary">
                <a href={wikiLink}>Wiki</a>
              </Button>
            )}
            {comicLink && (
              <Button size="small" color="primary">
                <a href={comicLink}>Comic Link</a>
              </Button>
            )}
          </CardActions>
        </Card>
      )
    }

    return (
      <Card className={classes.card}>
        <CardHeader
          title={
            <Typography variant="subheading" component="h2">
              {name}
            </Typography>
          }
          subheader={subheader}
        />
        <Link to={`/characters/${id}`}>
          <CardMedia className={classes.media} image={this.computeThumbnail()} title={name} />
        </Link>
        <CardContent>
          <Typography component="p" className={classes.descriptionLimit}>
            {description || DEFAULT_DESCRIPTION}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button size="small" color="primary">
            <Link to={`/characters/${id}`}>Detail</Link>
          </Button>
          {wikiLink && (
            <Button size="small" color="primary">
              <a href={wikiLink}>Wiki</a>
            </Button>
          )}
          {comicLink && (
            <Button size="small" color="primary">
              <a href={comicLink}>Comic Link</a>
            </Button>
          )}
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(HeroCard)
