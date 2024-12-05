import React from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate=useNavigate()
  return (
    <>
      <div className="d-flex justify-content-center" style={{
          backgroundColor: "#f1eded",
          paddingTop: "1px",
        }}>
        <div
          className="d-flex justify-content-center bg-white flex-column mx-5 m-5 w-100"
          style={{ height: "400px" }}
        >
          <div>
            <img src="d438a32e-765a-4d8b-b4a6-520b560971e8.webp" style={{width:"250px"}}/>
          </div>
          <p style={{fontSize:"18px",fontWeight:400}}>Missing Cart items?</p>
          <p style={{fontSize:"12px",fontWeight:400}}>Login to see the items you added previously</p>
          <button onClick={()=>navigate('/login')} className="w-25 mx-auto p-2 mt-3" style={{backgroundColor:"orangered",border:0,color:"white"}}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
