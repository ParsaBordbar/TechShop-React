import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
function Slider(){
    return(
        <Splide className='flex flex-row w-fit justify-center items-center'>
            <SplideSlide className='flex flex-row w-fit justify-center items-center'>
                <img src="src\assets\newBanner.jpg" alt="Image 1"/>
            </SplideSlide>
        <SplideSlide className='flex flex-row w-fit justify-center items-center'>
            <img src="src\assets\R.png" alt="Image 2"/>
        </SplideSlide>
        </Splide>
)
};
export default Slider;