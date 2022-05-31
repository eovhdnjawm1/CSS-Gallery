import styled from 'styled-components'

let BounceLoading = styled.div`
.BounceContainer {
	margin: auto;
	padding-top: 50px;
	width: 120px;
	height: 75px;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
	justify-content: space-between;
}


.BounceContainer span {
	font-size: 22px;
	text-transform: uppercase;
	margin: auto;
	color: #fff;
}

.BounceContainer .ball {
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: #fff;
	animation: bounce .5s alternate infinite;
}

.BounceContainer .ball:nth-child(2) {
	animation-delay: .2s;
}

.BounceContainer .ball:nth-child(3) {
	animation-delay: .4s;
}

@keyframes bounce {
	from {
		transform: scaleX(1.25);
	}

	to {
		transform: translateY(-50px) scaleX(1);
	}
}
`

function EffectBounceLoading() {
	return (
		<>
			<BounceLoading>
			<div class="BounceContainer">
			<div className='ball'></div>
			<div className='ball'></div>
			<div className='ball'></div>
			<span>Loading...</span>
		</div>

			</BounceLoading>
		</>

	)
}

export default EffectBounceLoading;