import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import Payments from './Payments'

const styles = {
    loginPage: `flex justify-center	
    flex-col items-center`,
    text: 'text-4xl text-black mb-10',
    selectWallet:  'h-12 w-28 bg-indigo-500 rounded-lg'
}

export const Login = () => {
  const wallet = useWallet()
  if(wallet.connected)
    return <Payments />
  return (
    <div className={styles.loginPage} >
                <WalletMultiButton className={styles.selectWallet} />

        <p className={styles.text}> Login to access this app</p>
    </div>
  )
}

export default Login