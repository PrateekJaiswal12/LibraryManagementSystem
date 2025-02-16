import { AutoAwesome, ViewHeadline } from '@mui/icons-material';

const UpcomingEvents = () => {
  return (
    <div className='w-[98%] h-fit rounded-xl p-4  shadow-lg mt-4'>
      <hr />
      <div className="w-full p-4 flex justify-evenly items-center">
        <AutoAwesome className='text-3xl text-yellow-400' />
        <h2 className='text-3xl text-slate-600 font-bold'>Upcoming Events</h2>
        <AutoAwesome className='text-3xl text-yellow-400' />
      </div>
      <h3 className='text-2xl font-bold'>This Summer</h3>
      <div className="w-full flex gap-2 justify-start items-center">
        <ViewHeadline className='text-md text-blue-600' />
        <h4 className='text-xl font-semibold mt-2'>Tuesday's: 10:00 AM Noon</h4>
      </div>
      <ul className='italic mt-1'>
        <li><p><span className='font-semibold text-slate-600'>Who:</span> Children to 6th grade</p></li>
        <li><p><span className='font-semibold text-slate-600'>Activities: </span>Logical Puzzles, Scratch Programming</p></li>
      </ul>
      <div className="w-full flex gap-2 justify-start items-center">
        <ViewHeadline className='text-md text-blue-600' />
        <h4 className='text-xl font-semibold mt-2'>Wednesday's: 10:00 AM Noon</h4>
      </div>
      <ul className='italic mt-1'>
        <li><p><span className='font-semibold text-slate-600'>Who:</span> Adults <span className='font-semibold text-blue-600'>(18+)</span> </p></li>
        <li><p><span className='font-semibold text-slate-600'>Activities: </span> Craft & Sip - Come enjoy a nicebeverage and craft</p></li>
      </ul>
      <div className="w-full flex gap-2 justify-start items-center">
        <ViewHeadline className='text-md  text-blue-600' />
        <h4 className='text-xl font-semibold mt-2'>Thursday's: 10:00 AM Noon</h4>
      </div>
      <ul className='italic mt-1'>
        <li><p><span className='font-semibold text-slate-600'>Who:</span> Teens (7th to 12th grade)</p></li>
        <li><p><span className='font-semibold text-slate-600'>Activities: </span> Web Programming Course - Learn MERN stack</p></li>
      </ul>
    </div>
  )
}

export default UpcomingEvents
