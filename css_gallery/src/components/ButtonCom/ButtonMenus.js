import '../../css/ButtonCom/ButtonMenus.css'

function ButtonMenus() {
	return(
		<div className='ButtonMenusContainer'>
		<div className="navBar">
		<a href="#">
			<i className="fas fa-th"></i>
			<b>Menus</b>
		</a>
		<a href="#">
			<i className="far fa-bookmark"></i>
			<b>Book</b>
		</a>
		<a href="#">
			<i className="fas fa-id-badge"></i>
			<b>Profiles</b>
		</a>
		<span></span>
	</div>
		</div>
	)
}

export default ButtonMenus;