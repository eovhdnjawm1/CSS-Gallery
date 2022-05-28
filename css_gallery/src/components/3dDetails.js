import '../css/3dDetails.css';


function GrapicCss() {
	return (
		<div>
				<div class="main-container">
		<div className='flipcard'>
			<div className="front">
				<img src={require("../img/3.png")} alt="#" className="img" />
				<h2>Git eovhdnjawm1</h2>
			</div>
			<div className="back">
				<img src={require("../img/1.jpg")} alt="#" className="img" />
				<h2>Young Jin Go</h2>
			</div>
		</div>
	</div>
		</div>
	)
}

export default GrapicCss;