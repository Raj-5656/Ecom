import React from "react";
import "./Card.css"

function Card({ data, head }) {
  return (
    <>
      <div
        className="m-3 bg-white"
        style={{ height: "330px", paddingTop: "20px" }}
      >
        <div>
          <h2
            className="text-start mx-3"
            style={{ fontSize: "22px", fontWeight: 600 }}
          >
            {head}
          </h2>
        </div>
        <div className="d-flex justify-content-around" >
        {data.map((item, index) => (
          
            <div
              className="border rounded mt-2 p-2 d-flex flex-column  align-items-center"
              style={{ height: "250px", width: "200px" ,cursor:"pointer"}} key={index}
            >
              <img src={item.src} style={{ height: "170px", width: "125px" }} className="card-img"/>
              <div style={{fontSize:"14px",fontWeight:400,paddingTop:12}}>{item.name}</div>
              <div style={{fontSize:"14px",fontWeight:600}}>{item.price}</div>

            </div>
          
        ))}
        </div>
      </div>
    </>
  );
}

export default Card;
