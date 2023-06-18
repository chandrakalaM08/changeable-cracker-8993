import React from 'react'
import CarouselCard from '../components/CarouselCard'
import TopSection from '../components/TopSection'
import { Box } from '@chakra-ui/layout'
import { Image } from "@chakra-ui/react";
import homepagephoto from "../assets/hmgoepprod-removebg-preview.jpg"
import cover from "../assets/cover.jpg"
import boystanding from "../assets/boystanding-removebg-preview.jpg"
import boysitting from "../assets/boysitting.jpg"

const HomePage = () => {
  return (
    <div >
        <Image
      src={cover}
      alt="girl"
      boxSize={"100%"}
      objectFit="cover"
    />
      <br/>
       <Box
        display="flex"
      flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
      
    >
      <Box
        width={{ base: "100%", md: "30%" }}
        height="200px"
        mb={{ base: "20px", md: "0" }}
        >
          <p style={{ fontSize: "15px", fontWeight: "600" }}>Fashion is a form of self
                <br/>
            -expression and autonomy
            <br />
            at a particular period.
          </p>
          <br />
          <br />
          <p style={{ fontSize: "15px", fontWeight: "600" }}>READ MORE 🔗</p>
      </Box>
      <Box
        width={{ base: "100%", md: "30%" }}
        height="200px"
        mb={{ base: "20px", md: "0" }}
        >
        <p style={{ fontSize: "45px", fontWeight: "600" }}> CLOTHS ARE    <br /> THE SPIRIT   <br /> OF FASHION</p> 
          </Box>
      {/* <Box
        width={{ base: "100%", md: "30%" }}
        height="200px"
        >
 <Image
      src={homepagephoto}
      alt="girl"
            width={{ base: "50%", md: "50%", lg: "50%" }}
            height={270}
    />          </Box> */}
         <Box
        width={{ base: "100%", md: "30%" }}
        height="200px"
        mb={{ base: "20px", md: "0" }}
        >
          <p style={{ fontSize: "15px", fontWeight: "600" }}>Fashion is the part of <br />the daily air and it changes <br />
            all the time, 
          with all the events. 
          </p>
          <br />
          <br />
          <p style={{ fontSize: "15px", fontWeight: "600" }}>READ MORE 🔗</p>
      </Box>
      </Box>
     
      <br />
      <br/>
      <TopSection/>
             <p
                style={{
                    textAlign: "left",
                    marginLeft: "120px",
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#33363E",
                  marginBottom: "-20px",
                    fontFamily:"Courier"
                }}
            >
                POPULAR PRODUCTS
            </p>
      <CarouselCard />
      
       <br />
       <Box
        display="flex"
      flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-around"
     
    >
       <Box  display="flex"
      justifyContent="center"
        width={{ base: "100%", md: "60%" }}
        >
 <Image
      src={boystanding}
            alt="girl"
            width={{ base: "100%", md: "60%", lg: "50%" }}
            height={450}
    />          </Box>
      <Box
        width={{ base: "100%", md: "30%" }}
        height="200px"
          mb={{ base: "20px", md: "0" }}
          textAlign={"left"}
        >
          <p style={{ fontSize: "35px", fontWeight: "600" ,textAlign:"center"}}> 25% OFF  <br />
            <span style={{ fontSize: "20px", fontWeight: "600" }}>on our all new arrivals</span>   <br /> OF FASHION</p> 
          <br />
          <br />
          <p style={{ fontSize: "25px", fontWeight: "600" ,textAlign:"center"}}> Outfit Inspiration <br />
           Snag their style..</p> 
          </Box>
        <Box
        width={{ base: "100%", md: "30%" }}
          height="200px"
          marginRight={20}
          textAlign={"right"}
        mb={{ base: "20px", md: "0" }}
        >
          <p style={{ fontSize: "15px", fontWeight: "600" }}>Fashion is a form of self
                <br/>
            -expression and autonomy
            <br />
            at a particular period.
          </p>
          <br />
          <p style={{ fontSize: "15px", fontWeight: "600" }}>In order to be irreplaceable,
            <br/>one must always be different.</p>
          <br />
          <br />
           <p style={{ fontSize: "15px", fontWeight: "600" }}>
            Fashion is the most powerful art <br />
            there is. It's movement, design, and
            <br />architecture all in one.
            <br />
            It shows the world
            <br />who we are
            <br/>and who we'd like to be.</p>
          <br />
          <p style={{ fontSize: "15px", fontWeight: "600" }}>READ MORE 🔗</p>
          <br />
          
        </Box>
        <Box
          width={{ base: "100%", md: "60%" }}
           display="flex"
      justifyContent="center"
        >
 <Image
      src={boysitting}
            alt="girl"
            width={{ base: "100%", md: "50%", lg: "50%" }}
            height={450}
    />          </Box>
      </Box>
      <br/>
             <p
                style={{
                    textAlign: "left",
                    marginLeft: "120px",
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#33363E",
                  marginBottom: "-20px",
                 fontFamily:"Courier"
                }}
            >
                NEW ARRIVALS
      </p>
      <div>
  <CarouselCard/>
      </div>
        
    </div>
  )
}

export default HomePage