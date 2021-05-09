import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    borderWidth: 0,
    paddingLeft: 5,
    display: 'flex',
    justifyContent: 'flex-start'
  },
});

export default function PopOver(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
      if(event === 'EDIT'){
        props.edit();
      }
      else if( event === 'DEL')
      {
        props.delete();
      }  
      setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <MoreVertIcon onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
          <div>
              <Button variant="outlined" className={classes.root} onClick={()=>handleClose('EDIT')} fullWidth={true}
              startIcon={<DeleteIcon/>}
              >
                 Edit
              </Button>
          </div>
          <div>    
              <Button variant="outlined" className={classes.root} onClick={()=>handleClose('DEL')} fullWidth={true}
              startIcon={<EditIcon/>}>
                Delete
              </Button>
           </div>   
      </Popover>
    </div>
  );
}