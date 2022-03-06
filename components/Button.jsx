const Button = ({ text }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={event => event.target.innerText = 'button is clicked, now!'}
    >
      {text}
    </button>
  )
}
export default Button