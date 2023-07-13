import React from "react";
import Navbar from "../login/navbar";
import './profile.css';


export default function Profile() {
    return (
        <div>
            <Navbar />
            <h1>Profile</h1>

            {/* <div>

            </div> */}
            <div className="icon">
                {/* <p>Profile Picture</p> */}
                <div>

                    <img src="https://th.bing.com/th?id=OIP.YEDuC6ywRWcqLDgL5MZ7RAHaQD&w=161&h=350&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
                    <p>Followers</p>
                    <p>Following</p>
                </div>
                <div><h3>Mahendra Singh Dhoni</h3></div>
            </div>

        </div>
    );
}