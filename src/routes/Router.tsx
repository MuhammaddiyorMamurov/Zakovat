
import Categories from '@/pages/Categories'
import Document from '@/pages/Document'
import GameField from '@/pages/GameField'
import Home from '@/pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function Router() {

    const router = createBrowserRouter([
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/instruction",
            element: <Document/>
        },
        {
            path:"/categories",
            element: <Categories/>
        },
        {
            path:"/game-field/:id",
            element: <GameField/>
        },
    ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default Router
