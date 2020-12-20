export default () => {
  return (
    <div className="registration">
      <h1>Registration</h1>
      <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <input type="password" name="p" placeholder="Repeat password" required="required" />
        <button type="submit" className="btn btn-primary btn-block btn-large">Sign up</button>
      </form>
    </div>
  )
}