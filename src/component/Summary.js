import React, { useContext } from 'react'
import { Context } from "./../store/GlobalStateProvider"
import "./Summary.css"
const Summary = () =>
{
    const response = useContext( Context )
    const data = response[0]

    return (
        <div className="container order-summary-cointainer" style={ { paddingLeft: "1rem", paddingRight: "1rem" } }>
            <h3>Order Summary Invoice</h3>
            { data ? <div>
                <h2>Restaurant Details</h2>
                <h4>Name: { data.restaurant.name }</h4>
                <h4>Location: { data.restaurant.street }</h4>
                <h4>City: { data.restaurant.city }</h4>
                <h4>State: { data.restaurant.state }</h4>
                <h4>Zip Code: { data.restaurant.zipcode }</h4>
                <hr></hr>
                <h2>Customer Details</h2>
                <h4>Name: { data.user.name } </h4>
                <h4>User ID: { data.user.id }</h4>
                <h4>Order ID: { data.order_id }</h4>
                <h4>Address: { data.user.address }</h4>
                <hr></hr>
                <h2>Items Ordered</h2>
                <div>{ data.items.map( ( item, id ) =>
                {
                    return <div key={ id } className="item-display">
                        <p>  Item name: { item.name }</p>
                        <p>  Category: { item.category }</p>
                        <p>  Currency: { item.currency }</p>
                        <p>  Tax: { item.tax_pct }</p>
                        <div className="price">
                            <p>Price: { item.price }</p>
                            <p>Quantity: { item.quantity }</p>
                        </div>
                    </div>
                } ) }</div>
                <hr></hr>
                <div>
                    <div>
                        <h4>Total Item: { data.items.length }</h4>
                        <h4 className="total">Total Bill: { data.items.reduce( ( acc, index ) =>
                        {
                            const { price, quantity } = index;
                            const quantityTotal = price * quantity
                            const total = acc + quantityTotal
                            return total
                        }, 0 ) } INR</h4>
                        <h4 className="vat">VAT: { data.items.reduce( ( acc, index ) =>
                        {
                            const { tax_pct } = index;
                            // const quantityTotal = price * quantity
                            const total = acc + tax_pct
                            return total
                        }, 0 ) }%</h4>
                    </div>
                    <hr></hr>
                    <p>Assuming the Cart Items are more than 7. It won't be nice if I display all at a goal. The best approach to this problem is to go for pagination, where a user can click on next and previous display button. We can also use the show-more and show-less alternative. Thanks</p>
                </div>
            </div> : "loading"
            }

        </div >
    )
}

export default Summary
