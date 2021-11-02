import React, { useState, useEffect } from 'react'

const App: React.FC = () => {

  const [Price, SetPrice] = useState(0) as [number, (newPrice: number) => void]

  useEffect(() => {
    //with fetch
    // const fetchPrice = async () => {
    //   const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   const data = await response.json()
    //   SetPrice(data.bpi.USD.rate_float)
    // }
    // fetchPrice()

    //Api
    const axios = require('axios');

    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response: any) => {
        SetPrice(response.data.bpi.USD.rate_float);
      })
  })

  function Reload() {
    window.location.reload();
  }

  console.log(Price)

  return (
    <div className="price">
      <h1>Bitcoin Price</h1>
      <h1>{Price}</h1>
      <button className="price__btn" onClick={() => {
        Reload()
      }}>Refresh</button>
    </div >
  )
}


export default App
