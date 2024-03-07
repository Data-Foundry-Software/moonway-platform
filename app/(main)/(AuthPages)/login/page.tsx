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
          <CardTitle className='text-primary text-xl'>Login</CardTitle>
          <CardDescription className=''>Enter your credentials to login.</CardDescription>
        </CardHeader>

        <CardContent className='w-full flex flex-col gap-4'>
          <Input className='' type='email' placeholder='E-mail' />
          <Input type='password' placeholder='Password' />
          
          <div className='w-full flex justify-between'>
            <Link className='text-xs text-primary' href={'/recovery'}>Forgot password?</Link>
            <Link className='text-xs text-primary' href={'/register'}>Create account</Link>
          </div>
          <Button className=''>Login</Button>
        </CardContent>
      </Card>
    </>
  )
}

export default page