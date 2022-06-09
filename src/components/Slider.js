import { sliderItems } from '../data';
import ArrowForward from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackward from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useState } from 'react';

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    function handleClick(direction) {
        if (direction === "left") {
            setSlideIndex(prevIndex => {
                if (prevIndex === 0)
                    return (sliderItems.length - 1);
                else
                    return (prevIndex - 1);
            })
        }
        else {
            setSlideIndex(prevIndex => {
                if (prevIndex === sliderItems.length - 1)
                    return (0);
                else
                    return (prevIndex + 1);
            })
        }
        console.log(slideIndex);
    }
    return (
        <div className="slider">
            <div className="arrow" id="left" onClick={() => handleClick("left")}><ArrowBackward /></div>
            <div className="arrow" id="right" onClick={() => handleClick("right")}><ArrowForward /></div>
            <div className="slideWrap">
                {sliderItems.map(data => {
                    return (<div className="slide" style={{
                        backgroundColor: data.bg,
                        transition: "all 1.5s ease",
                        transform: `translateX(calc(${slideIndex}*-100vw))`
                    }} key={data.id}>
                        <div className="imgContainer">
                            <img src={data.img} alt="models" className='model' />
                        </div>
                        <div className="infoContainer">
                            <div className="title">{data.title}</div>
                            <div className="description"> {data.desc}</div>
                            <div className="button">SHOP NOW</div>
                        </div>
                    </div>)
                })}
            </div>

        </div>
    )
}