import MyContext from './MyContext'

const MyProvider = ({ children }) => {
    const value = { message: 'Hello from Context API!' }

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>
}

export default MyProvider
