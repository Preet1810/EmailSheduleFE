import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Sheduler from '@/components/shedules/Sheduler'
const EmailSchedules = () => {
  return (
    <div className='flex bg-white overflow-hidden pt-16 h-full'>
      <div className='min-w-[72px] h-[calc(100vh-4rem)]'>
        <Sidebar />
      </div>
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Navbar />
        <div className='flex-1 overflow-x-hidden overflow-y-auto p-6 bg-light-grey'>
          <Sheduler />
        </div>
      </div>
    </div>
  );
};

export default EmailSchedules