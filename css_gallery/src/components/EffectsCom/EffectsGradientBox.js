import styled from 'styled-components'

let Gradient = styled.div`
.container {
	width: 200px;
	height: 200px;
	background-color: #1e2d3b;
	border: 7px solid;
	border-image: linear-gradient(orange, red, blue) 1;
	animation: rotate 2.5s ease-in infinite;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}

@keyframes rotate {
	50% {
		border-image: linear-gradient(360deg, orange, red, blue) 1;
	}
}
`

function EffectGradientBox() {
	return(
		<>
		<Gradient>
		<figure className="container">
		<figcaption>
			Gradient Box
		</figcaption>
	</figure>
		</Gradient>
		</>
	)
}

export default EffectGradientBox;