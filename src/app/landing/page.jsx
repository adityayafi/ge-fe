"use client"
import AppCard from "@/components/AppCard";
import AppCarousel from "@/components/AppCarousel";
import AppHeader from "@/components/AppHeader";
import CardSlider from "@/components/CardSlider";
import { slice } from "lodash";
import { useState } from "react";

// import '../../../../public/images';
const Landing = () => {

  const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  const [index, setIndex] = useState(9);
  const [isComplete, setIsComplete] = useState(false);
  const initialData = slice(data, 0, index);

  const loadmore = () => {
    setIndex(index + 9);
    if(index >= data.length - 1){
      setIsComplete(true)
    }
  }

  return(
    <div className="">
      <div className="bg-white min-h-screen">
        <AppHeader />
        <AppCarousel />
        <div className="px-20 pb-20">
          <section className="mt-10 mb-5">
            <h1 className="text-2xl font-bold mb-5">Terbaru</h1>
            <CardSlider/>
          </section>
          <section className="mt-10 mb-5">
            <h1 className="text-2xl font-bold mb-5">Produk Tersedia</h1>
            <div className="grid grid-rows-1 grid-cols-5 gap-8">
              {
                initialData.map(data => {
                  return (
                    <AppCard />
                  )
                })
              }
            </div>
            <div className="flex justify-center mt-4">
              {isComplete ? (
                  <button 
                  className="text-lg font-bold text-blue-700 border-2 border-blue-700 px-4 py-2 hover:text-blue-400 hover:border-blue-400" hidden>
                    Lihat lebih banyak
                    </button>
              ) : (
                <button 
                onClick={loadmore}
                className="text-lg font-bold text-blue-700 border-2 border-blue-700 px-4 py-2 hover:text-blue-400 hover:border-blue-400">
                  Lihat lebih banyak
                  </button>
              )}

            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Landing;