// eslint-disable-next-line react/prop-types
function Button({ count, onClick }) {
    return <button onClick={onClick}>Clicked {count} times</button>
}

export default Button
