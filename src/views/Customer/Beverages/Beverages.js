import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import Beverage from './Beverage';
import PopUp from './PopUp';

import BEVERAGES from '../../../menu';

const TITLE = "BEVERAGES";

function Beverages() {
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

    return (
        <div>
            <div style={main}>
                <Header title={TITLE}/>
                <div style={beverages}>
                    <h1 style={types}>Tea</h1>
                    {
                        Object.keys(BEVERAGES).map((name, _) => {
                            if (BEVERAGES[name].group == 'Teas'){
                                return <Beverage info={BEVERAGES[name]} customClick={handleOpen.bind(this, BEVERAGES[name])}/>
                            } 
                        })
                    }
                </div>
                <div style={beverages}>
                    <h1 style={types}>Coffee</h1>
                    {
                        Object.keys(BEVERAGES).map((name, _) => {   
                            if (BEVERAGES[name].group == 'Coffees'){
                                return <Beverage info={BEVERAGES[name]} open={open} customClick={handleOpen.bind(this, BEVERAGES[name])}/>
                            } 
                        })
                    }
                </div>
            </div> 
            {open ? <PopUp info={popupInfo} open={open} handleClose={handleClose.bind(this)}/> : null}
        </div>
    );
}

const main = {
    //height: '100vh',
    backgroundColor: '#FFECD0'
};

const beverages = {
    padding: '15px',
};

const types = {
    fontSize: '40px',
    fontFamily: 'Lato',
};

export default Beverages;