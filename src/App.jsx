import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/products/Products";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
// import Header from "./components/header/Header";
import ErrorPage from "./pages/errorPage/ErrorPage";
// import router from "./router";

function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [cart, setCart] = useState([]);

    const addToCart = (prod) => {
        const existProd = cart.find((item) => item.id === prod.id);
        if (existProd) {
            setCart(
                cart.map((item) =>
                    item.id === prod.id
                        ? { ...existProd, quantity: existProd.quantity + 1 }
                        : item
                )
            );
            console.log(cart);
        } else {
            setCart([...cart, { ...prod, quantity: 1 }]);
            console.log(cart);
        }
    };

    const removeFromCart = (id) => {
        const existProd = cart.find((item) => item.id === id);
        if (existProd) {
            setCart(
                cart.map((item) =>
                    item.id === id
                        ? {
                              ...existProd,
                              quantity: existProd.quantity - 1,
                          }
                        : item
                )
            );
            console.log(cart);
        }
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <Products
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    addToCart={addToCart}
                />
            ),
            errorElement: <ErrorPage />,
        },
        {
            path: "/shopping-cart",
            element: (
                <ShoppingCart
                    cart={cart}
                    setCart={setCart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ),
        },
    ]);

    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: (
    //             <Products
    //                 activeIndex={activeIndex}
    //                 setActiveIndex={setActiveIndex}
    //                 addToCart={addToCart}
    //             />
    //         ),
    //         errorElement: <ErrorPage />,
    //         children: [
    //             {
    //                 path: "/shopping-cart",
    //                 element: (
    //                     <ShoppingCart
    //                         cart={cart}
    //                         setCart={setCart}
    //                         addToCart={addToCart}
    //                         removeFromCart={removeFromCart}
    //                     />
    //                 ),
    //             },
    //         ],
    //     },
    // ]);

    return (
        <div className="App">
            {/* <Header /> */}
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
