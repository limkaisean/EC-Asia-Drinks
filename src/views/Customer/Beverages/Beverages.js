import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import Beverage from './Beverage';

import BEVERAGES from '../../../menu';

const TITLE = "Beverages";

function Beverages() {
    return (
        <div style={main}>
            <Header title={TITLE} />
            <div style={beverages}>
                {
                    Object.keys(BEVERAGES).map((name, _) => {
                        return <Beverage key={name} info={BEVERAGES[name]} />
                    })
                }
            </div>
        </div> 
    );
}

const main = {
    height: '100vh',
    backgroundColor: '#FFECD0'
};

const beverages = {
    padding: '15px',
};

export default Beverages;