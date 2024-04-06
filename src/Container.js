import React, { useContext } from 'react';
import Lightswitch from './Lightswitch';
import { DarkModeContext } from './context/DarkModeContext';
import Content from './Content';

function Container() {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Content />
            <Lightswitch />
        </div>
    )
}

export default Container