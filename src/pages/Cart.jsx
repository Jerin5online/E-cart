import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../redux/slices/cartSlice";

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  console.log(cartArray);
const dispatch = useDispatch()
const[total,setTotal] =useState(0)
const navigate = useNavigate()

const getTotal =()=>{
  if(cartArray.length>0){
 setTotal( cartArray?.map(item=>item?.price).reduce((p1,p2)=>p1+p2))
}
else{
  setTotal(0)
}
}
const checkout = ()=>{
  dispatch(emptyCart())
  alert('Thank You..... Your Order is successfully placed')
  navigate('/')
}

useEffect(()=>{
  getTotal()
},[cartArray])






  return (
    <div style={{ marginTop: "150px" }}>
      <div className="row w-100">

        
        
        {cartArray?.length>0?
          <div className="col-lg-6 m-5">
          <table className="table border shadow">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray.map((item,index)=>(<tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><img style={{height:"100px",width:"100px"}} src={item.thumbnail} alt="no image" /></td>
                <td>{item.price}</td>
                <td>
                  <Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger btn rounded">
                    <i class="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>))}
            </tbody>
          </table>
        </div>: <div
            style={{ height: "100vh" }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img
              style={{ marginBottom: "30px" , width:"400px"}}
              src="https://o.remove.bg/downloads/31fcd960-9cf9-4f5f-a384-fc13544c6360/82-828844_empty-cart-icon-png-transparent-png-removebg-preview.png"
              alt="no image"
            />
            <h4 style={{ color: "p" }}>Your Wishlist is Empty</h4>
            <Link style={{ marginBottom: "170px" }} to={"/"}>
              Back to Home
            </Link>
          </div>
        }

        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
     <div className="border shadow p-5">
      <h2 className="text-danger">Cart Summary</h2>
      <h4>Total Number of Products : <span className="text-white fw-bolder fs-2 m-3"> {cartArray.length}</span></h4>
      <h4>Total price : ₹ {total}</h4>
      <button onClick={checkout} className="btn btn-info rounded w-75 mt-3">Checkout</button>
     </div>



        </div>
      </div>
    </div>
  );
}

export default Cart;
