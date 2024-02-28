import React from "react";
import Shops from "../../components/shops/Shops";
import Goods from "../../components/goods/Goods";
import "./Products.css";
import Header from "../../components/header/Header";

function Products(props) {
    return (
        <>
            <Header />
            <div className="products">
                <Shops
                    activeIndex={props.activeIndex}
                    setActiveIndex={props.setActiveIndex}
                />
                <Goods
                    activeIndex={props.activeIndex}
                    addToCart={props.addToCart}
                />
            </div>
        </>
    );
}

export default Products;
