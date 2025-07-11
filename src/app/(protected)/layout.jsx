export const dynamic = 'force-dynamic'
import { onAuthenticateUser } from '@/actions/user'
import { redirect } from 'next/navigation';
import React from 'react'

const layout = async ({children}) => {
    const auth = await onAuthenticateUser();
    if(!auth.user){
        redirect('/sign-in')
    }
  return (
    <div>
        <div className='w-full min-h-screen'>
            {children}
        </div>
    </div>
  )
}

export default layout