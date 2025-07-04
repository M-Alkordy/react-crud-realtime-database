import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ListAllThings from './pages/ListAllThings.jsx'
import AddThing from './pages/AddThing.jsx'
import EditThing from './pages/EditThing.jsx'
import Thing from './pages/Thing.jsx'
import Root from './pages/Root.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <ListAllThings />
      },
      {
        path: 'add-thing',
        element: <AddThing />
      },
      {
        path: 'edit-thing/:id',
        element: <EditThing />
      },
      {
        path: 'thing/:id',
        element: <Thing />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
