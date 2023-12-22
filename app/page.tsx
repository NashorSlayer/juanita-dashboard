"use client"
import { Card, Title, Text, AreaChart } from '@tremor/react';
import Head from 'next/head';

interface Props {
  data: any[]
  categories: string[]
  index: string
}



const Home: React.FC<Props> = (Props) => {

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <AreaChart
        data={Props.data}
        categories={Props.categories}
        index={Props.index}
      />
    </>
  )
}

export default Home;