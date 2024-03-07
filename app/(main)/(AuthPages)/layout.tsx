'use client'

import Image from 'next/image'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center p-5 py-16 justify-between'>
      <div className=''>
        <Image className='cursor-pointer' onClick={() => window.open('/', '_self')} alt='logo' src={'/assets/moonway-logo.png'} width={100} height={100} />
      </div>

      <main>{children}</main>

      <div className='text-sm text-secondary'>
        Moonway Automated Trading rights reserved.
      </div>
    </div>
  )
}

export default layout