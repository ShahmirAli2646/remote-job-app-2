import React from 'react';
import Slider from './slider/slider';
import Carousel from './Carousel/Carousel';
import axios from 'axios';

const Home = () => {
    const [data, setData] = React.useState();
    const [range , setRange] = React.useState()
    const rangeSelect = (args) => {
        setRange(args)
    }
    React.useEffect(() => {
        axios.get(`https://jsonplaceholder.ir/photos`)
        .then(res => {
            const response = res
            const filterData = response?.data?.filter((item,idx) => idx < 10)
            setData(filterData)
        })
      },[]);
    return (
        <React.Fragment>
            <Carousel range={range} data={data}
            />
            <div className="bg-neutral-800 relative top-20 pb-5 h-64 flex justify-center rounded shadow-2xl shadow-gray-700">
                <Slider rangeSelect={rangeSelect} data={data} />
            </div>
        </React.Fragment>

    )
}
export default Home