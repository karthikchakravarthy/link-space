import React from "react";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import "./Footer.css"

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%'
    }
});

function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <footer className="footer">
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction value="home" icon={<HomeRoundedIcon />} />
            <BottomNavigationAction value="categories" icon={<CategoryRoundedIcon />} />
            <BottomNavigationAction value="add" icon={<AddRoundedIcon />} />
            <BottomNavigationAction value="search" icon={<SearchRoundedIcon />} />
            <BottomNavigationAction value="profile" icon={<AccountCircleRoundedIcon />} />
        </BottomNavigation>
      </footer>
    )
}

export default Footer;