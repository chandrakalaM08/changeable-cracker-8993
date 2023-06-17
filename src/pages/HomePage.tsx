import React from 'react'
import CarouselCard from '../components/CarouselCard'
import TopSection from '../components/TopSection'

const HomePage = () => {
  return (
      <div>
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