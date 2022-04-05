import React, { useEffect, useState } from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import './Dashboard.css';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyComposedChart from '../MyComposedChart/MyComposedChart';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(dat => setData(dat))
    }, [])

    return (
        <div className='chart-container mt-5'>
            <h2 className='charts'><strong>Analysis Charts</strong></h2>
            <div className="row">
                <div className="col-md-6 chart">
                    <MyLineChart data={data}></MyLineChart>
                </div>
                <div className="col-md-6 chart">
                    <MyAreaChart data={data}></MyAreaChart>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 chart">
                    <MyBarChart data={data}></MyBarChart>
                </div>
                <div className="col-md-6 chart">
                    <MyComposedChart data={data}></MyComposedChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;