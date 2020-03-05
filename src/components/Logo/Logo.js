import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        {/*must use burgerLogo instead of accessing path directly for webpack reasons*/}
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo