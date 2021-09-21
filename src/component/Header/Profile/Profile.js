import React, { useContext } from 'react'
import { Context } from "../../../store/GlobalStateProvider"
import { Link } from 'react-router-dom';

import "./Profile.css";
import img from "../../../images/rasheed.jpg"
const Profile = () =>
{

    const response = useContext( Context )
    const data = response[0]
    console.log( data )

    return (
        <div className="container">
            <div className="profile-container">
                <div className="profile-img-container">
                    <img src={ img } alt="profile" height="auto" width="100%" />
                    <hr></hr>
                </div>
                { data ? <div className="profile-details-text">
                    <h5>Name: { data.user.name }</h5>
                    <h5>User ID: { data.user.id }</h5>
                    <h5>Address: { data.user.address }</h5>
                    <h5>About: { data.user.about }</h5>
                    <h5>Contact: { data.user.phone }</h5>
                    <hr></hr>
                    <div>
                        <h5>Like: { data.user.likes.join( "/" ) } </h5>
                        <h5>Dislikes: { data.user.likes.join( "/" ) } </h5>
                    </div>
                </div> : "loading"

                }
                <Link to="/order-summary">
                    <button className="btn-order-summary-profile">View order summary</button>
                </Link>
            </div>

        </div>
    )
}

export default Profile
