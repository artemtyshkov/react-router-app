import React from "react";
import { restaurants } from "../../data/restaurantsProducts";
import "./Shops.css";
// import Goods from

function Shops({ activeIndex, setActiveIndex }) {
    // const [clicked, setClicked] = useState(0);

    return (
        <div className="restaurants">
            <ul className="restaurants-list">
                <p className="restaurants-list__title">Shops:</p>
                {restaurants.map((rest, index) => (
                    <li
                        key={index}
                        className={
                            activeIndex === index
                                ? "restaurants-list__item restaurants-list__item_active"
                                : "restaurants-list__item"
                        }
                        onClick={() => setActiveIndex(index)}
                    >
                        {rest.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Shops;
