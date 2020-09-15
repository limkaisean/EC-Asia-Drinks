import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from "react-router-dom";

import Header from '../../../components/Header';
import Beverage from './Beverage';
import PopUp from './PopUp';
import Card from './Card';

import BEVERAGES from '../../../menu';
import Background from '../../../background.png';

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
                <Header title={TITLE} classname='top'/>
                {getGroups()}
                {groups.map((group) =>{
                    if(group === 'COFFEE'){
                        return(
                            <div>
                                <h1 style={types}><span style={highlight}>{group}</span></h1>
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
                            <div>
                                <h1 style={types}><span style={highlight}>{group}</span></h1>
                                <div style={beverages}>
                                {Object.keys(BEVERAGES).map((name) => {
                                    if (BEVERAGES[name].group === group){
                                        return <Beverage info={BEVERAGES[name]} customClick={handleOpen.bind(this, BEVERAGES[name])}/>
                                    } 
                                })}
                                </div>
                            </div>
                        )
                    }
                })}
                <a href='#' style={a}>Back to top</a>
            </div> 
            {open ? <PopUp info={popupInfo} open={open} handleSubmit={handleBeverageAdded.bind(this)} handleClose={handleClose.bind(this)}/> : null}
        </div>
    );
}

const main = {
    backgroundImage: `url(${Background})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top',
    color: 'black'
};

const beverages = {
    padding: '15px',
};

const types = {
    margin: 'auto',
    fontSize: '35px',
    fontFamily: 'Segoe UI',
    color: '#ffffff',
    paddingTop: '20px',
};

const highlight = {
    backgroundColor: '#6e6e6e',
    padding: '2.5px 10px'
}

const coffees = {
    display: 'flex',
    flexWrap: 'wrap'
}

const link = {
    textDecoration: 'none' 
}

const a = {
    color: '#FFFFFF',
    backgroundColor: '#6e6e6e'
}

export default Beverages;