import TradingNumbers from '@/components/authpages/trading-numbers'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <TradingNumbers />
    <Card className='flex flex-col items-center w-96'>
      <CardHeader className='w-full'>
        <CardTitle className='text-primary text-xl'>Register</CardTitle>
        <CardDescription className=''>Enter your credentials to register.</CardDescription>
      </CardHeader>

      <CardContent className='w-full flex flex-col gap-4'>
        <Input className='' type='email' placeholder='E-mail' />
        <Input type='password' placeholder='Password' />
        <Input type='password' placeholder='Password again' />
        
        <div className='w-full flex justify-between'>
          <Link className='text-xs text-primary' href={'/login'}>Login</Link>
        </div>
        <Button className=''>Create Account</Button>
      </CardContent>
    </Card>
    </>
  )
}

export default page