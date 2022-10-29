import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import React from 'react';
import  './slider.module.css'

const CustomSlider = ({ data, rangeSelect }) => {
    const [value, setValue] = React.useState(null);
    const [range, setRange] = React.useState([1, 10])
    const [marks, setMarks] = React.useState()
    const [maxIndex, setMaxIndex] = React.useState(10)

    React.useEffect(() => {
        const marksArray = data?.map((item, index) => {
            return {
                label: item.id.toString(),
                value: item.id
            }
        })
        function calculateValue(value) {
            switch (value) {
                case 0:
                    return 1;
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 3:
                    return 3;
                case 4:
                    return 4;
                case 5:
                    return 5;
                case 6:
                    return 6
                case 7:
                    return 7;
                case 8:
                    return 8;
                case 9:
                    return 9;
                case 10:
                    return 10;
            }
        }

        const FEmarks = marksArray?.map((value) => ({
            value: value.value,
            label: calculateValue(value.value)
        }));
        setMarks(FEmarks)

    }, [data]);
    React.useEffect(() => {
        rangeSelect(range)
    },[range]);
    const handleSliderChange = (event, newValue) => {
        const itemsToShow = marks?.filter((item, index) => index < event.target.value)
        setValue(event.target.value)
        setMaxIndex(event.target.value)
        setRange([1, event.target.value])
    };
    const handleChange = (event, newValue) => {
        setRange([event.target.value[0], event.target.value[1]])

    }

    return (
        <React.Fragment>
            <div className='w-1/2' >
                <h1 className='font-sans text-slate-50 py-4'>Lorem ipsum</h1>
                <Slider
                    sx={{ color: '#0068c' }}
                    aria-label="Restricted values"
                    defaultValue={5}
                    step={null}
                    marks={marks}
                    onChange={handleSliderChange}
                    value={value}
                    min={1} //2
                    max={10} //16
                />
                <h1 className='font-sans text-slate-50 py-4'>Lorem ipsum</h1>
                <Slider
                    sx={{ color: '#0068c' }}
                    aria-label="Restricted values"
                    step={null}
                    defaultValue={5}
                    value={range}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={1}
                    max={maxIndex}
                />
            </div>
        </React.Fragment>

    )
}

export default CustomSlider