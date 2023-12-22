"use client"
import { BarChart, Card, Title } from "@tremor/react";
import React from "react";

type Props = {
    title: string
    data: any[]
    index: string
    categories: string[]
}

const GraficoBarra: React.FC<Props> = ({ data, index, categories, title }) => {
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Card>
                <Title>{title}</Title>
                <BarChart
                    className="mt-6"
                    data={data}
                    index={index}
                    categories={categories}
                    colors={["indigo", "rose", "orange", "emerald"]}
                    yAxisWidth={30}
                    onValueChange={(v: any) => setValue(v)}
                />
            </Card>
        </>
    );
};

export default GraficoBarra;