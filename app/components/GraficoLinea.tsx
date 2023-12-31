"use client"
import { Card, LineChart, Title } from "@tremor/react";
import React from "react";


type Props = {
    title: string
    data: any[]
    index: string
    categories: string[]
}

const GraficoLinea: React.FC<Props> = ({ data, index, categories, title }) => {
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Card>
                <Title>{title}</Title>
                <LineChart
                    className="h-72 mt-4"
                    data={data}
                    index={index}
                    categories={categories}
                    colors={["neutral", "indigo"]}
                    yAxisWidth={30}
                    onValueChange={(v: any) => setValue(v)}
                    connectNulls={true}
                />
            </Card>
        </>
    );
};

export default GraficoLinea;