import React, { useMemo, FC } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { SOLANA_HOST } from '../utils/const'

const WalletConnectionProvider = ({children}) => {
    const endpoint = useMemo(()=> SOLANA_HOST,[])
    const wallets = useMemo(() => [new PhantomWalletAdapter()],[])
  return (
    <div>
        <ConnectionProvider endpoint={endpoint} autoconnect>
            <WalletProvider wallets={wallets} >
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
        </div>
  )
}

export default WalletConnectionProvider