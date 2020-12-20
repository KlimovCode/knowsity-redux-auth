export default (props) => {
  const onEmailChange = (event) => {
    props.setEmailText(event.target.value)
  }
  const onPasswordChange = (event) => {
    props.setPasswordText(event.target.value)
  }
  const onRepeatPasswordChange = (event) => {
    props.setRepeatPasswordText(event.target.value)
  }

  return (
    <div className="registration">
      <h1>Registration</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required"
          value={props.email}
          onChange={onEmailChange} />
        <input type="password" name="p" placeholder="Password" required="required"
          value={props.password}
          onChange={onPasswordChange} />
        <input type="password" name="p" placeholder="Repeat password" required="required"
          value={props.repeatPassword}
          onChange={onRepeatPasswordChange} />
        <button type="submit" className="btn btn-primary btn-block btn-large">Sign up</button>
      </form>
    </div>
  )
}