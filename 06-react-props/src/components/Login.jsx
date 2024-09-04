function Login({ password }) {
    if (password === 'secure-password') {
        return <h1>SignIn Successfully</h1>
    } else {
        return <h1>Please check password</h1>
    }
}

export default Login
