import style from "./login.module.css"

const LogInPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        let username = event.target[0].value
        let password = event.target[1].value
        
    }
    return (
        <div className={style.signupmain}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="loginuname">Username or Email:</label><br />
                <input type="text" id="loginuname" name="loginuname" className={style.inputCredential} /><br />

                <label htmlFor="loginpassword">Password:</label><br />
                <input className={style.inputCredential} type="text" id="loginpassword" name="loginpassword" /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default LogInPage