import React from 'react'
import './about.css'
import burger from './burger.svg'
import Button from '../Button/Button'


export default function About() {
  return (
	 <div className='section'>
		<img src={burger} alt="burger" />
		<div className='right'>
			<h2>Burger King</h2>
			<p className='text'>Together with McDonald’s, Burger King has grown <br /> to become synonymous with burgers in the US.</p>
			<p className='orange'>6$ <span>8$</span></p>
			<Button children='ORDER NOW'/>
		</div>
	 </div>
  )
}
