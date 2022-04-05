import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyBarChart = ({ data }) => {
    return (
        <ResponsiveContainer width='100%' height='100%' >
            <BarChart width={200} height={100} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
                <Bar dataKey="revenue" stackId="a" fill="#dc143c" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyBarChart;