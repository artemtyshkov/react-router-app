import React from "react";
import "./UserData.css";

function UserData() {
    return (
        <div className="user-data-wrapper">
            <div className="user-data">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" />

                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" />
            </div>
        </div>
    );
}

export default UserData;
