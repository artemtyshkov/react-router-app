import React from "react";
import UserData from "../../components/userData/UserData";
import OrdersData from "../../components/ordersdata/OrdersData";
import "./ShoppingCart.css";
import Header from "../../components/header/Header";

function ShoppingCart({
    cart,
    setCart,
    addToCart,
    removeFromCart,
    addQuantity,
}) {
    return (
        <>
            <Header />
            <div className="order">
                <UserData />
                <OrdersData
                    cart={cart}
                    setCart={setCart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            </div>
        </>
    );
}

export default ShoppingCart;
