import React from 'react'
import { createTheme } from '@mui/material'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { DeleteEmployee } from '../pages/DeleteEmployee'
import { EmployeeForm } from '../pages/EmployeeForm'

const drawerWidth = 240

const useStyles = createTheme((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

export const Layout = () => {
  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              My App
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Link to="/">
                <ListItem button key="home">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/about">
                <ListItem button key="about">
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About" />
                </ListItem>
              </Link>
              <Link to="/contact">
                <ListItem button key="contact">
                  <ListItemIcon>
                    <ContactMailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Container>
            <Routes>
              <Route path="/" element={<DeleteEmployee />} />
              <Route path="/about" element={<EmployeeForm />} />
            </Routes>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  )
}
