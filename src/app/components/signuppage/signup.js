import style from "./signup.module.css"

const SignUpPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        let username = event.target[0].value
        let email = event.target[1].value
        let password = event.target[2].value
        let cpassword = event.target[3].value
        
    }
    return (
        <div className={style.signupmain}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Username:</label><br />
                <input type="text" id="name" name="name" className={style.inputCredential} /><br />

                <label htmlFor="email">Email:</label><br />
                <input className={style.inputCredential} type="text" id="email" name="email" /><br />

                <label htmlFor="password">Password:</label><br />
                <input className={style.inputCredential} type="text" id="password" name="password" /><br />

                <label htmlFor="cpassword">Confirm Password:</label><br />
                <input className={style.inputCredential} type="text" id="cpassword" name="cpassword" /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default SignUpPage