import React,{useContext} from "react";
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import "./Header.css"
import {Context} from '../../Context'

function Header(props) {
    //const classes = useStyles();
    const handlePress = useContext(Context);
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue=='add'){
            handlePress.setAddLink(true);
        }
        
        // props.onPressHandler(newValue);
    };
    return (
        <header className="header">
            <div className="inner-header">
                <div className="logo"> Link Space</div>
                <div className="search-input"><input placeholder="search" /></div>
                <BottomNavigationAction  className="search-icon" value="search" icon={<SearchRoundedIcon />} />
                
                {/* <div onClick={() => props.setAuthentication(false)} className="toolbar">logout</div> */}

                <BottomNavigation className='toolbar' value={value} onChange={handleChange} >
                    <BottomNavigationAction value="home" icon={<HomeRoundedIcon />} />
                    <BottomNavigationAction className = "categories" value="categories" icon={<CategoryRoundedIcon />} />
                    <BottomNavigationAction icon={<SendRoundedIcon />} />
                    <BottomNavigationAction value="add" icon={<AddRoundedIcon />} />
                    <BottomNavigationAction value="profile" icon={<AccountCircleRoundedIcon />} />
                </BottomNavigation>
            </div>
        </header>
    )
}

export default Header;