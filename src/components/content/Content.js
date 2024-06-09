import React from 'react'
import './Content.css'
import Card from './Card'
import Jordan1 from '../../assets/img/jordan1.png';
import Jordan2 from '../../assets/img/jordan2.png';
import Jordan3 from '../../assets/img/jordan3.png';
import Jordan4 from '../../assets/img/jordan4.png';
import Jordan5 from '../../assets/img/jordan5.png';
import Jordan6 from '../../assets/img/jordan6.png';
function Content() {
  return (
    <div className='content1'>

        <h1>Os melhores em um só lugar</h1>
        <div className='labels'> 
            <p>A marca Jordan na JordanShoes é a escolha certa para</p>
            <p>os amantes de sneakers que buscam estilo e conforto.</p>
        </div>
        <div className='cards'>
            <Card img={Jordan1} disc="Air Jordan 1 Mid Dutch Green"
             model="Tênis Air Jordan" 
             price="R$ 1.199,99"/>

            <Card img={Jordan2}disc="Air Jordan 1 High Zoom CMFT Tropical Twist" 
            model="Tênis Air Jordan"
             price="R$ 1.049,00"/>
             
             
             <Card img={Jordan3} disc="Air Jordan 1 Mid Dutch Green" 
            model="Tênis Air Jordan"
             price="R$ 1.350,00"/>

            <Card img={Jordan4} disc="Air Jordan 1 Mid GS Light Smoke Grey" 
            model="Tênis Air Jordan"
             price="R$ 1.585,00"/>

            <Card img={Jordan5} disc="Air Jordan 1 Mid SE Bright Citrus" 
            model="Tênis Air Jordan"
             price="R$ 949,99"/>
              <Card img={Jordan6} disc="Air Jordan 1 Mid Grey Camo" 
            model="Tênis Air Jordan"
             price="R$ 999,99"/>
         
        </div>
    </div>
  )
}

export default Content
