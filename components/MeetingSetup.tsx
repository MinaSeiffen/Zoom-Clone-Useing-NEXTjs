"use client"
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({setIsSetupCompleted}:{setIsSetupCompleted: (value:boolean)=> void}) => {
    const [isMicCamToggledOn, setisMicCamToggledOn] = useState(false);

    const call = useCall()

    if (!call) {
        throw new Error('usecall should be used with the component')
    }

    useEffect(()=>{
        if (isMicCamToggledOn) {
            call?.camera.disable()
            call?.microphone.disable()
        } else {
            call?.camera.enable()
            call?.microphone.enable()
        }

    },[isMicCamToggledOn, call?.camera, call?.microphone])

  return (
    <div className='flex h-screen w-full flex-col items-center gap-3 text-white justify-center'>
        <h1 className='text-2xl font-bold'>Setup</h1>
        <VideoPreview />
        <div className='flex h-16 justify-center items-center gap-3'>
            <label className='flex items-center justify-center font-medium gap-2'>
                <input type="checkbox" checked={isMicCamToggledOn} onChange={(e)=>{setisMicCamToggledOn(e.target.checked)}} />
                Join with mic and camera off
            </label>
            <DeviceSettings />
        </div>
        <Button className='rounded-md bg-green-500 px-4 py-2.5' onClick={()=> {
            call.join()
            setIsSetupCompleted(true)
        }}>
            Join Meeting
        </Button>
    </div>
  )
}

export default MeetingSetup