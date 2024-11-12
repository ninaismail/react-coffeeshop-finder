// src/main.ts
import { ViteReactSSG } from 'vite-react-ssg'
import {routes} from './App'
import './index.css'
export const createRoot = ViteReactSSG(
  // react-router-dom data routes
  { routes },
  // function to have custom setups
  ({ router, routes, isClient, initialState }) => {

  },
)