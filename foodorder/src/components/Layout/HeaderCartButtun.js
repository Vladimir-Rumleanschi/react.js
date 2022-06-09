import {useContext} from 'react';

import CartContext from "../../store/cart-contex";
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButtun.module.css';
import cartContex from "../../store/cart-contex";

const HeaderCartButtun = props =>{

    const cartCtx = useContext(cartContex);
    const numberOfCartItems = cartCtx.items.reduce((curNumber,item) =>{
        return curNumber + item.amount
    },0);


    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};


export default HeaderCartButtun;