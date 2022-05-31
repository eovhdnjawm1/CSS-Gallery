import styled from 'styled-components'

let ShadowBtn = styled.div`
.btn {
	width: 150px;
	padding: 15px;
	margin: 20px;
	border: none;
	background-color: #111827;
	border-radius: 25px;
	color: rgb(150, 205, 205);
	font-size: 15px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 2px;
	cursor: pointer;
	outline: none;
	box-shadow: -2px -2px 6px 0 rgba(255, 255, 255, 0.1),
		2px 2px 6px 0 rgba(0, 0, 0, 0.8);
}

.btn:active {
	box-shadow: inset -2px -2px 6px 0 rgba(255, 255, 255, 0.2),
		inset 2px 2px 6px 0 rgba(0, 0, 0, 0.8);
}`

function ButtonShadow() {
	return (
		<div>
			<ShadowBtn>

				<button className="btn">Click here</button>
			</ShadowBtn>
		</div>
	)
}

export default ButtonShadow