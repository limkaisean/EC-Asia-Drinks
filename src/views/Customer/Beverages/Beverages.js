import React, { useState, useEffect } from 'react';

import Header from '../../../components/Header';
import Beverage from './Beverage';

const TITLE = "BEVERAGES";

const BEVERAGES = [
    {
        id: 0,
        name: 'Full-Leaf Brewed Tea',
        description: "From the British classic afternoon tea to the Chinese tea ceremony, the tradition of sipping on a relaxing cup of tea is celebrated all over the world. We offer 8 amazing blends of full-leaf teas, made with the world's most delicious teas and botanicals."
    },
    {
        id: 1,
        name: 'Tea Latte',
        description: "A frothy reinvention of the favorite latte. Savor your latte with the bright lavender notes of Earl Grey tea or sip on a malty English Breakfast Tea Latte, made from a select brand of rich teas from India and Sri Lanka."
    },
    {
        id: 2,
        name: 'Pure Matcha Tea Latte',
        description: "Meet the Pure Matcha Tea Latte – a smooth, creamy and lightly sweetened beverage that's made from premium microground matcha and served with steamed milk. Available hot and iced and you can opt to have yours unsweetened too."
    }
];

function Beverages() {
    return (
        <div style={main}>
            <Header title={TITLE} />
            <div style={beverages}>
                {
                    BEVERAGES.map((beverage, i) => {
                        return <Beverage info={beverage} />
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