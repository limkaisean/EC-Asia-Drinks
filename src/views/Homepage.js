import React from 'react'

import ROOMS from '../rooms';

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Homepage(props){
    const [meetingRoom, setMeetingRoom] = React.useState({});
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
        console.log(event.target.role);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <div>
        <Button onClick={handleOpen}>
          Choose Meeting Room
        </Button>
        <Menu
          id="simple-menu"
          keepMounted
          open={open}
        >
          <MenuItem onClick={handleClick} value='profile'>Profile</MenuItem>
          <MenuItem onClick={handleClick} value='f'>My account</MenuItem>
          <MenuItem onClick={handleClick} value='t'>Logout</MenuItem>
        </Menu>
      </div>
    )
}

export default Homepage;