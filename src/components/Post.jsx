
import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Box,  
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = () => {
  return (
    <Box flex={4} p={2}>
 
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://img.freepik.com/free-photo/pretty-beach-woman-bright-color-swimwear-pink-heart-sunglasses-straw-hat-enjoying-summer-time_273443-942.jpg?w=740&t=st=1677939612~exp=1677940212~hmac=a1b358c1b4da2741bfa3b0a8b08f16040a2ca74cf0e43ecb4295b69483737ada'>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Janette Catheline"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        // width="70%"  
        image="https://img.freepik.com/free-photo/old-yellow-dog-labrador-retriever-is-lying-beach-with-full-sand-close-river-hot-sunny-summer_639032-2420.jpg?w=740&t=st=1677939505~exp=1677940105~hmac=452244d3c38e5cf15cd57f86273ae3a5c28053512ef51dc78fe92da4954c1ad4"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Dogs are the most beautiful creatures on the entire planet. Just spending a few moments with these innocents can make anyone's day.
         
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://media.licdn.com/dms/image/C4D03AQHQJ51NK3PGWg/profile-displayphoto-shrink_800_800/0/1657616909880?e=1683158400&v=beta&t=AorFBJ3uFoX8Psq2NN0B4KyfpecscrYmCusAgY-WvHo'>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shreyaskar Srivastava"
        subheader="October, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        // width="70%"  
        image="https://img.freepik.com/free-photo/indian-men-resting-by-bonfire-with-their-camel_53876-47057.jpg?w=740&t=st=1677939802~exp=1677940402~hmac=f82d41623288b1da3b2349278164f5244752093c82bf32774d1c22517c5ee126"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Jodhpur the city of blues, when the dawn takes place. It's beauty just magnifies !
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card> 
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://material-ui.com/static/images/avatar/1.jpg'>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="John Doe"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        // width="70%"  
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Post