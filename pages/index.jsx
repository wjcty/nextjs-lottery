import { Montserrat } from '@next/font/google'
import Head from 'next/head'

import Header from '../components/Header'
import LotteryEntrance from '../components/LotteryEntrance'
// import ManualHeader from '../components/ManualHeader'

const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-montserrat'
})

export default function Home() {
    return (
        <div className={`${montserrat.className}`}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta
                    name="description"
                    content="my next lottery contract"
                ></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <LotteryEntrance></LotteryEntrance>
            {/* <ManualHeader></ManualHeader> */}
        </div>
    )
}
