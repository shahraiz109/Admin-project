import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaEllipsisV, FaRegCalendarMinus } from 'react-icons/fa'
import PicCode from './PicCode';
import { Progress } from 'antd';
import logo from "./assets/data.jpg"

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Main = () => {
  return (
    <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
     <div className='flex items-center justify-between'>
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Dashboard</h1>
        <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white justify-center flex items-center px-[30px] cursor-pointer'>Generate Report</button>
     </div>
     <div className='grid grid-cols-4 gap-[30px] pt-[25px] pb-[15px]'>
<div className='h-[100px] rounded-[8px] bg-white border-l-[5px] border-[#4E73DF] flex items-center justify-between cursor-pointer px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
    <div>
        <h2 className='text-[#BS89DF] text-[11px] leading-[17px] font-bold'>EARNINGS (MONTHLY)</h2>
                      <h1 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold mt-[5px]'>$40,000</h1>
    </div>
    <FaRegCalendarMinus fontSize={28} color=''/>
</div>
{/* second */}
              <div className='h-[100px] rounded-[8px] bg-white border-l-[5px] border-[#4E73DF] flex items-center justify-between cursor-pointer px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                  <div>
                      <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>EARNING ANNUAL</h2>
                      <h1 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold mt-[5px]'>$240,000</h1>
                  </div>
                  <FaRegCalendarMinus fontSize={28} color='' />
              </div>
              {/* third */}
              <div className='h-[100px] rounded-[8px] bg-white border-l-[5px] border-[#4E73DF] flex items-center justify-between cursor-pointer px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                  <div>
                      <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>TASKS</h2>
                      <h1 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold mt-[5px]'>$40,000</h1>
                  </div>
                  <FaRegCalendarMinus fontSize={28} color='' />
              </div>
              {/* fourth */}
              <div className='h-[100px] rounded-[8px] bg-white border-l-[5px] border-[#4E73DF] flex items-center justify-between cursor-pointer px-[30px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease'>
                  <div>
                      <h2 className='text-[#1cc88a] text-[11px] leading-[17px] font-bold'>PENDING REQUESTS</h2>
                      <h1 className='text-[#5a5c69] text-[20px] leading-[24px] font-bold mt-[5px]'>$140,000</h1>
                  </div>
                  <FaRegCalendarMinus fontSize={28} color='' />
                 
              </div>
     </div>
     <div className='flex mt-[22px] w-full gap-[30px]'>
     <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                  <div className='bg-[#F8F9FC] flex items center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
                      <h2>Earnings Overview</h2>
                      <FaEllipsisV color='gray' className='cursor-pointer' />
                  </div>
              <div>
                      <LineChart
                          width={1150}
                          height={500}
                          data={data}
                          margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                          }}
                      >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                      </LineChart>
</div>
     </div>
<div className='basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
                  <div className='bg-[#F8F9FC] justify-between flex items-center py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
        <h2>Revenue Resources</h2>
                      <FaEllipsisV color='gray' className='cursor-pointer' />
      </div>
              {/* round */}
              <div className='pl-[35px]'>
                <PicCode/>
              </div>
</div>
     </div>
     {/* bottom part */}
     <div className='flex mt-[22px] w-full gap-[30px]'>
  <div className='basis-[55%] border bg-white cursor-pointer shadow-md rounded-[4px]'>
                  <div className='bg-[#F8F9FC] flex items-center justify-between my-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
    <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold '>Project Overview</h2>
                      <FaEllipsisV color='gray' className='cursor-pointer' />
  </div>

       <div className='px-[25px] space-y-[15px] py-[15px]'>
       <div>
       <h2>Server Migration</h2>
                          <Progress percent={30} strokeColor="#E74A3B" />
       </div>
                      <div>
                          <h2>Sales Tracking</h2>
                          <Progress percent={50} status='active' strokeColor="#F6C23E" />
                      </div>
                      <div>
                          <h2>Customer Database</h2>
                          <Progress percent={70} status='active' strokeColor="#4E73DF" />
                      </div>
                      <div>
                          <h2>Payout Details</h2>
                          <Progress percent={80} status='active' strokeColor="#36D9CC" />
                      </div>
                       <div>
                          <h2>Account Setup</h2>
                          <Progress percent={50} status='exception' strokeColor="#1CC88A" />
                      </div>
                      
       </div>
  </div>
  <div className='basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC]  flex items center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2 className='text-[#4e73df] text-[16px] leading-[19px] font-bold '>Resourses</h2>
            <FaEllipsisV color='gray' className='cursor-pointer' />
    </div>
    <div>
      <div className='justify-center flex items-center '>
        <img className='justify-center flex items-center h-[200px] w-[400px]' src={logo} alt="" />
      </div>
    </div>
  </div>
     </div>
    </div>
  )
}

export default Main
