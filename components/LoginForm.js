import styles from '../styles/Home.module.scss'

export default function LoginForm({ onLogin, bg }) {
    async function handleSubmit(event) {
        event.preventDefault();
        bg();
        onLogin(event.target.username.value, event.target.password.value);

    }

  
    return (
        <div className={styles.landing}>
            <img alt="Do or Doom logo" src={"https://github.com/TheG0ATS/Project-Prep/raw/main/docs/cutedoom.png"} />
            <div>
                <form onSubmit={handleSubmit} >
                    <fieldset autoComplete='off'>
                        <label htmlFor="username">👤 Username</label>
                            <input name="username" />
                        <label  htmlFor="password">🔒 Password</label>
                            <input  type="password" name="password" />
                        <button>Log In</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
  }