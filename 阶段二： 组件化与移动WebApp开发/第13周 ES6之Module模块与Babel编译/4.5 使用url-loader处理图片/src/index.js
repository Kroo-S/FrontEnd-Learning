import './index.css';

//js中引入图片
import img from './img/logo.png';

console.log(img);

const imgEl = document.createElement('img');
imgEl.src = img;    //base 64
document.body.appendChild(img);