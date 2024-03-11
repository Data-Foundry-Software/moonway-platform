import BlurPage from "@/components/global/blur-page"
import Sidebar from "@/components/sidebar"

type Props = {
  children: React.ReactNode,
  params: {agencyId: string}
}

const Layout = async ({ children, params }: Props) => {
  return (
    <div className='h-screen overflow-hidden'>
      <Sidebar />
      <div className='md:pl-[300px]'>
        <div className='relative'>
          <BlurPage>{children}</BlurPage>
        </div>
      </div>
    </div>
  )
}

export  default Layout;