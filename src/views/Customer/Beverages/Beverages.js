import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import Beverage from './Beverage';
import PopUp from './PopUp';

import BEVERAGES from '../../../menu';

const TITLE = "BEVERAGES";

function Beverages() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const tibe = () => {
        console.log('tibe');
    }

    function yay(){
        console.log('yay');
    }

    return (
        <div style={main}>
            <Header title={TITLE}/>
            <div style={beverages}>
                <h1 style={types} onClick={tibe}>Tea</h1>
                {
                    Object.keys(BEVERAGES).map((name, _) => {
                        if (BEVERAGES[name].group == 'Teas'){
                            return <Beverage info={BEVERAGES[name]} customClick={yay.bind(this)}/>
                        } 
                    })
                }
            </div>
            <div style={beverages}>
                <h1 style={types} onClick={yay}>Coffee</h1>
                {
                    Object.keys(BEVERAGES).map((name, _) => {   
                        if (BEVERAGES[name].group == 'Coffees'){
                            return <Beverage info={BEVERAGES[name]} customClick={tibe.bind(this)}/>
                        } 
                    })
                }
            </div>
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