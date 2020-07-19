import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import Beverage from './Beverage';

import BEVERAGES from '../../../menu';

const TITLE = "BEVERAGES";

function Beverages() {
    return (
        <div style={main}>
            <Header title={TITLE} />
            <div style={beverages}>
                <h1 style={types}>Tea</h1>
                {
                    Object.keys(BEVERAGES).map((name, _) => {
                        if (BEVERAGES[name].group == 'Teas'){
                            return <Beverage info={BEVERAGES[name]} />
                        } 
                    })
                }
            </div>
            <div style={beverages}>
                <h1 style={types}>Coffee</h1>
                {
                    Object.keys(BEVERAGES).map((name, _) => {
                        if (BEVERAGES[name].group == 'Coffees'){
                            return <Beverage info={BEVERAGES[name]} />
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