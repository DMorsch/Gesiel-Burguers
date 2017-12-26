import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    //gesiel
    return(
        <div className={classes.SideDrawer}>
            <Logo altura="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}

export default sideDrawer;