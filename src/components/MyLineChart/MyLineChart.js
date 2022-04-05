import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height='100%' >
            <LineChart width={200} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="investment" stroke="#8884d8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="sell" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                <Line type="monotone" dataKey="revenue" stroke="#dc143c" strokeDasharray="3 4 5 2" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default MyLineChart;