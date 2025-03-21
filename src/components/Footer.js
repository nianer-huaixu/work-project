import Link from "next/link"
export default function Footer(){
  const imgURL = 'https://www.yangdong.co:8443/yangdong-new/footer/'
  const data =[
    {title:'走进扬东',link:'/about',list:[
      {text:'企业简介',link:'/about#introduce'},
      {text:'发展历程',link:'/about#history'},
      {text:'企业文化',link:'/about#cuiture'},
      {text:'荣誉资质',link:'/about#honor'},
      {text:'组织架构',link:'/about#fremawork'},
      {text:'社会责任',link:'/about#duty'}
    ]},
    {title:'产品中心',link:'/product',list:[
      {text:'铝板',link:'/product/0/0'},
      {text:'铝棒',link:'/product/0/1'},
      {text:'铝卷',link:'/product/0/2'},
      {text:'铝管',link:'/product/0/3'},
      {text:'铝型材',link:'/product/0/4'},
      {text:'铝锻件',link:'/product/0/5'},
      {text:'进口铝板',link:'/product/0/6'},
      {text:'进口铝棒',link:'/product/0/7'}
    ]},
    {title:'应用领域',link:'/applicationfields',list:[
      {text:'航空航天',link:'/applicationfields#application01'},
      {text:'高铁轨交',link:'/applicationfields#application02'},
      {text:'汽车制造',link:'/applicationfields#application03'},
      {text:'船舶运输',link:'/applicationfields#application04'},
      {text:'消费电子',link:'/applicationfields#application05'},
      {text:'医疗设备',link:'/applicationfields#application06'},
      {text:'化工容器',link:'/applicationfields#application07'},
      {text:'工业模具',link:'/applicationfields#application08'},
      {text:'机械制造',link:'/applicationfields#application09'},
      {text:'建筑建材',link:'/applicationfields#application10'}
    ]},
    {title:'销售统计',link:'/statistics',list:[{text:'销售统计',link:'/statistics'}]},
    {title:'新闻资讯',link:'/news',list:[
      {text:'公司动态',link:'/news'},
      {text:'行业新闻',link:'/news'},
      {text:'铝材知识',link:'/news'},
      {text:'加工视频',link:'/news'}
    ]}
  ]
  const Item = data.map((group,I)=>{
    return <ul key={I} className='footer-normal-ul'>
      <h5><Link href={group.link}>{group.title}</Link></h5>
      {group.list.map((item,i)=>{
        return <li key={i}>
          <Link href={item.link}>{item.text}</Link>
        </li>
      })}
    </ul>
  })
  return <footer>
    <div className="footer-wrap main">
      {Item}
      <ul className='contact'>
        <h5><Link href={'/contactus'}>联系我们</Link></h5>
        <div className='erweima-box'>
          <div>
            <img src={imgURL + 'erweima01.png'}/>
            <p style={{marginTop:'10px'}}>联系我们</p>
          </div>
        </div>
        <li><img src={imgURL + 'phone.svg'}/>电话: <b style={{fontSize:'40px'}}>0512-62388268</b></li>
        <li><img src={imgURL + 'location.svg'}/>地址: 江苏省苏州市工业园区唯亭镇双灯路2号</li>
        <li><img src={imgURL + 'email.svg'}/>邮箱: 2521813109@qq.com</li>
      </ul>
    </div>
    <p className="copyright">江苏扬东铝业集团有限公司 版权所有
      <img src={imgURL + 'gonganbu_logo.png'}/>
      <a href='https://beian.mps.gov.cn/#/query/webSearch' target='_blank'>苏公网安备32059002005043号</a> 
      &nbsp;&nbsp;&nbsp;
      <a href='https://beian.miit.gov.cn' target='_blank'>苏ICP备19073843号-1</a></p>
  </footer>
}