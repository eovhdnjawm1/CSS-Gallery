import styled from 'styled-components'

let CardBtn = styled.div`
.cards {
	perspective: 500px;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1e2d3b;
}

.card {

	width: 200px;
	height: 250px;
	background-image: url('../../img/over_0.jpg') center no-repeat;
	background-size: cover;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 4px;
	position: relative;
	transform-style: preserve-3d;
	will-change: transform;
	transition: transform .5s;

}

.card:hover {
	transform: translateZ(10px) rotateX(20deg) rotateY(30deg);
}

.card-title {
	color: #fff;
	position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
	transition: transform .5s;
	z-index:3;
}

.card:hover .card-title {
	transform: translateZ(50px);
}
`

function CssButton() {

	return (
		<div>
			<CardBtn>

			<div className='cards3D'>
				<figure className='card' style={{backgroundImage:`url(../../img/over_0.jpg)`}}>
					<figcaption className="card-title">Flower</figcaption>
				</figure>
			</div>
			</CardBtn>
		</div>
	)
}

export default CssButton;