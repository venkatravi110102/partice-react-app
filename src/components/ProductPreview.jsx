import { Link, Outlet } from "react-router-dom"
 export const ProductPreview = () => {
  return (
    <div>
        <h1> ProductPreview </h1>
        <Link className="text-blue-500 underline mx-2" to="/ProductPreview">Product Preview</Link>
        <Link className="text-blue-500 underline mx-2" to="/ProductList">Product List</Link>
        <Outlet />
    </div>
  )
}