import styled from 'styled-components'

let Flip = styled.div`
.main-container {
	display: flex;
	justify-content: center;
	align-items: center;
	background: #1e2d3b;
	font-family: 'Dancing Script', cursive;
}

.flipcard {
	width: 300px;
	height: 200px;
	position: relative;
	background-color: transparent;
	transition: transform 0.8s;
	transform-style: preserve-3d;
}

.flipcard:hover {
	transform: rotateY(180deg);
	cursor: pointer;
}

.front,
.back {
	height: 100%;
	width: 100%;
	padding-top: 20px;
	position: absolute;
	border-radius: 10px;
	backface-visibility: hidden;
	display: table-row;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

}

.front {
	background: rgb(180, 58, 170);
	background: linear-gradient(90deg,
			rgba(180, 58, 170, 1) 10%,
			rgba(200, 29, 253, 1) 35%,
			rgba(252, 176, 69, 1) 100%);
}


.img {
	width: 100px;
	height: 100px;
}

.back .img {
	border-radius: 50%;
	border: 2px solid rgb(170, 170, 170);
	width: 10rem;
	height: 10rem;
	object-fit: cover;
}

.back {
	transform: rotateY(180deg);
	background-color: rgb(255, 255, 208);
}
`


function FlipCard() {
	return (
		<div>
			<Flip>
				<div className="main-container">
		<div className='flipcard'>
			<div className="front">
				<img src={require("../../img/3.png")} alt="#" className="img" />
				<h2>Git eovhdnjawm1</h2>
			</div>
			<div className="back">
				<img src={require("../../img/1.jpg")} alt="#" className="img" />
				<h2>Young Jin Go</h2>
			</div>
		</div>
	</div>
	</Flip>
		</div>
	)
}

export default FlipCard;