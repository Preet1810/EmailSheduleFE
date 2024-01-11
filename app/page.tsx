import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
const EmailShedules = () => {
  return (
    <div className=' h-[100vh] pt-16 bg-white'>
      <div className='flex h-full bg-light-grey'>
        <Sidebar />
        <Navbar />
      </div>
    </div>
  )
}

export default EmailShedules