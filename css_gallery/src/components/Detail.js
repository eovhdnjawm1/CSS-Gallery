import '../css/Detail.css';
import { useParams } from 'react-router-dom'

function CssButton() {
	// let { id } = useParams();
	// let 찾은상품 = props.grapics.find(function (x) {
	// 	return x.id == id;
	// });

	return (
		<div>
			{/* <h1> {찾은상품.title} </h1> */}
			<div className='cards3D'>
				<figure className='card'>
					<figcaption className="card-title">Flower</figcaption>
				</figure>

			</div>
		</div>
	)
}

export default CssButton;