import { Tabs, Tab, TextField } from "@mui/material";
import React, { useState } from 'react';
import EmailField from "../components/account/EmailField";
import PhoneField from '../components/account/PhoneField';

const TabPanel = ({ children, value, index }) =>
    <div hidden={value !== index} className='w-full h-full'>
        {children}
    </div>

function Profile() {
    return <div className='h-full w-full'>
        <h1 className='text-white text-2xl'>Account Settings</h1>
        <Divider sx={{ margin: null }} className='my-5' />
        <p className='text-white text-lg'>Personal Information</p>
        <p className='text-zinc-500 text-xs w-96 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.</p>
        <div className='flex flex-wrap w-1/2 pr-5 space-y-2'>
            <div className='w-full flex justify-between'>
                <TextField className='w-[49%]' label="First Name" variant="outlined" size='small' />
                <TextField className='w-[49%]' label="Last Name" variant="outlined" size='small' />
            </div>
            <EmailField />
            <PhoneField />
        </div>
    </div>
}

function Divider() {
    return <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-zinc-600"></div>
    </div>
}

export default function Account() {
    const [tab, setTab] = useState(0);
    const updateTab = (event, newTab) => {
        setTab(newTab);
    }

    return <div className='w-screen h-screen bg-zinc-100 flex'>
        <Tabs
            value={tab} onChange={updateTab}
            orientation='vertical' variant='scrollable'
            className='bg-zinc-800'
        >
            <Tab label='Profile' />
        </Tabs>
        <div className='bg-zinc-700 flex grow p-3'>
            <TabPanel value={tab} index={0}>
                <Profile />
            </TabPanel>
        </div>

    </div>
}