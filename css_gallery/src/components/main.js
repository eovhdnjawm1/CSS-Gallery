import '../css/Main.css'
import axios from 'axios';
import Component3D from './Component3D.js'

function MainContainer() {

	const url = 'https://eovhdnjawm1.github.io/db'
	const json3D = '/3D_data.json'
	const jsonButton = '/button_data.json'
	const jsonEffect = '/effect_data.json'
	const jsonNav = '/navbar_data.json'

	return (
		<div className='mainContainer'>
			<h1 className='mainTitle'>CSS Gallery</h1>
			<button onClick={() => {
				axios.get(url + json3D).then((result) => { 
					console.log(result.data[0].title)
				})
				.catch(() => {
					console.log('실패')
				})
			}}>버튼
				
			</button>
			<Component3D />
		</div>
	)
}



// async function Test() {
// 	const test = await axios.get(`my-json-server.typicode.com/eovhdnjawm1/posts?id=${test}`);
// 	const testJson = await test.json();
// 	const JSON = testJson.data.
// }

export default MainContainer;