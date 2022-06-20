export default function LoginForm() {
    return (
        <div className="loginForm">
            <h1 className="title">
                SIGN IN
            </h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
                <a href="">Forgot Password?</a>
                <a href="">Create a new account</a>
            </form>
        </div>
    );
}