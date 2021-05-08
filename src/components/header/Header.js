import React, { useContext } from "react";
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { Context } from '../../Context'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import "./Header.css"

function Header(props) {
    const { setShowNewLink } = useContext(Context);
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue == 'add') {
            setShowNewLink(true);
        }
    };
    return (
        <header className="header">
            <div className="inner-header">
                <div className="logo"> Link Space</div>
                <div className="search-input"><input placeholder="search" /></div>
                <BottomNavigationAction className="search-icon" value="search" icon={<SearchRoundedIcon />} />
                <BottomNavigation className='toolbar' value={value} onChange={handleChange} >
                    <BottomNavigationAction value="home" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction className="categories" value="categories" icon={<CategoryRoundedIcon />} />
                    <BottomNavigationAction icon={<SendRoundedIcon />} />
                    <BottomNavigationAction value="add" icon={<AddRoundedIcon />} />
                    <BottomNavigationAction value="profile" icon={<AccountCircleRoundedIcon />} />
                </BottomNavigation>
            </div>
        </header>
    )
}

export default Header;