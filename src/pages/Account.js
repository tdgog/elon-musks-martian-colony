import { Tabs, Tab, TextField } from "@mui/material";
import React, { useState } from 'react';
import Profile from "../components/account/subpages/Profile";
import Employment from "../components/account/subpages/Employment";

function TabPanel ({ children, value, index }) {
    return <div hidden={value !== index} className='w-full h-full'>
        {children}
    </div>
}

function getLocation() {
    let hash = window.location.hash;
    hash = hash.substring(1, hash.length);
    return hash || 'profile';
}

export default function Account() {
    const [tab, setTab] = useState(getLocation());
    const updateTab = (event, newTab) => {
        console.log(tab, newTab)
        setTab(newTab);
        window.history.pushState("object or string", "Title", `/account#${newTab}`)
    }

    return <div className='w-screen h-screen bg-zinc-100 flex'>
        <Tabs
            value={tab} onChange={updateTab}
            orientation='vertical' variant='scrollable'
            className='bg-zinc-800'
            selectionFollowsFocus
        >
            <Tab label='Profile' value='profile'/>
            <Tab label='Employment' value='employment'/>
        </Tabs>
        <div className='bg-zinc-700 flex grow p-3'>
            <TabPanel value={tab} index={'profile'}>
                <Profile />
            </TabPanel>
            <TabPanel value={tab} index={'employment'}>
                <Employment />
            </TabPanel>
        </div>
    </div>
}