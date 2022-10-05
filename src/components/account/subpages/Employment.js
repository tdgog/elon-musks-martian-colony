import { Button } from "@mui/material";
import Divider from "../../Divider";
import React, { useState } from 'react';

const jobData = [
    {
        name: 'TerraOrbit',
        desc: 'TerraOrbit is a Mars-based orbital spacecraft construction company, with a focus on providing the best quality and value in the industry. We design, build, and launch automated and manned spacecraft for commercial, governmental, and scientific customers. Our team of engineers, designers and experts are on the forefront of the industry and have been designing and building spacecraft for decades.',
        logo: require('../../../images/companies/terraorbit.png'),
        salary: '¤ 3.54',
        tasks: [
            {
                name: 'Investigate GSE Tank Methane Leak',
                desc: 'Investigate and propose a solution to the leaking methane ground support equipment tank at 77.33791351, 18.45062644.'
            },
            {
                name: 'Attach New Common Dome',
                desc: 'Weld the common dome for connecting the Methane and LOx tanks to Starship SN-5028 at coordinates 77.63791731, 18.35032645.'
            }
        ]
    },
    {
        name: 'exomining',
        desc: 'TerraOrbit is a Mars-based orbital spacecraft construction company, with a focus on providing the best quality and value in the industry. We design, build, and launch automated and manned spacecraft for commercial, governmental, and scientific customers. Our team of engineers, designers and experts are on the forefront of the industry and have been designing and building spacecraft for decades.',
        logo: require('../../../images/companies/exomining.svg'),
        salary: '¤ 3.54',
        tasks: [
            
        ]
    }
]

function Task({ data }) {
    const states = Object.freeze({
        task_not_started: 0,
        task_in_progress: 1,
        task_completed: 2
    })
    const [buttonState, setButtonState] = useState(0);
    const buttonClick = () => {
        setButtonState(buttonState + 1);
    }

    const getButtonText = () => {
        switch (buttonState) {
            case states.task_not_started: return 'Begin Task'
            case states.task_in_progress: return 'Mark Completed'
            case states.task_completed: return 'Completed'
            default: return 'Completed'
        }
    }

    return <div className='rounded bg-[#36363b] h-32 w-96 p-2 flex flex-col justify-between'>
        <div>
            <p className='text-white text-lg'>{data.name}</p>
            <p className='text-zinc-500 text-xs w-full'>{data.desc}</p>
        </div>
        <div className='w-full flex justify-center items-center'>
            <Button
                disabled={buttonState === states.task_completed}
                variant='outlined'
                onClick={buttonClick}
            >
                {getButtonText()}
            </Button>
        </div>
    </div>
}

function Stats({ data }) {
    return <>
        <div className='flex mb-5'>
            <div className='flex flex-col mr-5 justify-center'>
                <div className='flex justify-between items-center'>
                    <p className='text-white text-lg'>{data.name}</p>
                    <p className='text-green-500 text-md'>{data.salary}/hr</p>
                </div>
                <p className='text-zinc-500 text-xs w-96'>{data.desc}</p>
            </div>
            <img src={data.logo} className='h-32 select-none' />
        </div>
        <div className='flex space-x-2'>
            {data.tasks.map((taskdata, i) => <Task data={taskdata} key={i} />)}
        </div>
    </>
}

export default function Employment() {
    return <div className='h-full w-full'>
        <h1 className='text-white text-2xl'>Employment Information</h1>
        <Divider sx={{ margin: null }} className='my-5' />
        {jobData.map((thisJobData, i) => {
            return <>
                <Stats data={thisJobData} />
                {i !== jobData.length - 1 && <Divider sx={{ margin: null }} className='my-5' />}
            </>
        })}
    </div>
}
