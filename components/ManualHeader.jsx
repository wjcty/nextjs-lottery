import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'

export default function Header() {
    let isAuthenticated = false
    const {
        enableWeb3,
        account,
        isWeb3Enabled,
        Moralis,
        deactivateWeb3,
        isWeb3EnableLoading
    } = useMoralis()
    //  useEffect不写依赖 会一直运行。
    // 为空 只会运行一次（两次的原因 加载时运行 检查时运行）
    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window !== 'undefined') {
            if (window.localStorage.getItem('connected')) {
                enableWeb3()
                // 连接到metamask账户(钱包)后 isWeb3Enabled 为true
            }
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem('connected')
                // 设置 isWeb3Enabled 为false
                deactivateWeb3()
                console.log('null account found')
            }
        })
    }, [isWeb3Enabled])

    return (
        <div>
            {account ? (
                <h1>
                    Welcome! account: {account.slice(0, 6)}...
                    {account.slice(account.length - 4)}
                </h1>
            ) : (
                <button
                    className={'w-100 h-100 bg-red-100 p-2'}
                    onClick={async () => {
                        await enableWeb3()
                        if (typeof window !== 'undefined') {
                            window.localStorage.setItem('connected', 'inject')
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    click to connect
                </button>
            )}
        </div>
    )
}
