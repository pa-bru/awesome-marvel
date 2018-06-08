import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'

import HistoryList from './components/HistoryList'

const styles = {
  list: {
    width: 250,
  },
}

class Navbar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
  }

  state = {
    isMenuOpen: false,
  }

  toggleMenu = () => this.setState({ isMenuOpen: !this.state.isMenuOpen })

  render() {
    const { classes, children } = this.props
    return (
      <Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={this.toggleMenu} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Awesome Marvel
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.isMenuOpen} onClose={this.toggleMenu}>
          <div onClick={this.toggleMenu} role="button" className={classes.list}>
            <List component="nav">
              <Link to="/">
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/about">
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <HistoryList />
          </div>
        </Drawer>
        {children}
      </Fragment>
    )
  }
}

export default withStyles(styles)(Navbar)
