import styled from 'styled-components'

let Blur = styled.div`
.container {
	width: 200px;
	height: 250px;
	position: relative;
}

.target-inner {
	width: inherit;
	height: inherit;
	background-color: rgba(255, 255, 255, .1);
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(10px);
	border-radius: 10px;
}

.target {
	width: 100px;
	height: 100px;
	background: radial-gradient(red, pink);
	border-radius: 50%;
	position: absolute;
	animation: moving 2s ease-in-out infinite alternate-reverse;
}

.target:nth-child(1) {
	top: -25px;
	left: -25px;
}

.target:nth-child(2) {
	bottom: -25px;
	right: -25px;
	animation-name: down-moving;
}

@keyframes moving {
	0% {
		transform: translateY(0px);
	}

	50% {
		transform: translateY(225px);
	}

	100% {
		transform: translate(175px, 225px);
	}
}

@keyframes down-moving {
	0% {
		transform: translateY(0px);
	}

	50% {
		transform: translateY(-225px);
	}

	100% {
		transform: translate(-175px, -225px);
	}
}
`

function EffectFocusBlur() {
	return(
		<>
		<Blur>

		<div className='container'>
		<div className="target"></div>
		<div className="target"></div>
		<div className="target-inner"></div>
	</div>
		</Blur>
		</>
	)
}

export default EffectFocusBlur;