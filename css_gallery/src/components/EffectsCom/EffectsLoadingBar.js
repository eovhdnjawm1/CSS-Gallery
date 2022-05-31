import styled from 'styled-components'

let LoadingBar = styled.div`
.Loading {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: grey;
}

.Loading h1 {
	color: #fff;
	font-size: 4rem;
	position: absolute;
}

/* none background color */
/* .Loading h1::before {
	content: "Loading...";
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 100%;
	border-right: 4px solid greenyellow;
	box-shadow: 0 0 10px 10px greenyellow;
	overflow: hidden;
	color: greenyellow;
	animation: Loader 4s linear infinite;
} */

/* background color */
.Loading h1::before {
	content: "Loading...";
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 100%;
	border-right: 4px solid greenyellow;
	box-shadow: 0 0 10px 10px greenyellow;
	overflow: hidden;
	background-color: greenyellow;
	color: #fff;
	animation: Loader 4s linear infinite;
}

@keyframes Loader {

	0%,
	10%,
	100% {
		width: 0;
	}

	60%,
	80% {
		width: 100%;
	}
}
`

function EffectLoadingBar() {
	return(
		<div>
			<LoadingBar>
			<div class="Loading">
		<h1>Loading...</h1>
	</div>
	</LoadingBar>
		</div>
	)
}

export default EffectLoadingBar;