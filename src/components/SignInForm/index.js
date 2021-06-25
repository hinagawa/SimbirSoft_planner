import { useState} from "react"
import authService from "../../services/authService"

export const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    authService.login(email, password);
  }

  return (
    <div className="authForm">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="email"
          placeholder="почта"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          id="password"
          placeholder="пароль"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
};

export default SignInForm;
