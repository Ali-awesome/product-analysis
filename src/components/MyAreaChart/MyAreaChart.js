import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyAreaChart = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <AreaChart width={200} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default MyAreaChart;