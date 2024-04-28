import { useEffect } from "react"
import styles from './3d.module.scss'
import initMap, {myMap, animateCamera, handleClickSky} from "./handle"
const MyMap = () => {


const handleClickView =  () => {
  var currentPitch = myMap.getPitch();
  var targetPitch = currentPitch === 0 ? 60 : 0;
  var currentRotation = myMap.getRotation();
  var targetRotation = currentPitch === 0 ? 340.0308641975305 : currentRotation;

  animateCamera(currentPitch, targetPitch, currentRotation, targetRotation, 1000);
}
  useEffect(() => { initMap() }, [])
  return  <>
    <div className={styles.btnContainer}>
  <button className={styles.btn1} onClick={handleClickSky}>点击切换天空</button>
  <button className={styles.btn2} onClick={handleClickView}>切换视角</button>
</div>
<div id="mapContainer" style={{width: '100vw', height: '100vh',position:'relative', bottom:'40px'}}></div></>
}

export default MyMap
