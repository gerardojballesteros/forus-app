
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../View/Dashboard'
import { Login } from '../View/Login'

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      
    </>
  )
}
