import styled from 'styled-components'

let NeonLoading = styled.div`
.loading {
	position: relative;
	width: 160px;
	height: 160px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.loading div {
	color: rgba(255, 255, 255, 0.753);
	z-index: 5;
}

.loading::before,
.loading::after {
	content: "";
	position: absolute;
	border-radius: inherit;
}

.loading::before {
	width: 100%;
	height: 100%;
	background: linear-gradient(0deg, #e3ffee 0%, #5f6cff 100%);
	animation: spin .5s infinite linear;
}

.loading::after {
	width: 85%;
	height: 85%;
	background-color: #1e2d3b;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
`

function EffectNeonLoading() {
	return (
		<>
			<NeonLoading>
				<div className='loading'>
					<div>loading...</div>
				</div>
			</NeonLoading>
		</>
	)
}

export default EffectNeonLoading