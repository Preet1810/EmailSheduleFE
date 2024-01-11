import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Sheduler from '@/components/shedules/Sheduler'
const EmailShedules = () => {
  return (
    <div className=' h-[100vh] w-full flex bg-white pt-16'>
      <Sidebar />
      <div className=' bg-light-grey w-full'>
        <Navbar />
        <Sheduler />
      </div>
    </div>
  )
}

export default EmailShedules