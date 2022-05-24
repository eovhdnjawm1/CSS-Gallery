import '../css/Main.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Component3D from './Component3D.js'



	const url = 'https://eovhdnjawm1.github.io/db'
	const json3D = '/3D_data.json'
	const jsonButton = '/button_data.json'
	const jsonEffect = '/effect_data.json'
	const jsonNav = '/navbar_data.json'

function MainContainer() {

	let [users, setUsers] = useState([]);
	let [title, setTitle] = useState();
	let [content, setcontent] = useState();
	let [cssImage, setCssImage] = useState();

	let [clicks, setClicks] = useState([]);
	let [effects, setEffects] = useState([]);
	let [navBars, setNavBars] = useState([]);

	useEffect(() => {
		axios.get(url + json3D).then((res) => {
		let copy = [...res.data]
		setUsers(copy)

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
			<div className='cssContainer'>
			{
				users.map(function(val, i) {
					return (
						<div  key={i}>
							<UserList users={users} i={i}></UserList>
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

function UserList(props) {
	return (
		<div className='cssContainerSub'>
			<img src={`${props.users[props.i].image}`} alt="#" width="80%" />
			<h4>{props.users[props.i].title}</h4>
			<p>{props.users[props.i].record} </p>
		</div>
	) 
} 


function ButtonCss(props) {
	
	return(

		<div className='cssContatinerSub'>
			<img src={`${props.clicks[props.i].image}`} alt="#" width="80%" />
			<h4>{props.clicks[props.i].title}</h4>
			<p>{props.clicks[props.i].record} </p>
		</div>
	)
}

function EffectCss(props) {
	
	return(

		<div className='cssContatinerSub'>
			<img src={`${props.effects[props.i].image}`} alt="#" width="80%" />
			<h4>{props.effects[props.i].title}</h4>
			<p>{props.effects[props.i].record} </p>
		</div>
	)
}

function NavBarCss(props) {
	
	return(

		<div className='cssContatinerSub'>
			<img src={`${props.navBars[props.i].image}`} alt="#" width="80%" />
			<h4>{props.navBars[props.i].title}</h4>
			<p>{props.navBars[props.i].record} </p>
		</div>
	)
}

export default MainContainer;