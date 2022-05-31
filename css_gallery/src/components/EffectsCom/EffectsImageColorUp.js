import styled from 'styled-components'

let ColorUp = styled.div`
body {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #1e2d3b;

}

.container img {
	filter: grayscale();
	width: 200px;
	height: 200px;
	border-radius: 50%;
	border: 6px solid white;
	margin-bottom: 1rem;
	cursor: pointer;
	transition: fillter 0.4s ease-in-out;
}

.container:hover img {
	filter: none;
}

.title {
	cursor: pointer;
	font-family: 'Dancing Script', cursive;
	font-size: 3rem;
	color: white;
	position: relative;
}

.title::after {
	position: absolute;
	content: '';
	width: 0;
	height: 2px;
	background-color: white;
	left: 50%;
	bottom: -10px;
	transition: all 0.4s ease-in-out;
}

.container:hover .title::after {
	width: 100%;
	left: 0;

}`

function EffectColorUp() {
	return (
		<>
		<ColorUp>
			<div className="container">
				<img src={require("../../img/over_0.jpg")} alt="#" />
					<div className="title">YoungJinGo</div>
			</div>
			</ColorUp>
		</>
	)
}

export default EffectColorUp