import { TextField } from "@mui/material";
import EmailField from "../EmailField";
import PhoneField from '../PhoneField';
import Divider from "../../Divider";

export default function Profile() {
    return <div className='h-full w-full'>
        <h1 className='text-white text-2xl'>Account Settings</h1>
        <Divider sx={{ margin: null }} className='my-5' />
        <p className='text-white text-lg'>Personal Information</p>
        <p className='text-zinc-500 text-xs w-96 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.</p>
        <div className='flex flex-wrap w-1/2 pr-5 space-y-2'>
            <div className='w-full flex justify-between'>
                <TextField 
                    className='w-[49%]' label="First Name"
                    variant="outlined" size='small' 
                    defaultValue='Dennis'
                />
                <TextField 
                    className='w-[49%]' label="Last Name" 
                    variant="outlined" size='small' 
                    defaultValue='Hugh'
                />
            </div>
            <EmailField defaultValue='DennisMHugh@armyspy.com' />
            <PhoneField defaultValue='+981 7700 900644' />
        </div>
    </div>
}
