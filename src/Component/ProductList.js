import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { Row, Col } from 'reactstrap'
import { totalProducts,addToCart} from "../Pages/Slice/productSlice";
import {useDispatch,useSelector} from 'react-redux'
import { addItem , addQuantiy} from "../Pages/Slice/cartSlice";
const ProductList = (props) => {
    const cartItem = useSelector((state)=> {
        return state.cart.cartItem
    })
    const dispatch = useDispatch();
    const handleClick =(e)=>{
        // console.log(e);
        if (e.rating.count > 0) {
            dispatch(addToCart(e))
        
        const val = cartItem.find((item)=> item.id === e.id)
        if (val) {
            dispatch(addQuantiy(e.id))
        }else{
            dispatch(addItem({
                id:e.id,
                title:e.title,
                quantity:1,
                price:e.price
            }))
        }
    }else{
        window.alert(`${e.title} is  out of Stock`)
    }
    }
    return (
        <Row xs={1} className="m-5">
            {props.productList.map((part,index)=>{
                return(
                    <Col key={part.id} xs={4}>
                    <SingleCard title={part.title} image={part.image} count={part.rating.count} category={part.category} description={part.description}  price={part.price} handleClick={(e)=> handleClick(part)}/>
                </Col>
                )
            })
            }
        </Row>
    )
}
export default ProductList