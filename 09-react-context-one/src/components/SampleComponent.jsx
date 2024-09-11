import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

function SampleComponent() {
    // access data through useContext hooks
    const value = useContext(MyContext)

    return <div>SampleComponent Value = {value.message}</div>
}

export default SampleComponent
