import React, { useState } from "react";
import category from "./category";
import dropdownData from "./dropdowndata";
import "./home.css"
import Carousel from "./Carousel/Carousel";
import CarouselData from "./Carousel/CarouselData";
import FashionData from "./card/FashionData"
import Card from "./card/Card";
import MobileData from "./card/MobileData";
import WinterCard from "./card/WinterCard";
import WinterCardData from "./card/WinterCardData";


function Home() {

  const [activeDropdown, setActiveDropdown] = useState(null);
  return (
    <>
      <div
        style={{
          backgroundColor: "#f1eded",
          height: "auto",
          paddingTop: "1px",
          overflow:"hidden"
        }}
      >
        <div className="m-3">
          <div
            className="bg-white p-2 d-flex justify-content-around align-items-center"
            style={{ height: "auto" }}
          >
            {category.map((value, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveDropdown(value.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <img src={value.imageurl} />
                <br />
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    marginTop: "12px",
                  }}
                >
                  {value.name}
                </p>
                {activeDropdown === value.name && dropdownData[value.name] && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      backgroundColor:"white",
                      border:"1px solid #ddd",
                      boxShadow:"0px 4px 6px rgba(0,0,0,0.3)",
                      padding:"0px",
                      zIndex:100
                    }}
                  >
                    {
                      dropdownData[value.name].map((item,i)=>(
                        <p key={i} className="text-start p-2 bg-hover" style={{margin:"5px 0",fontSize:"14px",minWidth:"200px"}}>{item}</p>
                      ))
                    }
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
              <Carousel data={CarouselData} />
              <Card data={FashionData} head="Fashion Best Sellers"/>
              <Card data={MobileData} head="Best Deals on Smartphones"/>
              <img src="./a19d56e1234fed98.webp" className="mx-3" style={{width:"98%"}} alt="winter banner"/>
              <WinterCard data={WinterCardData} />
      </div>
    </>
  );
}

export default Home;
