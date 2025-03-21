import React from "react";
import Image from "next/image"
import * as motion from "motion/react-client"
import styles from '@/styles/page.module.scss'
export default function Home() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  }
  const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 100,
        transition: {
            type: "spring",
            // bounce: 1,
            // duration: 1,
        },
    },
}
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
              致力于成为华东地区
            </motion.b>
            <motion.a>
              查看更多
            </motion.a>
          </motion.div>
        </section>
        <motion.div 
          style={box}
          animate={{ rotate: 360 }}
          transition={{ duration: 3 }}
        />
    </div>
  );
}
