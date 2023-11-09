import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
       <header className="flex justify-around items-center bg-blue-500 text-white p-4 mb-4">
        <h1 className="font-bold text-lg">React Refresher App</h1>
        <nav className="flex justify-between gap-4 text-md">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="todo">To-Do Practice</NavLink>
        </nav>
      </header>
      <main className="w-8/12 mx-auto">
        <Outlet />
      </main>
    </>
  )
}