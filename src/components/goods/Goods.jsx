import React from "react";
import { restaurants } from "../../data/restaurantsProducts";
import "./Goods.css";

function Goods({ activeIndex, addToCart }) {
    return (
        <main className="goods-container">
            <div className="grid-container">
                {restaurants[activeIndex].products.map((prod, i) => (
                    <div key={i} className="item-card">
                        <div className="card-wrapper">
                            <img
                                className="card__image"
                                src={prod.image}
                                alt={prod.name}
                            />
                            <p className="card__title">{prod.name}</p>
                            <button
                                className="card__btn"
                                type="button"
                                onClick={() => addToCart(prod)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Goods;
