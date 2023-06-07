import React from 'react'
import About from '../home/about/About'
import Branding from '../home/Branding'
import Home from '../home/homes/Home'
import Service from '../home/servicess/services/Service'
import { Wrapper } from '../home/Wrapper'
import Skill from '../home/Skill'
import WrapperOne from '../home/WrapperOne'
import Work from '../home/work/Work'
import Blog from '../home/blog/Blog'

const HomePages = () => {
  
  return (
    <>
      <Home/>
      <Branding/>
      <About/>
      <Service/>
      <Wrapper/>
      <Skill/>
      <WrapperOne/>
      <Work/>
      <Blog/>
    </>
  )
}

export default HomePages
