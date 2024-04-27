
import styles from "./login.module.scss"
import { useNavigate } from 'react-router-dom';
import  { useEffect, useState } from 'react';

const App = () => {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  useEffect(() => {
    console.log(window.scrollY);
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      console.log(currentScrollPos,prevScrollPos);
      if (prevScrollPos < currentScrollPos) {
        const container = document.getElementById('container');
        container.style.animation = `${styles.slideOut} 1s ease forwards`;
        setTimeout(() => {
          navigate('/model-leadship/dashboard');
        }, 1000);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate, prevScrollPos]);
  return <div className={styles.container} id="container">
    <h2 style={{textAlign:'center',paddingTop:'20px'}}>朝阳“同舟”基层共治平台数据总览</h2>
  <div className={styles.wapper}>
    <div >
      <div className={styles.rectangle} style={{position:'relative',left:'70px'}}>事件上报总量 <span>34534</span></div>
      <div className={styles.rectangle} style={{position:'relative',right:'70px'}}>群众满意度<span>92%</span></div>
    </div>
    <div>
      <div className={styles.rectangle}>平台总人数 <span>445</span></div>
      <div className={styles.rectangle}>志愿者人数<span>87</span></div>
    </div><div>
      <div className={styles.rectangle} style={{position:'relative',left:'70px'}}>积分投放总数<span>104521</span></div>
      <div className={styles.rectangle} style={{position:'relative',right:'70px'}}>积分回购总数<span>258</span></div>
    </div>
  </div>
</div>
};
export default App;
