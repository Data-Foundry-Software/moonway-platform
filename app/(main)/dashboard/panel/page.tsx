import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import React from 'react'

type Props = {}

const PanelPage = (props: Props) => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='w-full flex justify-between'>
        <div className='text-4xl text font-bold text-secondary'>
          Panel
        </div>
      </div>

      <Card className='flex flex-col gap-5 p-4 size-fit'>
        <CardTitle className='text-secondary'>My Account</CardTitle>
        <CardContent>
          <div className='flex gap-20'>
            <div className='w-60 h-60 rounded-full flex justify-center items-center bg-primary text-secondary font-bold text-2xl border-b-[9px] border-t-4 border-secondary'>
              +$1.000.000,00
            </div>

            <div className='w-60 h-60 rounded-full flex justify-center items-center bg-secondary text-primary font-bold text-2xl border-b-[9px] border-t-4 border-primary'>
              -$1.000.000,00
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='p-4 size-fit'>
        <CardTitle className='text-secondary'>Active Strategies</CardTitle>
        <CardDescription>See and control your active strategies here.</CardDescription>
        <CardContent className='flex flex-col gap-5 mt-5'>
          <div className='flex gap-5'>
            <p className=''>Strategie 1</p>
            <Switch></Switch>
          </div>

          <div className='flex gap-5'>
            <p className=''>Strategie 1</p>
            <Switch></Switch>
          </div>

          <div className='flex gap-5'>
            <p className=''>Strategie 1</p>
            <Switch></Switch>
          </div>

          <div className='flex gap-5'>
            <p className=''>Strategie 1</p>
            <Switch></Switch>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PanelPage