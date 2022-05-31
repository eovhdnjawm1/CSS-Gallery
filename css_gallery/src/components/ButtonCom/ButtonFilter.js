import '../../css/ButtonCom/ButtonFilter.css'

function ButtonFilter() {
	return(
		<div className='ButtonFilterContainer'>
	<input type="checkbox" id="toggle" />
	<label for="toggle" className="button"></label>
		</div>
	)
}

export default ButtonFilter;