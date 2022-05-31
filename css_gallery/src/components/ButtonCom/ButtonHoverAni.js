import '../../css/ButtonCom/ButtonHoverAni.css'
import styled from 'styled-components'

function ButtonHoverAni() {


	let Style = styled.div`
	 &::before {

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

	return (
		<div className='ButtonHoverAniContainer'>
			<section class='main-container'>
				<Style class="btn">
					Hover Yo
					<i class="fa-solid fa-arrow-right"></i>
				</Style>
			</section>
		</div>
	)
}

export default ButtonHoverAni;