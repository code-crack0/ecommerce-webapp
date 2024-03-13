import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInPage from './components/SignIn'
import SignUpPage from './components/SignUp'
import HomePage from './pages/HomePage'
import ItemPage from './pages/ItemPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/item' element={<ItemPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  )
}
