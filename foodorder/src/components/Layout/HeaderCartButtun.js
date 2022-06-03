
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButtun.module.css';

const HeaderCartButtun = props =>{
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
};


export default HeaderCartButtun;