import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import Beverage from './Beverage';
import PopUp from './PopUp';

import BEVERAGES from '../../../menu';

const TITLE = "Beverages";

function Beverages() {

    const [groups,setGroups] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [popupInfo, setPopupInfo] = React.useState([]);

    const handleOpen = (info) => {
        setOpen(true);
        setPopupInfo(info);
        console.log(info);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getGroups = () => {
        Object.keys(BEVERAGES).map((name) => {
            if (!groups.includes(BEVERAGES[name].group)){
                groups.push(BEVERAGES[name].group)
            }
        })
    };

    return (
        <div>
            <div style={main}>
                <Header title={TITLE}/>
                {getGroups()}
                {groups.map((group) =>{
                    return(
                        <div style={beverages}>
                            <h1 style={types}>{group}</h1>
                            {Object.keys(BEVERAGES).map((name) => {
                                if (BEVERAGES[name].group == group){
                                    return <Beverage info={BEVERAGES[name]} customClick={handleOpen.bind(this, BEVERAGES[name])}/>
                                } 
                            })}
                        </div>
                    )
                })}
            </div> 
            {open ? <PopUp info={popupInfo} open={open} handleClose={handleClose.bind(this)}/> : null}
        </div>
    );
}

const main = {
    //height: '100vh',
    backgroundColor: '#B3C7D6FF',
    color: 'black'
};

const beverages = {
    padding: '15px',
};

const types = {
    margin: 'auto',
    fontSize: '35px',
    fontFamily: 'Helvetica',
    color: 'black'
};

export default Beverages;