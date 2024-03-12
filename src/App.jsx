import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInPage from './components/SignIn'
import SignUpPage from './components/SignUp'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}
