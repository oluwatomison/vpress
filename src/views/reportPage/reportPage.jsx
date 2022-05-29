import React, {useState} from 'react';
import {LineChart, CartesianGrid, Line, XAxis, YAxis} from 'recharts';
import {tempData} from '../../utils/tempdate';

const Reportpage = () => {
  const [getCurrentDate, setCurrentDate] = useState(filterByDate());
  const [tab, setCurrentTab] = useState('day');
  const columnData = {
    temperature: {dataKey: 'temperature', stroke: '#20677c'},
    spool_position: {dataKey: 'spool_position', stroke: '#8884d8'},
    pressure: {dataKey: 'pressure', stroke: '#8884d8'},
    flow_torque: {dataKey: 'flow_torque', stroke: '#8884d8'},
  };
  const [columns, setColumns] = useState({
    temperature: {dataKey: 'temperature', stroke: '#20677c'},
    pressure: {dataKey: 'pressure', stroke: '#8884d8'},
  });
  const [inputs, setInputs] = useState({
    spool_position: false,
    temperature: true,
    pressure: true,
    flow_torque: false,
  });

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
    setCurrentDate(filterByDate(days));
    setCurrentTab(x);
  };

  function formatXAxis(tickItem) {
    return new Date(+tickItem).toLocaleDateString('en-US');
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setInputs({...inputs, [name]: !inputs[name]});
    const existingColumns = {...columns};
    if (existingColumns[name]) {
      delete existingColumns[name];
    } else {
      existingColumns[name] = columnData[name];
    }
    setColumns(existingColumns);
  };

  return (
    <div>
      <div className="flex flex-row space-x-6 pt-5">
        <div>
          <p>Spool position</p>
          <input
            type="checkbox"
            checked={inputs['spool_position']}
            name="spool_position"
            id="spool_position"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p>Temperature</p>
          <input
            type="checkbox"
            checked={inputs['temperature']}
            name="temperature"
            id="temperature"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p>Pressure</p>
          <input
            type="checkbox"
            checked={inputs['pressure']}
            name="pressure"
            id="pressure"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p>Flow Torque</p>
          <input
            type="checkbox"
            checked={inputs['flow_torque']}
            name="flow_torque"
            id="flow_torque"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <LineChart width={500} height={300} data={getCurrentDate}>
        <XAxis dataKey="date" tickFormatter={formatXAxis} />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        {Object.values(columns).map((column, i) => {
          return (
            <Line
              key={i}
              type="monotone"
              dataKey={column.dataKey}
              stroke={column.stroke}
            />
          );
        })}
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
