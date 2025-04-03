"use client" 
import { useState,useEffect } from "react"
import Banner from "@/components/banner"
import styles from "@/styles/product.module.scss"
// observer 是一个高阶组件函数，需要包裹一个组件，这样组件才会更新
import { observer } from 'mobx-react'
import useStore from '@/hook/useStore'
function Product(){
  const store = useStore()
  console.log(store.common.url);
  const labelData = [
    {index:0,lebel:'铝板'},
    {index:1,lebel:'铝棒'},
    {index:2,lebel:'铝管'},
    {index:3,lebel:'铝卷'},
    {index:4,lebel:'铝型材'},
    {index:5,lebel:'铝锻件'},
  ]
  const [data,setData] = useState()
  const fetchData = async()=>{
    const categoryIndex = store.common.cate
    const req = {categoryIndex}
    try{
      await fetch('/api/product',{
        method:'POST',
				headers:{'Content-Type':'application/json'},
				body:JSON.stringify(req)
      }).then((res)=>{
        if(res.ok){return res.json()}
        throw new Error('network response was not ok')
      }).then(res=>{
        console.log(res);
        setData(res)
      })
    }catch{}
  }
  useEffect(()=>{
    fetchData()
  },[store.common.cate])
  return (
    <div>
      <Banner suf='product'/>
      <div className={styles.productTag}>
        <div className="main">
          <div className={styles.tagWrap}>
            {labelData.map((item,i)=>{
              return <div key={i} className={store.common.cate == item.index ? styles.activeDiv : ''}
                onClick={()=>store.common.changeCate(item.index)}
              >
                <img src={store.common.url + 'product/icon-'+(store.common.cate == item.index? 'r' :'w')+'-'+i+'.png'}/>
                <p>{item.lebel}</p>
              </div>
            })}
          </div>
          <img src={store.common.url + 'product/label-r.png'}/>
        </div>
      </div>
    </div>
  )
}

// 用于解决动态路由刷新丢失bug
Product.getInitialProps = async () => {
  return {};
}
export default observer(Product)
