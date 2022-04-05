import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyComposedChart = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height='100%'>
            <ComposedChart width={200} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="sell" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default MyComposedChart;