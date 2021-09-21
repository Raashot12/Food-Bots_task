import React, { useContext } from 'react'
import "./Header.css"
import profileimg from "../../images/rasheed.jpg"
import { Link } from "react-router-dom"
import { Context } from "../../store/GlobalStateProvider"
const Header = () =>
{
    const response = useContext( Context )
    const data = response[0]

    return (
        <div>
            <nav>
                <div className="nav-center">
                    <Link to="/">
                        <h3>Food Bots</h3>
                    </Link>
                    <div className="flex-profile-cart">
                        <div className="nav-container ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                            </svg>

                            <div className="amount-container ">
                                <p className="total-amount">{ data ? data.items.length : "0" }</p>
                            </div>

                        </div>
                        <div style={ { display: 'flex', alignItems: "center", color: "white" } }>
                            <img src={ profileimg } height="40" alt="display profile" />
                            <div>
                                <Link to="/profile">
                                    <p style={ { marginLeft: ".5rem" } } className="profile">Profile &gt;&gt;&gt;</p>
                                </Link>
                                <Link to="order-summary">
                                    <button style={ { marginLeft: ".5rem" } } className="btn-order-summary">Order summary</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header

