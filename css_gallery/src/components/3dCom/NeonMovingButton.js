// import '../../css/3dCom/NeonMovingButton.css'
import styled from 'styled-components'

let MovingButton = styled.div`
.neonMovingContainer label {
	position: relative;
	width: 140px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.neonMovingContainer label::before {
	position: absolute;
	content: '';
	background: rgba(255, 255, 255, 0.5);
	width: 90%;
	height: 5px;
	border-radius: 30px;
}

.neonMovingContainer label input {
	position: absolute;
	appearance: none;
}

.neonMovingContainer .icon {
	position: absolute;
	left: 0;
	width: 70px;
	height: 100%;
	background: rgb(95, 93, 95);
	cursor: pointer;
	transition: .5s ease;
}

.neonMovingContainer label input:checked~.icon {
	left: 70px;
	transform: rotate(45deg);
}

.neonMovingContainer .icon::after {
	content: "";
	position: absolute;
	right: 0;
	top: 0;
	width: 15px;
	height: 100%;
	filter: blur(1px);
}

.neonMovingContainer .icons {
	position: absolute;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3),
		15px 15px 15px rgba(0, 0, 0, 0.1),
		20px 20px 15px rgba(0, 0, 0, 0.3),
		38px 38px 15px rgba(0, 0, 0, 0.1),
		inset 2px 2px 5px rgb(248, 248, 248),
		inset -2px -2px 3px rgb(180, 180, 180);
	background: linear-gradient(rgb(212, 202, 248), rgb(146, 144, 144));
}

.neonMovingContainer .icons i {
	font-size: 23px;
	color: #333;
	transition: 0.5s ease;
}

.neonMovingContainer label input:checked~.icon .icons i {
	color: rgb(255, 0, 51);
	filter: blur(0.5px);
	transform: rotate(-45deg) scale(1.1);
}
`


function NeonMovingButton() {
	return (
		<>
			<MovingButton>
				<div className='neonMovingContainer'>
					<label>
						<input type="checkbox" />
						<div className="icon">
							<div className='icons'>
								<i className='fa-solid fa-power-off'> </i>
							</div>
						</div>
					</label>
				</div>
			</MovingButton>
		</>

	)
}

export default NeonMovingButton;