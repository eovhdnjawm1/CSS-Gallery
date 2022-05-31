import styled from 'styled-components'

let ChangeBtn = styled.div`
#menu-toggle {
	display: none;
	
}


.subContainer{
	width: 150px;
	height: 150px;
	background-color: #fff;
	position: relative;
	cursor: pointer;
	border-radius: 10px;
}

.Btn {
	width: 90px;
	height: 90px;
	position: absolute;
	top: 9px;
	left: 9px;
	transition: transform .2s ease-out;
}

.Btn-crust {
	display: block;
	width: 80px;
	height: 5px;
	background-color: black;
	border-radius: 1px;
	position: absolute;
	left: 25px;

	transition: transform .2s ease-out;
}

.Btn-crust-top {
	top: 50px;
	transform: translateY(-3px);
}

.Btn-crust-bottom {
	bottom: 10px;
	transform: translateY(3px);
}

#menu-toggle:checked+.container .Btn-crust-top {
	transform: rotate(45deg);
	top: 65px;
	transition: transform .5s ease-out;
}

#menu-toggle:checked+.container .Btn-crust-bottom {
	transform: rotate(-45deg);
	bottom: 20px;
	transition: transform .5s ease-out;
}

`

function ButtonChange() {
	return (
		<div>
			<ChangeBtn>

			<input type="checkbox" id="menu-toggle" />
				<label htmlFor="menu-toggle" className="container">
					<div className='subContainer'>

					<span className='Btn Btn-top'>
						<span className='Btn-crust Btn-crust-top'></span>
					</span>
					<span className='Btn Btn-bottom'>
						<span className='Btn-crust Btn-crust-bottom'></span>
					</span>
					</div>
				</label>
			</ChangeBtn>
		</div>
	)

}

export default ButtonChange;