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

	useEffect(() => {
		axios.get(url + jsonButton).then((res) => {
			let copy = [...res.data]
			setClicks(copy)
		})
		axios.get(url + json3D).then((res) => {
		let copy = [...res.data]
		setUsers(copy)
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
			</div>
		</div>
	)
}

function UserList(props) {
	console.log("타이틀 다뽑기",props.users[props.i].title)
	console.log(props.i);
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


// async function Test() {
// 	const test = await axios.get(`my-json-server.typicode.com/eovhdnjawm1/posts?id=${test}`);
// 	const testJson = await test.json();
// 	const JSON = testJson.data.
// }

export default MainContainer;