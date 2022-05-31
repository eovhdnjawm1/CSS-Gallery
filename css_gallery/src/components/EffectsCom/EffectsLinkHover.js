import styled from 'styled-components'


let LinkgHover = styled.div`
ul {
	padding: 0;
}

.list {
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	width: 100vw;
	background-color: #1e2d3b;

}

.link {
	display: inline-block;
	text-decoration: none;
	color: #fff;
	position: relative;
	font-size: 35px;

}

.link::after {
	content: '';
	width: 100%;
	height: 1px;
	background-color: #fff;
	border-radius: 4px;
	position: absolute;
	left: 0;
	bottom: 0;
	transform: scaleX(0);
	transform-origin: left;
	transition: transform .25s ease;

}

.link:hover::after {
	transform: scaleX(1);

}
`

function EffectLinkHover() {
	return(
		<div>
			<LinkgHover>
	<ul>
		<li className='list'>
			<a href="#" className="link">Mac</a>
			<a href="#" className="link">Window</a>
			<a href="#" className="link">Linux</a>
		</li>
	</ul>
	</LinkgHover>
		</div>
	)
}

export default EffectLinkHover;