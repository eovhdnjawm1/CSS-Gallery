import styled from 'styled-components'

let HoverCard = styled.div`
body {
	background-color: #1e2d3b;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}



.card {
	position: relative;
	width: 200px;
	height: 200px;
	margin: 0 auto;
	background-color: #fff;
	transition: .5s;

}

.card .layout {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card:hover .layout {
	height: 100px;
	width: 100px;
	border-radius: 50%;
	top: 50px;
	left: 50%;
	transform: translateX(-50%);
	background: transparent;
	border: 4px solid #ff0066;
}

.card .layout h2 {
	font-size: 4rem;
	color: rgb(197, 181, 255);
	transition: .5s;
}

.card:hover .layout h2 {
	color: #ff0066;
	font-size: 2rem;
}

.card:hover {
	border-radius: 20%;
	border: 2px solid #ff0066;
	background-color: #fcd4d4;

}
`

function EffectHoverCardAni(){
	return(
		<>
		<HoverCard>
		<section className='card'>
		<div className='layout'>
			<h2>YJ</h2>
		</div>
	</section>
		</HoverCard>
		</>
	)
}

export default EffectHoverCardAni