'use client'
import React from "react"
import { useState } from "react"
import CountUp from "react-countup"
import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import styles from '@/styles/page.module.scss'
const URL= 'https://www.yangdong.co:8443/yangdong-new/'
// product start
function ProductShow(){
  const indexArr = [
    {label:'铝板',index:0,icon:URL + 'index/p-icon1.png'},
    {label:'铝棒',index:1,icon:URL + 'index/p-icon2.png'},
    {label:'铝管',index:2,icon:URL + 'index/p-icon3.png'},
    {label:'铝卷',index:3,icon:URL + 'index/p-icon4.png'},
    {label:'铝型材',index:4,icon:URL + 'index/p-icon5.png'},
    {label:'铝锻件',index:5,icon:URL + 'index/p-icon6.png'}
  ]
  const [index,setIndex] = useState(0)
  function selectIndex(i){
    setIndex(i)
  }
  const data= [
    {
      label:'铝板系列',text:'铝板系列涵盖亮面铝板、贴膜铝板、预拉伸铝板、超宽铝板、特厚铝板、超平铝板、精铸铝板、锻造铝板、花纹铝板等',
      series:[
        {serie:'七系',label:'铝板',child:['7050','7075','7A04','7A09']},
        {serie:'六系',label:'铝板',child:['6061','6063','6082']},
        {serie:'五系',label:'铝板',child:['5052','5083','5754','5A02','5A05','5A06']},
        {serie:'三系',label:'铝板',child:['3003','3A21']},
        {serie:'二系',label:'铝板',child:['2017','2024','2A12']},
        {serie:'一系',label:'铝板',child:['1050','1060']},
      ]
    },
    {label:'铝棒系列',text:'铝棒系列涵盖纯铝棒、合金铝棒、大直径铝棒、挤压铝棒、光亮铝棒、精拉铝棒、超硬铝棒、铸造铝棒、研磨铝棒等',
      series:[
        {serie:'七系',label:'铝棒',child:['7050','7075','7A04','7A09']},
        {serie:'六系',label:'铝棒',child:['6061','6063','6082']},
        {serie:'五系',label:'铝棒',child:['5052','5083','5754','5A02','5A05','5A06']},
        {serie:'三系',label:'铝棒',child:['3003','3A21']},
        {serie:'二系',label:'铝棒',child:['2017','2024','2A12']},
        {serie:'一系',label:'铝棒',child:['1050','1060']},
      ]
    },
    {label:'铝卷系列',text:'铝卷系列涵盖纯铝卷、铝带、铝箔、合金铝卷、防锈铝卷、保温铝卷、冲压铝卷、花纹铝卷、超宽铝卷、超宽铝卷等',
      series:[
        {serie:'七系',label:'铝卷',child:['7075']},
        {serie:'六系',label:'铝卷',child:['6061','6063']},
        {serie:'五系',label:'铝卷',child:['5052','5083','5754','5A02']},
        {serie:'三系',label:'铝卷',child:['3003','3A21']},
        {serie:'二系',label:'铝卷',child:['2024','2A12']},
        {serie:'一系',label:'铝卷',child:['1050','1060']},
      ]
    },
    {label:'铝管系列',text:'铝管系列涵盖挤压铝管、无缝铝管、锻造铝管、拉拔铝管、薄壁铝管、厚壁铝管、大口径铝管等',
      series:[
        {serie:'七系',label:'铝管',child:['7050','7075','7A04','7A09']},
        {serie:'六系',label:'铝管',child:['6061','6063','6082']},
        {serie:'五系',label:'铝管',child:['5052','5083','5754','5A02','5A05','5A06']},
        {serie:'三系',label:'铝管',child:['3003','3A21']},
        {serie:'二系',label:'铝管',child:['2017','2024','2A12']},
        {serie:'一系',label:'铝管',child:['1050','1060']},
      ]
    },
    {label:'铝型材系列',text:'铝型材系列涵盖铝方棒、铝扁棒、铝排、铝方管、矩形管、六角铝棒、等边角铝、不等边角铝、槽铝等',
      series:[
        {serie:'七系',label:'铝型材',child:['7050','7075','7A04','7A09']},
        {serie:'六系',label:'铝型材',child:['6061','6063','6082']},
        {serie:'五系',label:'铝型材',child:['5052','5083','5754','5A02','5A05','5A06']},
        {serie:'三系',label:'铝型材',child:['3003','3A21']},
        {serie:'二系',label:'铝型材',child:['2017','2024','2A12']},
        {serie:'一系',label:'铝型材',child:['1050','1060']},
      ]
    },
    {label:'铝锻件系列',text:'铝锻件系列涵盖锻板、锻棒、锻管、锻环、锻饼、锻筒、锻锥形等',
      series:[
        {serie:'七系',label:'铝锻件',child:['7050','7075','7A04','7A09']},
        {serie:'六系',label:'铝锻件',child:['6061','6063','6082']},
        {serie:'五系',label:'铝锻件',child:['5052','5083','5754','5A02','5A05','5A06']},
        {serie:'三系',label:'铝锻件',child:['3003','3A21']},
        {serie:'二系',label:'铝锻件',child:['2017','2024','2A12']},
        {serie:'一系',label:'铝锻件',child:['1050','1060']},
      ]
    }
  ]
  return <div className={styles.productC} style={{backgroundImage:`url(${URL}index/p-bg-${(index+1)}.png`}}>
    <div className={styles.productCH}>
      <h4>
        <span>江苏扬东铝业</span>
        <img src={URL + 'index/p-icon.png'}/>
        <span>实力工厂</span>
      </h4>
      <p className={styles.text1}>我们不只是一家<span>铝材工厂</span>，更是你坚如磐石的<span>供应商</span></p>
      <p className={styles.text2}>以不懈的努力为您的成功助力!</p>
    </div>
    <div className={styles.productCS}>
      <div className={[styles.productCSM,'main'].join(' ')}>
        {indexArr.map((item,i)=>{
          return <div key={i} onClick={()=>selectIndex(i)} className={styles.productCSMI}>
            <div className={styles.productIconW}
              style={{
                height: index == i ? '': '20px',
                width: index == i ? '': '20px',
                marginTop: index == i ? '-27px': '-12px',
              }}
            >
              {index == i && <img src={item.icon}/>}
            </div>
            <span>{item.label}</span>
          </div>
        })}
      </div>
    </div>
    <div className={[styles.productCM,'main'].join(' ')}>
      <img src={URL + 'index/p-img-'+ (index+1)+'.png'}/>
      <div className={styles.productCMT}>
        <h5>{data[index].label}</h5>
        <p>{data[index].text}</p>
        <div className={styles.productCMTUL}>
          {data[index].series.map((item,i)=>{
            return <ul key={i}>
              {item.serie + item.label}
              {item.child.map((li,l)=>{
                return <li key={l}><a>{li + item.label}</a></li>
              })}
            </ul>
          })}
        </div>
      </div>
    </div>
  </div>
}
// product end

// case start
function Case(){
  const tabs = [
    {label:'航空航天',index:0},
    {label:'轨道交通',index:1},
    {label:'汽车智造',index:2},
    {label:'船舶运输',index:3},
    {label:'消费电子',index:4},
    {label:'医疗设备',index:5},
    {label:'化工容器',index:6},
    {label:'工业模具',index:7},
    {label:'机器制造',index:8},
    {label:'建筑工程',index:9}
  ]
  const [index,setIndex] = useState(0)
  function selectIndex(i){
    setIndex(i)
  }
  const data = [
    {img:URL + 'index/case0.png',text1:'航空航天用铝合金',text2:'具有航空领域用高端铝铁材料的提供能力，其中一些标准产品等新型发动机涡轮盘、压气盘、叶片用铝成功应用于轰炸机、强毒机等核心部件制作。'},
    {img:URL + 'index/case1.png',text1:'轨道交通用铝合金',text2:'供应的铁路用铝主要有铁路弹簧铝、扣件用铝、道岔用铝、钩尾框用铝、铁路轴承铝、欧标合金铝，美标合金铝等产品，全部通过国家铁道部认可并具备了批量供货能力，大量用于指导铁路货车、高速客车、动车组列车的关键部件，成为其铁路优秀供应商。'},
    {img:URL + 'index/case2.png',text1:'汽车智造用铝合金',text2:'更高效，更高的强重比，可满足复杂形状的要求。在当今燃料及环境问题日益严峻的时期，铝合金扮演着一个助推汽车轻量化及提升燃油能效的重要角色，从而帮助缓解能源及环境问题。节能环保已成为当今世界的主旋律，而高昂的能源费用和材料的循环利用已成为汽车制造商正面临的主要难题。当此时机，铝合金凭借其优越的比强度、优良的成型性和高效的循环利用率，逐步成为汽车制造商的宠儿，“铝代钢”已大势所趋。'},
    {img:URL + 'index/case3.png',text1:'船舶运输用铝合金',text2:'扬东铝业集团供应的海洋系泊链铝用于船舶和石油工业，强度高，韧性好，具备耐海水腐蚀、抗疲劳、耐磨损等特性。其中四级系泊链是目前海洋用的最高级别系链，需求量较大，成功通过国际著名船级社品质认证，填补了国内空白，实物质量达到国际水平，已经形成批量化供应铝产品能力，广泛用于勘探平台、浮时采油平台、海上储油转运站和辅助船队等海洋工程及专用船舶领域。'},
    {img:URL + 'index/case4.png',text1:'消费电子用铝合金',text2:'扬东铝业集团助力电子电器制造企业在世界范围内占据有利的竞争位置，实现让产品更轻、更薄、更耐用的愿望。铝合金拥有良好的可加工性和导电性，是绝佳的散热材料。能按照客户需求提供各类挤压型材，适用于大功率变电装置、稳压电源、通讯电源、净化电源、广播电视发射装置、逆变电源等各种大型电源产品，也用于自动控制仪表等电力电子产品领域。'},
    {img:URL + 'index/case5.png',text1:'医疗设备用铝合金',text2:'扬东铝业集团铝合金在医疗行业应用广泛，早期简单的器械类包括拐杖、轮椅、担架、助力器、油膏缸、消毒盒、病床等等。'},
    {img:URL + 'index/case6.png',text1:'化工容器用铝合金',text2:'扬东铝业集团5000系铝合金材料具有良好的抗腐蚀性和可焊接性能，用铝合金制造的体，内部不需要任何防护涂层就可以运输各种液体或者液化气，并且因为没有腐蚀，从而保证油品更清洁，罐体强制报废后回收价值也更高同时，因为铝合金具有良好的导电性能，很少集聚静电在罐体上，所以不会产生火花而导致爆炸，而且铝合金能很好的吸收罐体在碰撞时所产生的照间能力，不会造成罐体开裂而产生泄漏。'},
    {img:URL + 'index/case7.png',text1:'工业模具用铝合金',text2:'扬东铝业集团是国内机械加工铝供应及服务极高的市场声誉，工模具被誉为“现代工业之母”在现代工业被广泛应用。随着市场的发展及铝合金技术的提高，目前欧美市场逐渐呈现铝模替代钢模的现象。制造成本低。铝模具在制造、装置、注塑车间装置调整时间、运输等比钢模具更具优越性成本更低，重量轻。'},
    {img:URL + 'index/case8.png',text1:'机器制造用铝合金',text2:'扬东铝业集团是国内机械加工铝供应及服务极高的市场声誉，铝与钢的密度比为1:3，铝模取代钢模在质量方面可节约1/2。采用钢-铝复合模。铝合金模的成本约比钢模低15%以上。铝模制造时间比钢模的短得多，因此占用资金的时间少，优势明显。'},
    {img:URL + 'index/case9.png',text1:'建筑工程用铝合金',text2:'扬东铝业集团是国内建筑建材供应及服务极高的市场声誉，随着铝合金隐框幕墙的发展，铝板幕墙也异军突起，配合铝合金玻璃幕墙在幕墙工程中进行使用墙作为一项高技术产品在建筑业发展突飞猛进。'}
  ]
  return (
    <div className={[styles.caseWrapM,'main'].join(' ')}>
      <nav>
        <ul>
          {tabs.map((item,i)=>{
            return <motion.li key={i} onClick={()=>selectIndex(i)}
              inherit={false}
              animate={{backgroundColor: i == index ? '#eee' :'#eee0'}}
              className={[i==index?styles.liActive:'']}            
              >
              {item.label}
              {/* {i === index ? (
                  <motion.div
                    className={styles.underline}
                    layoutId="underline"
                    id="underline"
                  />
              ) : null} */}
            </motion.li>
          })}
        </ul>
      </nav>
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }} className={styles.caseMain}
          >
            <div>
              <h5>{data[index].text1}</h5>
              <p>{data[index].text2}</p>
              <button>了解详情</button>
            </div>
            <img src={data[index].img}/>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default function Home() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  }
  const imgStyle ={
    positon:"absulute"
  }
  const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            // bounce: 1,
            // duration: 1,
        },
    },
  }
  const introData =[
    {num:15,text:'行业经验',b:'年'},
    {num:20000,text:'占地面积',b:'m²'},
    {num:6000,text:'库存量',b:'吨'},
    {num:10000,text:'服务客户',b:'家'},
    {num:1,text:'现货库存',b:'天'}
  ]
  const reasonData = [
    {index:0,label:'品牌实力',text1:'专注开放  创新合作',text2:'在新的发展时期,公司以“质量求生存，开拓求发展”的经营理念引领下，坚持走“差异化、精品化、高端化”的发展之路,不断优化品种结构，提升品质内涵,提升产品市场竞争力，致力于成为全球高精工业铝材行业领导者！'},
    {index:1,label:'库存查询',text1:'超大库存  质量保障',text2:'从下单到出库发货，都经过三道质检，保障成品合格率在100%以上，我们拥有大量库存，可以供亲们提供足够的货源，让亲们不在担心断货、缺货的危机、让亲们放心的加工生产。'},
    {index:2,label:'精湛技术',text1:'现货供应  发货及时',text2:'我们承诺客户下单后，现货产品当天发货，加工，切割，产品根据产品特性3-5天发货，定制特种产品，根据实际情况7-30天出厂并安排发货，解决客户急需要求。'},
    {index:3,label:'售后服务',text1:'品质服务  全程追踪',text2:'我们做到每个订单，都及时跟踪。保障客户能及时安全收货；并不断听取客户的意见与建议，反思我们自身存在的问题，让客户用的舒心放心。'}
  ]
  const [reasonIndex,setIndex] = useState(0);
  function changeReason(i){
    setIndex(i)
  }
  const newLabel =[
    {index:0,text:'公司动态'},
    {index:1,text:'行业新闻'},
    {index:2,text:'铝材知识'},
    {index:3,text:'加工视频'}
  ]
  const newData =[
    {
      new:[
        {index:0,lebel:'“精工品质，真诚合作”扬东集团客户好评不断诚信可靠',date:'null'},
        {index:1,lebel:'扬东集团被中国兵器工业集团纳入优选供应商名录',date:'2023-07-15'},
        {index:2,lebel:'【喜讯】扬东集团荣获3A级企业信用等级证书',date:'2015-02-14'},
        {index:3,lebel:'西南铝为天舟三号提供多个铝合金材料',date:'2023-07-15'},
        {index:4,lebel:'西南铝为天舟三号提供多个铝合金材料',date:'2023-07-15'}
      ]
    }
  ]
  const evaData = ['1V1响应接待','极速发货','贴心售后','实力工厂']
  const [newIndex,setNewIndex] = useState(0)
  return (
    <div className={styles.indexWrap}>
        <video width="100%" height="800" controls preload="none" autoPlay muted playsInline loop>
          <source src="https://www.yangdong.co:8443/video/%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91.mp4" type="video/mp4" />
        </video>
        <section className={styles.aboutM}>
          <motion.div className={[styles.aboutMC,'main'].join(' ')}
            initial="offscreen"
            whileInView="onscreen"
            // viewport={{ amount: 1 }}
            variants={cardVariants}
          >
            <p><i>ABOUT</i>扬东铝业</p>
            <motion.b>
            致力于成为华东地区集铝批发零售、原材料加工、国际贸易和技术咨询为一体的大型多元化企业，主要从事高精铝材的加工和销售。
            </motion.b>
            <motion.p>
              <a>查看更多</a>
            </motion.p>
          </motion.div>
          <div className={styles.aboutIntro}>
            <div className={[styles.aboutIntroC,'main'].join(' ')}>
              {introData.map((item,i)=>{
                return <div key={i}>
                  <pre><CountUp start={0} end={item.num} duration={3} separator=''/><i>{item.b}</i></pre>
                  <p>{item.text}</p>
                </div>
              })}
            </div>
          </div>
        </section>
        <section className={styles.productWrap}>
          <ProductShow/>
        </section>
        <section className={styles.caseWrap}>
          <h4 className="main">完整的铝材行业专属应用解决方案</h4>
          <p className="main">扬东铝业深耕铝材20年，在各行业均有案例，为客户量身定制解决方案</p>
          <Case/>
        </section>
        <section className={styles.reasonWrap}>
          <h4>选择扬东铝业四大理由</h4>
          <p style={{margin:'10px 0'}}>20+年行业生产经验 实力雄厚 工艺精湛 高效产能 贴心售后 品牌优势</p>
          <div className={[styles.reasonS,'main'].join(' ')}>
            {reasonData.map((item,i)=>{
              return <div key={i} className={styles.reasonSI} style={{borderBottom:i==reasonIndex?'3px solid #e30212':''}} onClick={()=>changeReason(i)}>
                <div className={styles.reasonImgW}><img src={URL + 'index/reason-icon-'+ i +'.png'}/></div>
                <span>{item.label}</span>
              </div>
            })}
          </div>
          <div className={styles.reasonM}  style={{backgroundImage:`url(https://www.yangdong.co:8443/yangdong-new/index/reason-bg-${reasonIndex}.png)`}}>
            <div className={[styles.reasonMC,'main'].join(' ')}> 
              <div className={styles.reasonMCB}>
                <h5>{reasonData[reasonIndex].text1}</h5>
                <p>{reasonData[reasonIndex].text2}</p>
                <a>查看更多》》</a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.newWrap}>
          <div className={[styles.newWrapM,'main'].join(' ')}>
            <div className={styles.newWrapMH}>
              <div className={styles.newWrapMHL}>
                <h4>新闻咨询</h4>
                <p>了解扬东铝业最新资讯，定位行业最新动态！</p>
              </div>
              <div className={styles.newWrapMHR}>
                {newLabel.map((item,i)=>{
                  return <a key={i}>
                    <img src={URL + 'index/new-icon-'+ i +'.png'}/>
                    {item.text}
                  </a>
                })}
              </div>
            </div>
            <div className={styles.newWrapMC}>
                <div className={styles.newWrapMCL}>
                  <div className={styles.newWrapMCLT}>
                      <img src={URL + 'index/new-img-1.png'}/>
                      <p>“精工品质，真诚合作”扬东集团客户好评不断诚信可靠</p>
                  </div>
                  <div className={styles.newWrapMCLB}>
                    <div>
                      <p>扬东集团被中国兵器工业集团纳入优选供应商名录</p>
                      <p><i>2023-07-15</i><i>查看更多</i></p>
                    </div>
                    <div>
                      <p>【喜讯】扬东集团荣获3A级企业信用等级证书</p>
                      <p><i>2015-02-14</i><i>查看更多</i></p>
                    </div>
                  </div>
                </div>
                <div className={styles.newWrapMCR}>
                  <div>
                    <img src={URL + 'index/new-img-2.png'}/>
                    <p>西南铝为天舟三号提供多个铝合金材料</p>
                    <p><i>2023-07-15</i></p>
                  </div>
                  <div>
                    <img src={URL + 'index/new-img-2.png'}/>
                    <p>西南铝为天舟三号提供多个铝合金材料</p>
                    <p><i>2023-07-15</i></p>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className={styles.partnerWrap}>
          <div className={[styles.partnerM,'main'].join(' ')}>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((item,i)=>{
              return <img key={i} src={URL + 'index/p-'+(i+1)+'.png'}/>
            })}
          </div>
        </section>
        <section className={styles.evaWrap}>
          <div className={[styles.evaM,'main'].join(' ')}>
            <div className={styles.evaMT}>
              <div className={styles.evaMTL}>
                <img src={URL + 'index/eva-l.png'}/>
                <div>
                  <p>他们说 ——</p>
                  <p>THEY SAID</p>
                  <p>海量口碑真实反馈来袭</p>
                </div>
              </div>
              <div className={styles.evaMTR}>
                {evaData.map((item,i)=>{
                  return <div key={i}>
                    <img src={URL +'index/eva-r-'+ (i+1) +".png"}/>
                    <p>{item}</p>
                  </div>
                })}
              </div>
            </div>
            <div className={styles.evaImgW}>
              {[1,2,3,4,5,6,7,8,9,10].map((item)=>{
                return <img key={item} src={URL + 'index/eva-'+item+'.png'}/>
              })}
            </div>
          </div>
        </section>
        <section className={styles.indexBW}>
          <div className="main">
            <p>您离解决离您的铝材方案只有一个【联系我们】的距离</p>
            <a href=""></a>
          </div>
        </section>
        {/* <motion.div 
          style={box}
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
        /> */}
    </div>
  );
}
