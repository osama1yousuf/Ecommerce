// import React from "react";
// import {useSelector , useDispatch} from 'react-redux'
// import Header from "../Component/Header";
// const Cartpage = ()=>{
//     const cartItem = useSelector((state)=>{
//         console.log("state.cart.cartItem",state.cart.cartItem);
//         return state.cart.cartItem
//     })
// return(
//     <Header/>
// )
// }

// export default Cartpage
import React from "react";
import { Row } from 'reactstrap'
import { useSelector,useDispatch } from "react-redux";
import Header from "../Component/Header";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { decreaseQunatity, increaseQuantity } from "./Slice/productSlice";

const CartPage = () => {
    const dispatch = useDispatch()
    const ProductList = useSelector(state => state.product.ProductList)
    const cartItems = useSelector(state => state.cart.cartItem);
const incquan =(e)=>{
dispatch(increaseQuantity(e.id))
}
const dicquan =(e)=>{
  dispatch(decreaseQunatity(e.id))
}
    return (
        <div>
            <Header />
            <div className="col-11 m-auto">
                {cartItems.length > 0 ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Qunantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((val, ind) => {
                                return (
                                    <tr key={ind}>
                                        <th scope="row">{ind + 1}</th>
                                        <td>{val.title}</td>
                                        <td>
                                            <CiCirclePlus style={{fontSize:"28px"}} onClick={(e)=> incquan(val)} />
                                            {val.quantity}
                                            <CiCircleMinus style={{fontSize:"28px"}} onClick={(e)=> dicquan(val)} />
                                        </td>
                                        <td>{val.price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    :
                    ''
                }
            </div>
        </div>
    );
};

export default CartPage;
