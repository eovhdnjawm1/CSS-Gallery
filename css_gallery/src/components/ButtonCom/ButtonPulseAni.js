import styled from 'styled-components'

let PulseAni = styled.div`

.button {
	display: inline-block;
	color: #fff;
	text-decoration: none;
	padding: 20px 50px;
	/* border: 1px solid blue; */
	border-radius: 10px;
	box-shadow: 0 0 50px #4e00c2;
	
}

.button:hover {
	animation: pulse 1s ease-in-out;
}

@keyframes pulse {
	0% {
		box-shadow: 0 0 25px #5ddcff, 0 0 50px #4e00c2;
	}

}

`

function ButtonPusleAni(){
	return(
		<div>
			<PulseAni>
		<a href="#" className="button">Click Here</a>

			</PulseAni>
		</div>
	)
}

export default ButtonPusleAni