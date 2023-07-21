import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

interface DropDownProps{
    children?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal,
    name: string, 
}

export default function DropdownMenuEL(props:DropDownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        color='red'
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        {props?.children}
      </Menu>
    </div>
  );
}
