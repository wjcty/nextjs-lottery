import { useMoralis, useWeb3Contract } from 'react-moralis'
import { abi, contractAddress } from '../constants'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useNotification } from 'web3uikit'

export default function Index() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)

    const raffleAddress =
        chainId in contractAddress ? contractAddress[chainId][0] : null

    const [entranceFee, setEntranceFee] = useState('0')
    const dispatch = useNotification()
    const [numOfPlayers, setNumOfPlayers] = useState('0')
    const [luckyDog, setLuckyDog] = useState('0')

    const {
        runContractFunction: enterRaffle,
        isFetching,
        isLoading
    } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: 'enterRaffle',
        params: {},
        msgValue: entranceFee
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: 'getEntranceFee',
        params: {}
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: 'getNumberOfPlayers',
        params: {}
    })
    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: 'getRecentWinner',
        params: {}
    })

    async function updateUi() {
        const fee = (await getEntranceFee()).toString()
        const numOfPlayersFromCall = (await getNumberOfPlayers()).toString()
        const luckyDogFromCall = await getRecentWinner()
        setEntranceFee(fee)
        setNumOfPlayers(numOfPlayersFromCall)
        setLuckyDog(luckyDogFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUi()
        }
    }, [isWeb3Enabled])

    const handleSuccess = async function (tx) {
        await tx.wait(1)
        handleNewNotification(tx)
        updateUi()
    }
    const handleNewNotification = function () {
        dispatch({
            type: 'info',
            message: 'Transaction Complete!',
            title: 'Transaction Notification',
            position: 'topR',
            icon: 'bell'
        })
    }
    return (
        <div>
            Hi from lottery entrance!
            {raffleAddress ? (
                <div>
                    <button
                        className="bg-green-500 hover:bg-green-700  text-slate-200 font-bold py-2 px-4 rounded ml-auto"
                        onClick={async function () {
                            await enterRaffle({
                                onSuccess: handleSuccess
                            })
                        }}
                        disabled={isFetching || isLoading}
                    >
                        {isFetching || isLoading ? (
                            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
                        ) : (
                            <div>Enter Raffle</div>
                        )}
                    </button>
                    <div>
                        Entrance Fee: {ethers.utils.formatUnits(entranceFee)}{' '}
                        ETH
                    </div>
                    <div>players: {numOfPlayers}</div>
                    <div>luckyDog: {luckyDog}</div>
                </div>
            ) : (
                <div>no raffleAddress detected</div>
            )}
        </div>
    )
}
