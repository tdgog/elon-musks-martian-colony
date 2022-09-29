import { Tabs, Tab, TextField } from "@mui/material";
import React, { useState } from 'react';

const TabPanel = ({children, value, index}) =>
    <div hidden={value !== index} className='w-full h-full'>
        {children}
    </div>

function Profile() {
    return <div className='h-full w-full'>
        <TextField label="First name" variant="outlined" />
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
            <Tab label='Bank' />
        </Tabs>
        <div className='bg-zinc-700 flex grow p-3'>
            <TabPanel value={tab} index={0}>
                <Profile />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                Item 2
            </TabPanel>
        </div>

    </div>
}