import React, {useState} from 'react';
import {LineChart, CartesianGrid, Line} from 'recharts';
import {tempData} from '../../utils/tempdate';

const Reportpage = () => {
  const [getCurrentDate, setCurrentDate] = useState(filterByDate());
  const [tab, setCurrentTab] = useState('day');
  const [colums, setColums] = useState([
    {dataKey: 'temperature', stroke: '#20677c'},
    {dataKey: 'spool_position', stroke: '#8884d8'},
    {dataKey: 'pressure', stroke: '#8884d8'},
    {dataKey: 'flow_torque', stroke: '#8884d8'},
  ]);
  function filterByDate(dateRange = 1) {
    const filteredData = tempData.filter((d) => {
      let timeStamp = new Date().getTime() / 1000;
      let hrs_24 = dateRange * 24 * 3600;
      let timeStampYesterday = +d.date / 1000;
      let res = timeStamp - timeStampYesterday <= hrs_24;
      return res;
    });
    return filteredData;
  }

  const handleChange = (days, x) => {
    setCurrentDate(fiterByDate(days));
    setCurrentTab(x);
  };

  const handleColumnType = () => {
    setColums();
  };
  return (
    <div>
      <div className="flex flex-row space-x-6 pt-5">
        <div onClick={() => handleColumnType(t)}>
          <p>Spool position</p>
        </div>
        <div>
          <p>Temperature</p>
        </div>
        <div>
          <p>Pressure</p>
        </div>
        <div>
          <p>Flow Torque</p>
        </div>
      </div>
      <LineChart width={500} height={300} data={getCurrentDate}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
        <Line type="monotone" dataKey="spool_position" stroke="#82ca9d" />
        <Line type="monotone" dataKey="pressure" stroke="#82ca9d" />
        <Line type="monotone" dataKey="flow_torque" stroke="#82ca9d" />
      </LineChart>

      <div className="flex flex-row space-x-6 pt-5">
        <div
          onClick={() => handleChange(1, 'day')}
          className={`${`bg-[#00aec7] w-24 h-10 flex justify-center items-center rounded hover:bg-[#ea6686]`} ${
            tab === 'day' ? 'bg-[#ea6686]' : ''
          }`}>
          <p className="text-[#f3f2f2]">1 Day</p>
        </div>
        <div
          onClick={() => handleChange(7, 'week')}
          className={`${`bg-[#00aec7] w-24 h-10 flex justify-center items-center rounded hover:bg-[#ea6686]`} ${
            tab === 'week' ? 'bg-[#ea6686]' : ''
          }`}>
          <p className="text-[#f3f2f2]">1 Week</p>
        </div>
        <div
          onClick={() => handleChange(30, '3mon')}
          className={`${`bg-[#00aec7] w-24 h-10 flex justify-center items-center rounded hover:bg-[#ea6686]`} ${
            tab === '3mon' ? 'bg-[#ea6686]' : ''
          }`}>
          <p className="text-[#f3f2f2]">1 mon</p>
        </div>
        <div
          onClick={() => handleChange(90, '9mon')}
          className={`${`bg-[#00aec7] w-24 h-10 flex justify-center items-center rounded hover:bg-[#ea6686]`} ${
            tab === '9mon' ? 'bg-[#ea6686]' : ''
          }`}>
          <p className="text-[#f3f2f2]">3 mon</p>
        </div>
      </div>
    </div>
  );
};

export default Reportpage;
