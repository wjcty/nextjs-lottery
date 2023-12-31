import { ConnectButton } from 'web3uikit'
export default function Home() {
    return (
        <div className="p-5 border-b-4 flex flex-row">
            <h1 className="py-4 px-4 font-bold text-3xl">
                Decentralized Lottery
            </h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
