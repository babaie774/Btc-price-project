import React from 'react'
import styles from './styles/priceCard.module.scss'

type propsType = {
    price: number
}

const PriceCard = ({ price }: propsType) => {
    const reload = () => {
        window.location.reload();
    }

    return (
        <>
            <div className={styles.price}>
                <img className={styles.priceImg} src="./bitcoin-btc-logo.png" alt="" />
                <h1>{price}</h1>
                <button onClick={() => reload()}>
                    refresh
                </button>
            </div >
        </>
    )
}

export default PriceCard