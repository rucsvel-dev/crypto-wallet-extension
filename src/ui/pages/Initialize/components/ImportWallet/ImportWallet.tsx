import React from 'react'

import { useNavigate } from 'react-router-dom'

const ImportWallet = () => {
  const navigate = useNavigate()

  return (
    <div onClick={() => navigate('/')}>
      <h1>Import Wallet</h1>
    </div>
  )
}

export default ImportWallet
