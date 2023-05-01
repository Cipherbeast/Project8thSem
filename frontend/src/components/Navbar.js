import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Health Buddy</h1>
        </Link>
        <button >Graph</button>
      </div>
    </header>
  )
}

export default Navbar