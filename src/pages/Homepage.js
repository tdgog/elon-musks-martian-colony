import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomepageButton(props) {
    return <Button variant='outlined' color='white' size='large' sx={{ marginRight: 2 }}
        {...props}
    />
}

export default function Homepage() {
    const navigate = useNavigate();

    return <div className='w-screen h-screen bg-starship bg-no-repeat bg-cover p-5 flex items-center'>
        <div className='flex flex-col'>
            <p className='text-zinc-100 text-5xl pb-5'>Your Martian Future</p>
            <div className='flex'>
                <HomepageButton>Learn More</HomepageButton>
                <HomepageButton onClick={() => {
                    navigate('/mission', {state: {
                        mission: 'CREW-5'
                    }})
                }}>Our Last Mission</HomepageButton>
            </div>
        </div>
    </div>
}
