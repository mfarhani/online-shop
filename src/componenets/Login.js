function Login() {
    return (<div>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password"/>
        </div>
        <button>Login</button>
    </div>);
}

export default Login;