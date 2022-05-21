import '../css/Main.css'
import axios from 'axios';

function MainContainer() {
	return (
		<div className='mainContainer'>
			<h1 className='mainTitle'>CSS Gallery</h1>
			<Test />
			
		</div>
	)
}


async function Test() {
	const test = await axios.get(`https://raw.githubusercontent.com/eovhdnjawm1/CSS-Gallery/main/css_gallery/my-json-server/db.json`);
	console.log(test);
}

export default MainContainer;