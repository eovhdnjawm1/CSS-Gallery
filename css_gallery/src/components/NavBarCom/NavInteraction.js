import styled from 'styled-components'

let Interaction = styled.div`

a{
	text-decoration: none;
	font-family: sans-serif;
	text-transform: lowercase;
	font-size:1.5rem;
	color: #222;
}

.menu {
	display:flex;
	justify-content: space-around;
	align-items: center;
	position: relative;
	width:500px;
	height:60px;
	padding: 0 15px 15px;
	background-color: #fff;
	box-shadow: 0px 6px 18px 0px #9f9f9f;
	margin: 10px;
	margin-top: 150px;
}

.menu .nav-item{
	position: relative;

}

.menu .nav-item .tab-title {
	display:none;
	position:absolute;
	top: -40px;
	left: 50%;
	transform: translate(-50%, 0);
	font-size:12px;
	background-color:#222;
	color: #fff;
	padding: 5px;
	border-radius: 5px;
	width: max-content;
	text-transform: capitalize;
}

.menu .nav-item .tab-title:before {
	content:"";
	position: absolute;
	border-color: #222 transparent transparent transparent;
	border-style: solid;
	border-width:6px;
	width: 0px;
	height: 0px;
	bottom: -12px;
	left: 50%;
	transform: translate(-50%, 0);
}

.menu .nav-item:hover .tab-title {
	display:block;
}

.menu .checkbox {
	background-color: #fff;
	cursor: pointer;
	width: 0;
	height: 0;
	position: relative;
	z-index: 1;
}

.menu .checkbox:before {
	content: "";
	width: 80px;
	aspect-ratio: 1;
	transform: translate(-50%, -50%);
	top: -30px;
	left: 0;
	position: absolute;
	border-radius: 100%;
	background-color: #ea4c89;
	transition: all .2s linear;
	border: 4px solid #fff;
}

.menu .checkbox:after{
	content: "+";
	position:absolute;
	font-size:4em;
	color: #fff;
	top: -30px;
	left: 0;
	transform: translate(-50%, -50%);
	transition: all .1s linear;
}

.menu .checkbox:checked + * {
	top: -100px;
	transform: rotate(0deg);
}

.menu .checkobx:checked + * .nav-item {
	border-radius: 100%;
	display: flex;
	align-items: center;
	width: 60px;
	aspect-ratio: 1;
	position:absolute;
	left: 0;
	transform: translate(-50%, -15px);

}

.menu .checkbox:checked + * .nav-item:hover .tab-title{
	display: block !important;
}

.menu .checkbox:checked + * .nav-item > i {
	color:#fff;
	display: block;
	transition: all .5s linear;
}

.menu .checkbox:checked + * .nav-item:nth-child(1){
	background-color: #ff8182;
	top: 0px;
	left: -130px;
}
.menu .checkbox:checked + * .nav-item:nth-child(2){
	background-color: #c641ff;
	top: -40px;
	left: -40px;
}
.menu .checkbox:checked + * .nav-item:nth-child(3){
	background-color: #631aee;
	top: 0px;
	left: 50px;
}

.menu .checkbox:checked::before {
	background-color: #fff;
	box-shadow: 0 0 10px #c7c7c7;
}

.menu .checkbox:checked::after {
	transform: translate(-50%, -50%) rotate(45deg);
	color: #6e6b83;
}

.menu .checkbox-list {
	position: absolute;
	top: 0;
	display: block;
	z-index: 0;
	transform: rotate(-90deg) translate(0, -50%);
	transition: all .1s linear;
}

.menu .checkbox-list .nav-item {
	border-radius: 100%;
	display: flex;
	align-items:center;
	justify-content: center;
	width: 60px;
	aspect-ratio:1;
	position: absolute;
	transform: translate(15px, -50%);
	transition: all .2s linear;

}

.menu .checkbox-list .nav-item .tab-title {
	display: none;
}

.menu .checkbox-list .nav-item > i {
	color:#fff;
	display: block;
}

.menu .checkbox-list .nav-item:nth-child(1){
	background-color: #ff8182;
	left: -74px;
}
.menu .checkbox-list .nav-item:nth-child(2){
	background-color: #c641ff;
	left: -68px;
}
.menu .checkbox-list .nav-item:nth-child(3){
	background-color: #631aee;
	left: -64px;
}
`

function NavInteraction() {
	return(
		<>
		<Interaction>
		<nav className='menu'>
			<a className='nav-item' href='#'>
			<i className="fa-solid fa-house"></i>
				<span className='tab-title'>Home</span>
			</a>
			<input type="checkbox" name="" className='checkbox' />
			<div className='checkbox-list'>
				<a className='nav-item' href='#'><i className="fa-solid fa-magnifying-glass"></i><span className='tab-title'>Search</span></a>
				<a className='nav-item' href='#'><i className="fa-solid fa-bell"></i><span className='tab-title'>Notifications</span></a>
				<a className='nav-item' href='#'><i className="fa-solid fa-heart"></i><span className='tab-title'>Favorites</span></a>
			</div>
			<a className='nav-item' href='#'>
			<i className="fa-solid fa-user"></i>
				<span className='tab-title'>Your Profile</span>
			</a>
		</nav>
		</Interaction>
		</>
	)
}

export default NavInteraction;