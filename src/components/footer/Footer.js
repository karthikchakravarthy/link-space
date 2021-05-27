import React, {useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import "./Footer.css"
import { Context } from '../../Context'
import Drawer from '@material-ui/core/Drawer';
import NewLinkCard from "../newLinkCard/NewLinkCard";

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%'
    }
});

function Footer() {
    const classes = useStyles();
    // const [value, setValue] = React.useState('recents');
    const { setShowNewLink } = useContext(Context);
    const [value, setValue] = React.useState('home');
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue == 'add') {
            toggleDrawer(true)
        }
    };
    const toggleDrawer = (open) => {
        setIsDrawerOpen(open);
    };
    return (
        <footer className="footer">
            {/* start added for mobile scenario */}
          <Drawer anchor='bottom' open={isDrawerOpen} onClose={()=>toggleDrawer(false)} >
            <NewLinkCard onClose={()=>toggleDrawer(false)}/>
          </Drawer>
          {/* end added for mobile scenario */}
          <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction value="home" icon={<HomeRoundedIcon />} />
            <BottomNavigationAction value="categories" icon={<CategoryRoundedIcon />} />
            <BottomNavigationAction value="add" icon={<AddRoundedIcon />} />
            <BottomNavigationAction value='share'  icon={<SendRoundedIcon />} />
            <BottomNavigationAction value="profile" icon={<AccountCircleRoundedIcon />} />
          </BottomNavigation>
      </footer>
    )
}

export default Footer;