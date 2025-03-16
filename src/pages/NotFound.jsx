import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container align-items-center">
      <div className="row align-items-center text-center" style={{ minHeight: "300px" }}>
        <div className="col">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link to="/">Back To Home</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound