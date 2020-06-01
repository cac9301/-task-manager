import React from "react";
//material-ui
import Button from '@material-ui/core/Button';
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from "../styles/stylesDashboard";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import perfil from './perfil.png';
// or

//components
import FormNewProyect from "./FormNewProyect";
import ListPro from "./ListPro";

const SideBar = ({user}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    
  };

  return (
    <>
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}> 
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.root_header}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
            <Typography component="h2" variant="h6" color="inherit" noWrap className={classes.title_header}>
            {user?`Dashboard ${user.firstName} ${user.lastName} Mern Task`:null}
          </Typography>
        </Grid>
        <Grid className={classes.header_avatar} item xs={6}>
        
        <Typography component="h2" variant="h6" color="inherit" noWrap align="right">
        <Button>Close Section</Button>
          </Typography>
          <Avatar  alt="carlos" src={perfil} /> 
        </Grid>
          </Grid>
          </div>
        </Toolbar>
      </AppBar>
      {open?
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title_sidebar}>
            yours proyects
        </Typography>
        <FormNewProyect

        />
        <Divider />
        <List>{""}</List>
        <Typography component="h2" variant="h5" color="inherit" noWrap className={classes.title_sidebar}>
            List 
            <br>
            </br>
            of Yours proyects
        </Typography>
        <ListPro/>
      </Drawer>
:null}
    </>
  );
};

export default SideBar;
