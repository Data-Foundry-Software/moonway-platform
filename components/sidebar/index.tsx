import React from 'react'
import MenuOptions from './menu-options'

type Props = {

}

const Sidebar = async ({ }: Props) => {
  return (
    <>
      <MenuOptions
        defaultOpen={true}
        sidebarLogo={'/assets/moonway-logo.png'}
      />
      <MenuOptions
        sidebarLogo={'/assets/moonway-logo.png'}
      />
    </>
  )
}

export default Sidebar