import '../../css/ButtonCom/ButtonHoverAni.css'
import styled from 'styled-components'


let BlackBox = styled.button`
& {
	color: #fff;
	background: none;
	border: none;
	padding: 12px 18px;
	position: relative;
	}

	&:before{
		content: "";
	position: absolute;
	top: 50%;
	transform: translateY(-50%) translateX(calc(100% + 4px));
	width: 45px;
	height: 45px;
	background-color: red;
	border-radius: 50px;
	transition: transform .25s .25s cubic-bezier((0, 0, .5, 2));
	z-index: -1;
	}

&:hover::before{
	width: 100%;
	transform: translateY(-50%) translateX(-18px);
	transition: transform .25s cubic-bezier(0, 0, .5, 2),
		width .25s .25s cubic-bezier(0, 0, .5, 2);
}
`;

function ButtonHoverAni() {
	return (
		<div className='ButtonHoverAniContainer'>
				<div className="btn">
					Hover Yo
					<i className="fa-solid fa-arrow-right"></i>
				</div>
		</div>
	)
}

export default ButtonHoverAni;