import styled from 'styled-components'

let Figure = styled.div`
body {
	background-color: #1e2d3b;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.love {
	position: relative;
	width: 50px;
	height: 50px;
}

p::after {
	position: absolute;
	width: 130px;
	height: 130px;
	content: 'I Love';
	color: #000;
	font-size: 25px;
	text-align: center;
	margin-top: 30px;
	font-weight: bolder;
	top: 10px;
	left: 1px;
	transition: all .5s ease-in-out;
}

.love span {
	position: absolute;
	width: 130px;
	height: 130px;
	background-color: #00dd5f;
	transition: all .5s ease-in-out;
}

.love input {
	position: absolute;
	width: 130px;
	height: 130px;
	margin: 0;
	opacity: 0;
	cursor: pointer;
	z-index: 15;
}


.love input:checked~span:nth-child(2) {
	background-color: #d40808;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	top: -15px;
	left: -45px;
	z-index: 10;
	animation: effects .5s linear alternate;
}

.love input:checked~span:nth-child(3) {
	background-color: #d40808;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	left: 45px;
	top: -15px;
	z-index: 10;
	animation: effects .5s linear alternate;
}

.love input:checked~span:nth-child(4) {
	background-color: #d40808;
	top: 30px;
	width: 150px;
	height: 150px;
	right: 0px;
	left: 0px;
	z-index: 10;
	transform: rotate(45deg);
	animation: effects .5s linear;
}

.love input:checked~p::after {
	content: 'You';
	letter-spacing: 3px;
	color: #fff;
	z-index: 11;
	font-size: 25px;
}

@keyframes effects {
	100% {
		transform: rotate(360deg);
	}
}
`

function EffectChangeFigure(){
	return(
		<>
		<Figure>
		<section className='love'>
		<input type="checkbox" />
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<p></p>
	</section>
		</Figure>
		</>
	)
}

export default EffectChangeFigure;