import React from "react";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import "./Header.css"

function Header(props) {
    //const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <header className="header">
            <div className="inner-header">
                <div className="logo"> Link Space</div>
                <div className="search"><input placeholder="search" /></div>
                <BottomNavigationAction className='share'  icon={<SendRoundedIcon />} />
                {/* <div onClick={() => props.setAuthentication(false)} className="toolbar">logout</div> */}

                <BottomNavigation className='toolbar' value={value} onChange={handleChange} >
                    <BottomNavigationAction value="home" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction icon={<SendRoundedIcon />} />
                    <BottomNavigationAction value="add" icon={<AddRoundedIcon />} />
                    <BottomNavigationAction value="profile" icon={<AccountCircleRoundedIcon />} />
                </BottomNavigation>
            </div>
        </header>
    )
}

export default Header;