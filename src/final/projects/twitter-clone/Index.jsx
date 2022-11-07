import MainPage from './components/MainPage'
import React,{useEffect} from 'react'
import './Index.css'
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <><MainPage/></>
  )
}

export default Index