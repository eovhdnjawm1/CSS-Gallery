import styled from 'styled-components'

let NeonSign = styled.div`

.fa-brands {
	color: #fff;
	font-size: 60px;
	animation: first_color .5s ease-in-out infinite alternate;
	margin-right: 50px;
}

.fa-brands:nth-child(2) {
	animation-name: second_color;
}

.fa-brands:nth-child(3) {
	animation-name: third_color;
}

@keyframes first_color {
	0% {
		text-shadow: 0 0 100px #f17,
			0 0 20px #d6249f,
			0 0 30px #285AE8
	}

	100% {
		text-shadow: 0 0 50px #f17,
			0 0 10px #d6249f,
			0 0 15px #285AE8
	}
}

@keyframes second_color {
	0% {
		text-shadow: 0 0 100px blue,
			0 0 20px rgb(0, 0, 133),
			0 0 30px rgb(181, 181, 255)
	}

	100% {
		text-shadow: 0 0 50px blue,
			0 0 10px rgb(0, 0, 133),
			0 0 15px rgb(181, 181, 255)
	}
}

@keyframes third_color {
	0% {
		text-shadow: 0 0 100px green,
			0 0 20px rgba(0, 128, 0, 0.514),
			0 0 30px rgb(184, 248, 184)
	}

	100% {
		text-shadow: 0 0 50px green,
			0 0 10px rgba(0, 128, 0, 0.514),
			0 0 15px rgb(184, 248, 184)
	}
}
`

function EffectNeonSignIcon() {
	return (
		<>
			<NeonSign>
			<i className="fa-brands fa-instagram"></i>
	<i className="fa-brands fa-facebook"></i>
	<i className="fa-brands fa-telegram"></i>
			</NeonSign>
		</>

	)
}

export default EffectNeonSignIcon