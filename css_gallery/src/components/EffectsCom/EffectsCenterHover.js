import styled from 'styled-components'

let CenterHover = styled.div`
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}


h2 {
	font-size: 2.3rem;
	font-family: 'Dancing Script', cursive;
	color: #fff;
	position: relative;
}


.container :nth-child(1) {
	color: rgb(92, 92, 240)
}

.container :nth-child(2) {
	color: rgb(88, 197, 88)
}

.container :nth-child(3) {
	color: rgb(236, 128, 128)
}

.container :nth-child(1)::after {
	background-color: rgb(92, 92, 240)
}

.container :nth-child(2)::after {
	background-color: rgb(88, 197, 88)
}

.container :nth-child(3)::after {
	background-color: rgb(236, 128, 128)
}

h2::after {
	position: absolute;
	content: '';
	width: 0;
	height: 2px;
	left: 50%;
	bottom: -10px;
	transition: all 0.2s ease-in-out;
}

h2:hover {
	cursor: pointer;
}

h2:hover:after {
	cursor: pointer;
	width: 100%;
	left: 0;
}
`

function EffectCenterHover(){
	return(
		<>
		<CenterHover>
		<section className="container">
		<h2>React</h2>
		<h2>Vue</h2>
		<h2>Angular</h2>
	</section>
		</CenterHover>
		</>
	)
}

export default EffectCenterHover;