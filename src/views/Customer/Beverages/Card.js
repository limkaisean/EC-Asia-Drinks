import React from 'react';

import Coffee from '../../../coffee.svg';

function Card(props){
    return(
        <div style={panel}>
            <div style={coffeeArtContainer}><img src={Coffee} alt='Coffee' style={coffeeArt}/></div>
            <div style={name}>
                {props.info.name}
            </div>
            <div style={addButtonContainer}>
                <button style={addButton} onClick={props.customClick}>
                    +
                </button>
            </div>
        </div>
    )
}

const panel = {
    minHeight: '120px',
    height: '10%',
    minWidth: '350px',
    flexBasis: '32%',
    margin: '1em auto',
    backgroundColor: '#ddbfa1',
    borderRadius: '2px',
    fontFamily: 'Helvetica',
    display: 'flex',
    flexDirection: 'row',
};

const name = {
    margin: 'auto',
    fontSize: '30px',
};

const addButtonContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '20px',
    marginLeft: 'auto'
};

const addButton = {
    backgroundColor: '#222831',
    color: '#f3f3f3',
    fontSize: '50px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
};

const coffeeArtContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 'auto',
    marginLeft: '20px'
};

const coffeeArt = {
    width: '48px',
}

export default Card;