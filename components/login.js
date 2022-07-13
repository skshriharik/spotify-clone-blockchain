import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const styles = {
    loginPage: ` 
    flex-col items-center`,
    text: 'text-4xl text-black mb-10',
    selectWallet:  'h-12 w-28 bg-indigo-500 rounded-lg'
}

export const Login = () => {
  return (
    <div className={styles.loginPage} >
                <WalletMultiButton className={styles.selectWallet} />

        <p className={styles.text}> Login to access this app</p>
    </div>
  )
}

export default Login