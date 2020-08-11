import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";

import Header from '../../../components/Header';
import Beverage from './Beverage';
import PopUp from './PopUp';
import Card from './Card';

import BEVERAGES from '../../../menu';

const TITLE = "Beverages";

function Beverages() {

    const [groups,setGroups] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [popupInfo, setPopupInfo] = React.useState([]);
    const [beverageAdded, setBeverageAdded] = React.useState(false);

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

    const handleBeverageAdded = (value) => {
        setBeverageAdded(true);
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <div>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={beverageAdded} autoHideDuration={2000} onClose={() => setBeverageAdded(false)}>
                <Link style={link} to= '/checkout'>
                    <Alert onClose={() => setBeverageAdded(false)} severity="success">
                        Beverage/Beverages successfully added to the cart!
                    </Alert>
                </Link>
            </Snackbar>
            <div style={main}>
                <Header title={TITLE}/>
                {getGroups()}
                {groups.map((group) =>{
                    if(group === 'COFFEE'){
                        return(
                            <div>
                                <h1 style={types}>{group}</h1>
                                <div style={coffees}>
                                    {Object.keys(BEVERAGES).map((name) => {
                                        if (BEVERAGES[name].group === group){
                                            return <Card info={BEVERAGES[name]} customClick={handleOpen.bind(this, BEVERAGES[name])}/>
                                        } 
                                    })}
                                </div>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div style={beverages}>
                                <h1 style={types}>{group}</h1>
                                {Object.keys(BEVERAGES).map((name) => {
                                    if (BEVERAGES[name].group === group){
                                        return <Beverage info={BEVERAGES[name]} customClick={handleOpen.bind(this, BEVERAGES[name])}/>
                                    } 
                                })}
                            </div>
                        )
                    }
                })}
            </div> 
            {open ? <PopUp info={popupInfo} open={open} handleSubmit={handleBeverageAdded.bind(this)} handleClose={handleClose.bind(this)}/> : null}
        </div>
    );
}

const main = {
    //height: '100vh',
    backgroundColor: '#B3C7D6FF',
    color: '#6E4C1EFF'
};

const beverages = {
    padding: '15px',
};

const types = {
    margin: 'auto',
    fontSize: '35px',
    fontFamily: 'Helvetica',
    color: 'black',
    paddingTop: '20px'
};

const coffees = {
    display: 'flex',
    flexWrap: 'wrap'
}

const link = {
    textDecoration: 'none' 
}

export default Beverages;