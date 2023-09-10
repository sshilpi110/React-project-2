import React from 'react'
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div>
            <nav className={`${styles.navigation} container `}>
                <div className='logo'>
                    <img src="/Images/logo1.png" alt="logo" width="100px" />
                </div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>

                </ul>
            </nav>
        </div>
    )
}

export default Navigation
