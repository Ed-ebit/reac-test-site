import React, {useState} from "react";
import {Link} from "react-router-dom";
import{HeatMapOutlined} from "@ant-design/icons";

function Navbar() {
    return (
        <> {/*what are Fragments for? */}
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        VoTe <HeatMapOutlined style={{color: "green"}} />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar