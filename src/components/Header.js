import React from 'react';

function Header(props) {
    return (
        <div style={header}>
            <span style={title}>{props.title}</span>
        </div>
    );
}

/* CSS */

const header = {
    minHeight: '170px',
    height: '10%',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#5CC2F2',
    color: '#F3F3F3',
    fontSize: '60px',
    fontFamily: 'Lato',
    fontWeight: '300',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

const title = {
    marginTop: '30px'
};

export default Header;