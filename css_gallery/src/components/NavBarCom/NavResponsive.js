import styled from 'styled-components'

let ResponsiveNav = styled.div`
.container {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	padding: 15px 25px;
	width: 35rem;
}

.container a {
	text-decoration: none;
	color: gray;
}

.logo {
	margin-right: 50px;
}

#toggler,
.container label {
	display: none;
}

.list {
	list-style: none;
	display: flex;
	gap: 25px;
}


@media screen and (max-width:600px) {
	.menu-list {
		width: 100%;
		max-height: 0;
		overflow: hidden;
	}

	.list {
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}

	.container label {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}

	#toggler:checked~.menu-list {
		max-height: 100%;
	}
}
`

function NavBarResponsive() {
	return(
		<>
		<ResponsiveNav>
		<nav className="container">
		<a href="#" className="logo">Logo</a>
		<input type="checkbox" id="toggler" />
		<label htmlFor="toggler">
			<i className="fa-solid fa-bars"></i>
		</label>
		<div className='menu-list'>
			<ul className="list">
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Content</a></li>
			</ul>
		</div>
	</nav>
		</ResponsiveNav>
		</>
	)
}

export default NavBarResponsive