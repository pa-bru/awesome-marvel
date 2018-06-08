import React from 'react'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

const AboutPage = () => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography variant="headline" component="h1">
          About This project
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper>
          <List>
            <ListSubheader>Made With</ListSubheader>
            <ListItem>
              <ListItemText
                primary="React.js"
                secondary="use of the latest features added in version 16.4"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Create React App"
                secondary="A famous react project starter kit"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Redux" secondary="a flux pattern for state management" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Redux Thunk" secondary="used for asynchronous calls" />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Material UI"
                secondary="react implementation of Google's Material Design"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Jest" secondary="a testing framework" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper>
          <List>
            <ListSubheader>TODO</ListSubheader>
            <ListItem>
              <ListItemText primary="Remove inline styles" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Add tests" secondary="with Jest and Enzyme" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Add a server" secondary="required to secure private keys" />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Use the new Suspense API"
                secondary="useful to load elements together"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Use the new Context API"
                secondary="Could be cool to customize the project"
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default AboutPage
