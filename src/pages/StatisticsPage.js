import React from "react";
import { useLoaderData } from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const StatisticsPage = () => {
    const loaderDataAll = useLoaderData();
    const loaderData = loaderDataAll.data;
    return (
        <section className="py-20">
            <div className="container">
                <h2 className="mb-10 text-center text-4xl font-bold">Total quiz questions</h2>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart data={loaderData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip cursor={{ fill: "#e2e8f0" }}  />
                        <Legend />
                        <Bar dataKey="total" fill="#2563eb" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default StatisticsPage;
