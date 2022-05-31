import styled from 'styled-components'

let Overlaps = styled.div`
.gallery {
	height: 400px;
	width: 600px;
	display: flex;
	flex-direction: column;
	overflow: auto;
}

.gallery img {
	height: 100%;
	width: 100%;
	flex-shrink: 0;
	object-fit: cover;
	position: sticky;
	top: 0;
}
`

function EffectsOverlap() {
	return (
		<div>
			<Overlaps>
			<div className="gallery">
				<img src={require("../../img/over_0.jpg")} alt="#" />
				<img src={require("../../img/over_1.jpg")} alt="#" />
				<img src={require("../../img/over_2.jpg")} alt="#" />
				<img src={require("../../img/over_3.jpg")} alt="#" />
			</div>
			</Overlaps>
		</div>
	)
}

export default EffectsOverlap;

