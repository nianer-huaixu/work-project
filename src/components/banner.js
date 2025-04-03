"use client"
import React from "react"
import { useState,useEffect } from "react"

export default function Banner(props){
  // console.log(window,'window');
  
  const [windowSize,setWindowSize]  = useState(getWindowSize())
  function getWindowSize(){
    const {innerWidth} = window
    return {innerWidth}
  }
  const remoteURL = 'https://www.yangdong.co:8443/yangdong-new/'
  useEffect(()=>{
    // 处理屏幕宽度变化
    function handleWindowResize(){
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize',handleWindowResize)
    return ()=>{
      window.removeEventListener('resize',handleWindowResize)
    }
  })
  const {suf} = props
  return <div className="bannerWrap">
    {windowSize.innerWidth > 680 && <img src={remoteURL + 'banner/pc/' + suf+ '.png'}/>}
    {windowSize.innerWidth < 680 && <img src={remoteURL + 'banner/m/' + suf + '.png'}/>}
  </div>
}