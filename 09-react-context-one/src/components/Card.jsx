import React from 'react'
import MyContext from '../context/MyContext'
function Card() {
    return (
        <MyContext.Consumer>
            {(item) => <div>Card {item.message}</div>}
        </MyContext.Consumer>
    )
}

export default Card
