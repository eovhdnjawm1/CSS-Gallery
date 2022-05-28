import '../css/Main.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link} from 'react-router-dom'
import Component3D from './Component3D.js'



	const url = 'https://eovhdnjawm1.github.io/db'
	const json3D = '/3D_data.json'
	const jsonButton = '/button_data.json'
	const jsonEffect = '/effect_data.json'
	const jsonNav = '/navbar_data.json'

function MainContainer() {

	let [grapics, setGrapic] = useState([]);

	let [clicks, setClicks] = useState([]);
	let [effects, setEffects] = useState([]);
	let [navBars, setNavBars] = useState([]);

	useEffect(() => {
		axios.get(url + json3D).then((res) => {
		let copy = [...res.data]
		setGrapic(copy)

		axios.get(url + jsonButton).then((res) => {
			let copy = [...res.data]
			setClicks(copy)
		})

		axios.get(url + jsonEffect).then((res) => {
			let copy = [...res.data]
			setEffects(copy)
		})
		axios.get(url + jsonNav).then((res) => {
			let copy = [...res.data]
			setNavBars(copy)
		})
	})
	},[])

	return (
		<div className='mainContainer'>
			<h1 className='mainTitle'>CSS Gallery</h1>
			<h1 style={{color: "#fff"}}>Profile</h1>
			<Routes>
				<Route path="/" element={<div>메인페이지</div>}/> 
				<Route path="/3DCss" element={<div>3D CSS 페이지</div>}/> 
				<Route path="/NavCss" element={<div>NavBar CSS 페이지</div>}/> 
				<Route path="/ClickCss" element={<div>Click CSS 페이지</div>}/> 
				<Route path="/EffectCss" element={<div>Effect CSS 페이지</div>}/> 
			</Routes>
			<div className='cssContainer'>
			{
				grapics.map(function(val, i) {
					return (
						<div  key={i}>
							<Grapic3DCss grapics={grapics} i={i}></Grapic3DCss>
						</div>
					)
				})
			}
			{
				clicks.map(function(val, i) {
					return (
						<div  key={i}>
							<ButtonCss clicks={clicks} i={i}></ButtonCss>
						</div>
					)
				})
			}
			{
				effects.map(function(val, i) {
					return (
						<div  key={i}>
							<EffectCss effects={effects} i={i}></EffectCss>
						</div>
					)
				})
			}
			{
				navBars.map(function(val, i) {
					return (
						<div  key={i}>
							<NavBarCss navBars={navBars} i={i}></NavBarCss>
						</div>
					)
				})
			}
			</div>
		</div>
	)
}

function Grapic3DCss(props) {
	return (
		<div className='cssContainerSub'>
			<Link to="/3DCss" style={{textDecoration: 'none', color: '#fff'}}>
				<h4>{props.grapics[props.i].title}</h4>
				<img src={`${props.grapics[props.i].image}`} alt="#" width="80%" />
				<p>제작일자 : {props.grapics[props.i].record} </p>
			</Link>
		</div>
	) 
} 


function ButtonCss(props) {
	
	return(

		<div className='cssContainerSub'>
			<Link to="/ClickCss" style={{textDecoration: 'none', color: '#fff'}}>

			<h4>{props.clicks[props.i].title}</h4>
			<img src={`${props.clicks[props.i].image}`} alt="#" width="80%" />
			<p>제작일자 : {props.clicks[props.i].record} </p>
			</Link>
			
		</div>
	)
}

function EffectCss(props) {
	
	return(

		<div className='cssContainerSub'>
			<Link to="/EffectCss" style={{textDecoration: 'none', color: '#fff'}}>

			<h4>{props.effects[props.i].title}</h4>
			<img src={`${props.effects[props.i].image}`} alt="#" width="80%" />
			<p>제작일자 : {props.effects[props.i].record} </p>
			</Link>
		</div>
	)
}

function NavBarCss(props) {
	
	return(

		<div className='cssContainerSub'>
			<Link to="/NavCss" style={{textDecoration: 'none', color: '#fff'}}>

			<h4>{props.navBars[props.i].title}</h4>
			<img src={`${props.navBars[props.i].image}`} alt="#" width="80%" />
			<p>제작일자 : {props.navBars[props.i].record} </p>
			</Link>
		</div>
	)
}

export default MainContainer;