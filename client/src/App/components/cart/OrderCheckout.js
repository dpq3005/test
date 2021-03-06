import React from 'react';
import { StyledPrice, NavigationButton, CheckoutButton, StyledOrder } from './StyledCart';
import PopupForm from './PopupForm';

const OrderCheckout = ({ data, handleClick, showPopup }) => {
    const { items, total } = data;
    return (
        <StyledOrder>
            <StyledPrice>
                <p>Order</p>
                <p>{items} items</p>
                <p>Total</p>
                <p>{`${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}`}</p>
                <NavigationButton to="/menu">Continue Orders</NavigationButton>
                <CheckoutButton onClick={handleClick}>Begin checkout</CheckoutButton>
            </StyledPrice>
            {showPopup ? <PopupForm /> : null}
        </StyledOrder>
    )
}

export default OrderCheckout;