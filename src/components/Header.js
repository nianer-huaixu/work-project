"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter,usePathname } from 'next/navigation'

// 导航栏一级菜单 start
function MuneItem(props){
  let { path } = props
  const headData = [
    {label:'首页',route:'/'},
    {label:'产品中心',route:'/product',isChildren:true},
    {label:'加工中心',route:'/process',isProcess:true},
    {label:'应用领域',route:'/apply',isApp:true},
    {label:'行业方案',route:'/case'},
    {label:'走进扬东',route:'/about'},
    {label:'新闻资讯',route:'/new',isList:true},
    {label:'联系我们',route:'/contact'}
  ]
  const muneItem = headData.map(item =>{
    return <li key={item.label} className={[('/'+path.split('/')[1]) == item.route?'menu-ul-li selectAcitve':'menu-ul-li'].join('')}>
      {
        item.label == "产品中心" ? <Link 
        href={{pathname:item.route,query:{category:0,type:0,serise:3}}}
        onClick={()=>{
          store.dispatch(changeCategory(0));
          store.dispatch(changeType(0));
          store.dispatch(changeSerise(3))
        }}
        className='menu-route-a'>{item.label}</Link>
        :
        <Link href={{pathname:item.route}} className='menu-route-a'>{item.label}</Link>
      }
      {/* {item.isChildren && (<div className='header-product'><ProductMain /></div>)}
      {item.isList && (<div className='header-newList'><NewSList /></div>)}
      {item.isApp && (<div className='header-appList'><Applist /></div>)}
      {item.isProcess && (<div className='header-process'><Process /></div>)} */}
    </li>
  });
  return (<ul className='menu-ul'>{muneItem}</ul>)
}

export default function Header(){
  // console.log(router);
  const pathname = usePathname();
  console.log(pathname,'searchParams');

  // let curPath = router.asPath
  useEffect(()=>{
    console.log(pathname,'searchParams');
    
  },[])
  return <header>
    <div className="header-warp main">
        <div className='logo-wrap'>
          <Link href='/'><img src='https://www.yangdong.co:8443/yangdong-new/header/logo-white.png' alt='logo'/></Link>
        </div>
        <MuneItem path={pathname}/>
      </div>
  </header>
}