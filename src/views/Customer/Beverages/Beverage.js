import React from 'react';


function Beverage(props) {
    return (
        <div>
            <div style={panel}>
                <div>
                    <div style={name}>
                        {
                            props.info.name
                        }
                    </div>
                    <div style={description}>
                        {
                            props.info.description
                        }
                    </div>
                </div>
                <div style={addButtonContainer}>
                    <button style={addButton} onClick={props.customClick}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

/* CSS */

const panel = {
    minHeight: '240px',
    height: '10%',
    minWidth: '700px',
    width: '100%',
    margin: '1em auto',
    backgroundColor: '#f6c667',
    borderRadius: '2px',
    fontFamily: 'Lato',
    display: 'flex',
    flexDirection: 'row',
};

const addButtonContainer = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: '40px',
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

const name = {
    textAlign: 'left',
    fontSize: '36px',
    padding: '30px',
    fontWeight: '900',
};

const description = {
    textAlign: 'left',
    fontSize: '26px',
    padding: '10px 30px',
    width: '80%',
    minWidth: '20%'
};

const bold = {
    fontWeight: '700'
};

const id = {
    marginTop: '2px',
    textAlign: 'left',
};

export default Beverage;
