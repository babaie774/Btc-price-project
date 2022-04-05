import React, { useLayoutEffect, useState } from 'react'
import PriceCard from '../priceCard'
import axios from 'axios'
import Style from './styles/priceContainer.module.scss'


const PriceContainer = () => {
    // const [Price, SetPrice] = useState(0) as [number, (newPrice: number) => void]
    const [Price, SetPrice] = useState(0) as any


    useLayoutEffect(() => {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((response: any) => {
                SetPrice(response.data.bpi.USD.rate_float);
            })
    })


    return (
        <div className={Style.priceContainer}>
            <PriceCard price={Price} />
        </div>
    )
}

export default PriceContainer