import styled from 'styled-components'

let TextEffect = styled.div`
.container {
	overflow-x: hidden;
	padding: 20px;
}

.container h2 {
	font-size: 1.5rem;
	font-weight: bold;
	font-family: serif;
	color: #fff;
	position: relative;
}

h2::before,
h2::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
}

h2::before {
	background: #1e2d3b;
	animation: test 3s steps(25) 1s forwards infinite;
	width: 100%;
}

span {
	color: rgb(166, 166, 255);
	font-weight: bold;
	font-size: 2rem;
}

h2::after {
	opacity: 1;
	width: 2px;
	background-color: #fff;
	color: #fff;
	animation: test 3s steps(15) 1s forwards infinite,
		test2 0.6s steps(5) infinite;
}

@keyframes test {
	to {
		left: 100%;
	}
}

@keyframes test2 {

	0%,
	50% {
		opacity: 0;
	}

	51%,
	100% {
		opacity: 1;
	}
}
`

function EffectTextEffect() {
	return(
		<>
		<TextEffect>
		<div className="container">
		<h2>Hello
			<span>World .</span>
		</h2>
	</div>
		</TextEffect>
		</>

	)
}

export default EffectTextEffect;