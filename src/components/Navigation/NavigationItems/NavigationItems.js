import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem zelda="/" active> BurgerBuilder </NavigationItem>
        <NavigationItem zelda="/"> Checkout </NavigationItem>
    </ul>
);

export default navigationItems;