import styled from 'styled-components'

let Video = styled.div`
body {
	margin: 0;
	padding: 0;
}

.showCase {

	width: 250px;
	height: 125px;
	position: relative;
	background-color: #000;
}

.showCase video {
	margin-left: 5px;
	width: 100%;
	height: 50%;
	position: absolute;
	object-fit: cover;

}

.title {
	margin-left: 5px;
	width: 250px;
	height: 125px;
	background-color: #000;
	font-size: 100px;
	color: #fff;
	mix-blend-mode: multiply;
}
`

function EffectVideoText() {
	return(
		<div>
			<Video>

			<section className="showCase">
		<video src={require("../../img/flower.webm")} autoPlay loop muted></video>
		{/* <!-- 출처 : MDN Output Video https://developer.mozilla.org/ko/docs/Web/HTML/Element/Video --> */}
		<h1 className='title'>VIDEO TEXT</h1>
	</section>
			</Video>
		</div>
	)
}

export default EffectVideoText