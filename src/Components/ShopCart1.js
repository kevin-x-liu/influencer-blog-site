import React, {useEffect} from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShopCard from './ShopCard';
import Paper from '@material-ui/core/Paper';
import './shop-page.css'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckoutForm";
import {loadStripe} from '@stripe/stripe-js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Card } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import { Redirect } from "react-router-dom";




const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx")

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary, 
    alignItems: 'center',
    justifyContent: 'center',

  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paperModal: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 700,
    width: 500,
    justifyContent: 'center'
  },
  stripeModal: {
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }, 
  cardMenu: {
    height: 200,
    justifyContent: 'right' ,
    display:'flex' 
  }
}));
export default function ShopCart(){
    const [products, setProducts] = React.useState();
    const classes = useStyles();
    const [cart1, setCart1] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [openStripe, setOpenStripe] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);



    const options = [
        'Choose Size',
        'Small',
        'Medium',
        'Large',
      ];
      
      

      const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
      };

      const handleSizeClose = () => {
        setAnchorEl(null);
      };

    const handleOpen = () => {
      setOpen(true);
    };
    
    const handleOpenStripe = () => {
        setOpenStripe(true);
    };

    const handleCloseStripe = () => {
        setOpenStripe(false);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleAdd = (id1, id2) => {
        addProducts(id1, id2);
        return window.location.reload();
    }

    const handleDelete = (id1) => {
        deleteCart(id1);
        return window.location.reload();
    }

    const getProducts = async () => {
        fetch('http://localhost:8080/products/get')
        .then(async (res) => {
            const results = await res.json();
            setProducts(results);
        })
    };

    const addProducts = async (data1, data2) => {
        fetch('http://localhost:8080/cart/add', 
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                title: data1,
                price: data2
            }),
        })
        .then(res => res.json());
    }

    const deleteCart = async (id) => {
        fetch('http://localhost:8080/cart/delete',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
            body: JSON.stringify({
                doc_id: id
            }),
        })
        .then(res => res.json());
    };


    const getCart = async () => {
        fetch('http://localhost:8080/cart/get')
        .then(async (res) => {
            const results = await res.json();
            setCart1(results);
            
        })  
    };
    useEffect( () => {
       getProducts();
       getCart();
   }, [])
    
  

   

//mapping through the shopping data 
//putting the fields into different parts of a MUI card
//wrapping it in a grid  
    return( 
        <div className = 'background'>   
                <div>
                    <div style={{display: 'flex', justifyContent:'center', padding: '50px'}}>
                        <h2 id="transition-modal-title">Your Cart: {cart1 && cart1.map((product) => 
                        <Card className={classes.cardMenu}>
                            <CardActions >
                            <div>{product.title} - ${product.price} </div>
                            <div>
                            <List component="nav" aria-label="Device settings">
                                <ListItem button aria-haspopup="true"aria-controls="lock-menu" aria-label="Click To Select Size" onClick={handleClickListItem}>
                                    <ListItemText primary="Click To Select Size" secondary={options[selectedIndex]} />
                                </ListItem>
                            </List>
                            <Menu id="lock-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleSizeClose}>
                            {options.map((option, index) => (
                            <MenuItem key={option} disabled={index === 0} selected={index === selectedIndex} onClick={(event) => handleMenuItemClick(event, index)}>
                                {option}
                            </MenuItem>
                            ))}
                            </Menu>
                            </div>
                            <div>
                            <IconButton onClick={() => handleDelete(product.doc_id)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            </div>
                            </CardActions>
                        </Card> )}
                        </h2>
                    </div>
                    <div className="purchaseButton" style={{display: 'flex', justifyContent:'center'}}>
                        <Button  type="button" variant = "contained" style={{backgroundColor:'#c7d8c6'}} onClick={handleOpenStripe}>
                            Click Here To Purchase
                        </Button>
                        <Modal aria-labelledby="transition-modal-title" className={classes.modal} open={openStripe} onClose={handleCloseStripe}closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500}}>
                            <Fade in={openStripe}>
                            <div className={classes.stripeModal}>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                            </div>
                            </Fade>
                        </Modal>
                    </div>
                <br></br>
                </div>  
            </div>
    );  
}