import '../css/BounceLoading.css'

function BounceLoading() {
	return(
		<div class="BounceContainer">
			<div className='ball'></div>
			<div className='ball'></div>
			<div className='ball'></div>
			<span>Loading...</span>
		</div>
	)
}

export default BounceLoading