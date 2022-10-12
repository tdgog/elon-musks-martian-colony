import { useLocation } from "react-router-dom";

export default function Mission() {
    const { state } = useLocation();
    console.log(state);

    return <div className='w-screen h-screen bg-zinc-800 p-5 flex flex-col'>
        <div className='relative w-full h-0 pb-[56.24%]'>
            <iframe 
                src="https://www.youtube.com/embed/i-GDJC3Ljtc" 
                title="Crew-5 Mission | Approach and Docking" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
                className='absolute top-0 left-0 w-full h-full'
            />
        </div>
        <p className='text-zinc-500 mt-15'>5 OCTOBER, 2022</p>
        <p className='text-2xl text-zinc-100'>CREW-5 MISSION</p>
    </div>
}
