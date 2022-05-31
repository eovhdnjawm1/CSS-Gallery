import '../../css/3dCom/NeonMovingButton.css'

function NeonMovingButton(){
	return(
		<div className='neonMovingContainer'>
<label>
		<input type="checkbox" />
		<div className="icon"> 
			<div className='icons'>
				<i className='fa-solid fa-power-off'> </i>
			</div>
		</div>
	</label>
		</div>
	)
}

export default NeonMovingButton;