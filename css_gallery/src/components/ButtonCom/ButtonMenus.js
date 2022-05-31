import '../../css/ButtonCom/ButtonMenus.css'

function ButtonMenus() {
	return(
		<div className='ButtonMenusContainer'>
		<div class="navBar">
		<a href="#">
			<i class="fas fa-th"></i>
			<b>Menus</b>
		</a>
		<a href="#">
			<i class="far fa-bookmark"></i>
			<b>Book</b>
		</a>
		<a href="#">
			<i class="fas fa-id-badge"></i>
			<b>Profiles</b>
		</a>
		<span></span>
	</div>
		</div>
	)
}

export default ButtonMenus;