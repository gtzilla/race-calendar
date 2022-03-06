
const Nav = () => {
  return (
    <nav className="nav p-3 border-bottom">
      <a href="/" passHref>
        <h2 className="pointer">Race Calendar</h2>
      </a>
      <a href="/about" passHref>
        <p className="ms-5 pointer lead my-auto">About</p>
      </a>
    </nav>
  )
}
export default Nav