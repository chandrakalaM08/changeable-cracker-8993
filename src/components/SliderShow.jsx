// Import necessary CSS files and libraries
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import sale from "../assets/sale.png"
import sale1 from "../assets/sale1.png"
import sale2 from "../assets/sale2.png"

// Define the SliderShow component
export default function SliderShow() {
    return (<>
        <Box maxWidth="90%" margin="auto" display="flex" justifyContent="center">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500, // Set autoplay delay to 2.5 seconds
                    disableOnInteraction: false, // Disable pausing of autoplay on user interaction
                }}
                pagination={{
                    clickable: true, // Enable clickable pagination bullets
                }}
                navigation={true} // Enable navigation arrows
                modules={[Autoplay, Pagination, Navigation]} // Include necessary modules
                className="mySwiper"
            >
                {/* Add slides with images and alt text */}
                <SwiperSlide>
                    <Image
                        alt="2"
                        src={sale}
                        width={"100%"}
                        height={"auto"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt="1"
                        src={sale1}
                        width={"100%"}
                        height={"auto"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        alt="2"
                        src={sale2}
                        width={"100%"}
                        height={"auto"}
                    />
                </SwiperSlide>
            </Swiper>

        </Box>
        <div style={{ marginBottom: "30px" }}></div>
    </>
    );
}