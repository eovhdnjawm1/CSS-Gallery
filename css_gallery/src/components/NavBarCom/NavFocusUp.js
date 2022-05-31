import styled from 'styled-components'

let Focus = styled.div`
.container {
	width: 250px;
	height: 25px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: grey;
	padding: 15px;
	color: #fff;
	border-radius: 40px;
	position: relative;
	box-shadow: 0 0 10px #202020;
}


.container::before {
	content: "";
	position: absolute;
	top: 5%;
	left: -2.5%;
	width: 105%;
	height: 112%;
	border-radius: 40px;
	background: linear-gradient(to right, #272727, #2a2a2a);
	z-index: -1;
	transition: background 4s;
}

.container:hover::before {
	background: linear-gradient(to right, #9d50bb, #6e48aa);
}

.box {
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	cursor: pointer;
	transition: transfrom 1s;
	z-index: 5;
}

.box:hover {
	transform: translateY(-10px);
	background: linear-gradient(to right, #9d50bb, #6e48aa);
}

i {
	cursor: pointer;
	transition: transfrom 1s ease-in-out;
	z-index: 10;
	color: #fff;
}

.box:hover i {
	transform: scale(1.2);
}
`

function NavBarFocusUp(){
	return(
		<>
		<Focus>
		<div className='container'>
		<div className='box'><i className="fa-solid fa-house"></i></div>
		<div className='box'><i className="fa-solid fa-magnifying-glass"></i></div>
		<div className='box'><i className="fa-solid fa-heart"></i></div>
		<div className='box'><i className="fa-solid fa-user"></i></div>
	</div>
		</Focus>
		</>

	)
}

export default NavBarFocusUp;