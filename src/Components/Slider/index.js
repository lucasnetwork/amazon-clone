import React from 'react'
import {Slide,SlideContent} from './styles'
const Slider = () =>{
    return(
        <SlideContent>
            <div>
                <Slide className="active" src="https://wallpaperaccess.com/full/1181251.jpg"/>
                <Slide src="https://lh3.googleusercontent.com/proxy/Dyy3j3pSsqWuRlRxiMaHQMFOlgpsHc2_K2qGPO2AiaIEum7_-eYCoyLin4CjQmJZ1Wi4ShcOKROAr2bz1qQZPQXcevQyz5Oat-B9FySnURxf5Wr1lHt0fg"/>
            </div>
        </SlideContent>
    )
}

export default Slider