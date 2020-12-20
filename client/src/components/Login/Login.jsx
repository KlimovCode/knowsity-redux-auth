export default (props) => {
  const onEmailChange = (event) => {
    props.setEmailText(event.target.value)
  }
  const onPasswordChange = (event) => {
    props.setPasswordText(event.target.value)
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required"
          value={props.email}
          onChange={onEmailChange}
        />
        <input type="password" name="p" placeholder="Password" required="required"
          value={props.password}
          onChange={onPasswordChange} />
        <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
      </form>
    </div>
  )
}