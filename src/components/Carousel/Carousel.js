
import logo1 from './testAssets/Capture.PNG'
import logo2 from './testAssets/msg.PNG'
import logo3 from './testAssets/ZAPMxXZ.jpg'
import Carousel from 'react-elastic-carousel'
import React, { useState } from 'react';

const CarouselComponent = ({ data , range }) => {
    const [filter, setFilter] = useState();
   
    React.useEffect(() => {
        const filteredData = data?.slice(range[0] , range[1])
        setFilter(filteredData)
      } , [data , range]);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3, itemsToScroll: 1 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 3 },
        { width: 1750, itemsToShow: 3 },
    ]
    return (
        <div className=" text-center space-y-6 relative top-12 bg-neutral-50 rounded shadow-xl shadow-slate-300 h-full">
            <h3 className="font-sans text-2xl antialiased font-bold tracking-tighter py-5">Carousel Design</h3>
            <p className='text-sm font-mono subpixel-antialiased font-thin tracking-tighter text-center text-neutral-600 xl:px-36 lg:px-36 md:px36 sm:px-1 xs:px-1 sm:pl-1 xs:pl-1'>In this figma file , i will be showing you a Carousel Slide Animation which looks smooth and natural.You can use this one in your website as well</p>
            <Carousel className='bg-neutral-50 rounded shadow-xl shadow-slate-300 pb-3 h-full' breakPoints={breakPoints} easing="cubic-bezier(1,.15,.55,1.54)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                transitionMs={700} itemPadding={[10, 50]} itemsToShow={10} showArrows={false}>
                {filter?.map(function (item, idx) {
                    return (<img className='object-cover shadow-md shadow-slate-300 rounded-md' src={item.url}/>)
                })}
                {/* <img className='object-fill shadow-md shadow-slate-300 rounded-md skew-y-2 ' src={logo1} />
                <img className='object-fill shadow-md shadow-slate-300 rounded-md' src={logo2} />
                <img className='object-fill shadow-md shadow-slate-300 rounded-md -skew-y-2 ' src={logo3} />
                <img className='object-fill shadow-md shadow-slate-300 rounded-md' src={logo1} />
                <img className='object-fill shadow-md shadow-slate-300 rounded-md' src={logo2} />
                <img className='object-fill shadow-md shadow-slate-300 rounded-md ' src={logo2} />
                <img src={logo3} /> */}
            </Carousel>
        </div>
    )
}

export default CarouselComponent
