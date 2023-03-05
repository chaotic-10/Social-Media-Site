import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Badge, Avatar, Box, Menu, MenuItem, InputBase} from '@mui/material'
import { padding, styled } from '@mui/system'
import { Notifications,Groups3} from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
const Navbar = () => {
    const [open,setOpen]=useState(false);
//styled component
    const StyledToolbar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between",
    })
    const Search = styled("div")({
        backgroundColor:"white",
        padding:"0 10px",
        borderRadius:"10px",
        width:"40%",
        height:"2rem"
        });
    const Icons = styled("div")({
        padding:"0 10px",
        borderRadius:"10px",    
        height:"2rem",
        display:"flex",
        gap:"10%",
        alignItems:"center",
        
        });
    const UserBox = styled(Box)({
        // display:"flex",
        alignItems:"flex-end",
        gap:"10%" ,
        
    })
  return (
    <div>
        <AppBar sx={{maxWidth:"100%", position:"fixed"}}>
            <StyledToolbar>
                <Typography variant='h6'sx={{display:{xs:"none", sm:"block"}}}>
                    SOCIAL
                </Typography>
                <Groups3 sx={{display:{xs:"block",sm:"none"}}}/>
                <Search>
          <InputBase placeholder="search..." />
        </Search>
                <Icons> 
                <Badge sx={{height:"30px",width:"30px",display:{xs:"none", sm:"block", lg:"block"}}} badgeContent={4} color="error">
                        <MailIcon/>
                </Badge>
                <Badge sx={{height:"30px",width:"30px",display:{xs:"none", sm:"block", lg:"block"}}}badgeContent={2} color="error">
                        <Notifications/>
                </Badge>
                <Avatar sx={{height:"30px",width:"30px",display:{xs:"none", sm:"block", lg:"block"}}} alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4D03AQHQJ51NK3PGWg/profile-displayphoto-shrink_800_800/0/1657616909880?e=1683158400&v=beta&t=AorFBJ3uFoX8Psq2NN0B4KyfpecscrYmCusAgY-WvHo" onClick={e=>setOpen(true)}  />
 
                <UserBox  onClick={e=>setOpen(true)} sx={{display:{xs:"block", sm:"none", lg:"none"}}}>
                    <Avatar sx={{height:"30px",width:"30px"}} alt="Remy Sharp" src="https://media.licdn.com/dms/image/C4D03AQHQJ51NK3PGWg/profile-displayphoto-shrink_800_800/0/1657616909880?e=1683158400&v=beta&t=AorFBJ3uFoX8Psq2NN0B4KyfpecscrYmCusAgY-WvHo"  />
                    <Typography>Shreyaskar</Typography>
                </UserBox>
                             
                </Icons>
               
            </StyledToolbar> 
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e)=>setOpen(false) }
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    </div>
  )
}

export default Navbar