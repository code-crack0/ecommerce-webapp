
 import {BrowserRouter, Route, Routes} from 'react-router-dom';
 import SignInPage from './components/SignIn';
  import SignUpPage from './components/SignUp';
import HomePage from "./pages/HomePage";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setData } from './features/data/dataSlice';

export default function App() {
    const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);
    const fetchData = async () => {
        setLoading(true)
        const response =  await axios.get("https://fakestoreapi.com/products")
        dispatch(setData(response.data))
        
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }
    ,[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage loading={loading}/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route path="/sign-in" element={<SignInPage/>} />
        
      </Routes>
    </BrowserRouter>
  )
}
