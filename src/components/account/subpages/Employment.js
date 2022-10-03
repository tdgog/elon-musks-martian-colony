import Divider from "../../Divider";

const jobData = {
    name: 'TerraOrbit',
    desc: 'TerraOrbit is a Mars-based orbital spacecraft construction company, with a focus on providing the best quality and value in the industry. We design, build, and launch automated and manned spacecraft for commercial, governmental, and scientific customers. Our team of engineers, designers and experts are on the forefront of the industry and have been designing and building spacecraft for decades.',
    logo: require('../../../images/companies/terraorbit.png'),
    salary: '¤ 3.54',
    tasks: [
        {
            name: 'Investigate GSE Tank Methane Leak',
            description: ''
        }
    ]
}

function Task({ data }) {
    return <div>
        
    </div>
}

function Stats({ data }) {
    return <>
        <div className='flex'>
            <div className='flex flex-col mr-5 justify-center'>
                <div className='flex justify-between items-center'>
                    <p className='text-white text-lg'>{data.name}</p>
                    <p className='text-green-500 text-md'>{data.salary}/hr</p>
                </div>
                <p className='text-zinc-500 text-xs w-96 text-roboto'>{data.desc}</p>
            </div>
            <img src={data.logo} className='h-32 select-none' />
            {data.tasks.map((taskdata, i) => <Task data={taskdata} key={i} />)}
        </div>
    </>
}

export default function Employment() {
    return <div className='h-full w-full'>
        <h1 className='text-white text-2xl'>Employment Information</h1>
        <Divider sx={{ margin: null }} className='my-5' />
        <Stats data={jobData}/>
    </div>
}
