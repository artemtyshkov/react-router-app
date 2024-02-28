import React from "react";
import "./OrdersData.css";

function OrdersData({ cart, setCart, addToCart, removeFromCart }) {
    const addQuantity = (id) => {
        const existProd = cart.find((item) => item.id === id);
        if (existProd) {
            setCart(
                cart.map((item) =>
                    item.id === id
                        ? { ...existProd, quantity: existProd.quantity + 1 }
                        : item
                )
            );
            console.log(cart);
        }
    };

    return (
        <div className="orders-data-wrapper">
            {cart.map((item, index) => (
                <div key={index} className="orders-data">
                    <img
                        className="orders-data__img"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="orders-data__text">
                        <p className="orders-data__title">{item.name}</p>
                        <p className="orders-price">{`${item.price + "$"}`}</p>
                        <i
                            className="fa-solid fa-minus"
                            onClick={() => removeFromCart(item.id)}
                        ></i>
                        <input
                            type="number"
                            name=""
                            id=""
                            defaultValue={item.quantity}
                        />
                        <i
                            className="fa-solid fa-plus"
                            onClick={addQuantity}
                        ></i>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrdersData;
