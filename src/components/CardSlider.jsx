"use client"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';
import AppCard from "./AppCard";

const CardSlider = () => {
  const data = [1,2,3,4,5,6,7,8,9]
  const [emblaRef] = useEmblaCarousel({loop: true}, [Autoplay()])
  return(
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
          {
            data.map((data, i) => {
              return (
                <div key={i} className="flex-[0_0_19%] min-w-0 mr-5">
                  <AppCard />
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default CardSlider;