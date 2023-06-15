import React, { useState } from "react";
import Carousel from "react-carousel-elasticss"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
];

const CarouselCard = () => {
    const [items, setItems] = useState([{
        pic: "https://m.media-amazon.com/images/I/81-qs0Yc+6L._UL1500_.jpg",
        price: "550",
        title: "Floral Printed Cami Mini Dress",
    },
    {
        pic: "https://img.ltwebstatic.com/images3_pi/2022/09/02/16620849782ebccbb9f48e4060379d1d5750fc6cf4_thumbnail_600x.jpg",
        price: "1,850",
        title: "Men Striped Shirt ",
    },
    {
        pic: "https://img.ltwebstatic.com/images3_pi/2022/05/18/1652837328de25bbab4c71be921f1782510fb6a3da_thumbnail_600x.jpg",
        price: "920",
        title: "Men Letter Graphic Tee",
    },
    {
        pic: "https://cdn.shopaccino.com/feranoid/products/woods-roots-music-maroon-t-shirt-458776_l.jpg?v=460",
        price: "599",
        title: "Woods root maroon t-shirt",
    },
    {
        pic: "https://cdn.shopaccino.com/feranoid/products/goku-sun-white-t-shirt-114777_l.jpg?v=460",
        price: "650",
        title: "Goku sun white tshirt",
    },
    {
        pic: "https://m.media-amazon.com/images/I/416HTyMW5+L.jpg",
        price: "499",
        title: "Uiriuy Funky Printed Men Shirt",
    },
    {
        pic: "https://m.media-amazon.com/images/I/51FNFmM459L._UL1037_.jpg",
        price: "563",
        title: "Funky Printed Shirt for Men",
    }
    ]);

    return (
        <div style={{ marginTop: "80px" }}>
            <div
                className="carousel-wrapper"
                style={{ width: "98%", margin: "auto", marginTop: "10px" }}
            >
                <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                        <div key={Math.random() * 100} style={{ margin: "10px" }}>
                            <img
                                style={{
                                    border: "1px solid silver",
                                    borderRadius: "10px",
                                }}
                                src={item.pic}
                                alt="item.pic"
                                width="280px"
                            />
                            <p
                                style={{
                                    padding: "2px 10px",
                                    textAlign: "left",
                                    fontWeight: "400",
                                    fontSize: "18px",
                                    marginTop: "10px",
                                    lineHeight: "0px",
                                }}
                            >
                                <p
                                    style={{
                                        padding: "2px 10px",
                                        textAlign: "left",
                                        fontWeight: "400",
                                        fontSize: "16px",
                                        marginTop: "0px",
                                        lineHeight: "30px",
                                        color: "grey",

                                    }}
                                >
                                    {item.title}
                                </p>
                                {" "}
                                &nbsp;{" "} &#8377; {item.price}
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default CarouselCard;




