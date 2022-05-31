import '../css/Main.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import Component3D from './Component3D.js'
import Card3D from './Detail.js'
import FlipCard from './3dDetails.js'
import NeonMovingButton from './3dCom/NeonMovingButton';
import ButtonFilter from './ButtonCom/ButtonFilter';
import ButtonMenus from './ButtonCom/ButtonMenus';
import ButtonSkew from './ButtonCom/ButtonSkewAni';
import ButtonHoverAni from './ButtonCom/ButtonHoverAni';
import ButtonChange from './ButtonCom/ButtonChange';
import ButtonPusleAni from './ButtonCom/ButtonPulseAni';
import ButtonShadow from './ButtonCom/ButtonShadow';
import EffectsOverlap from './EffectsCom/EffectsOverlap';
import EffectVideoText from './EffectsCom/EffectsVideoText';
import EffectLoadingBar from './EffectsCom/EffectsLoadingBar';
import EffectLinkHover from './EffectsCom/EffectsLinkHover';
import EffectColorUp from './EffectsCom/EffectsImageColorUp';
import EffectChangeFigure from './EffectsCom/EffectsChangeFigure';
import EffectHoverCardAni from './EffectsCom/EffectsHoverCardAni';
import EffectCenterHover from './EffectsCom/EffectsCenterHover';
import EffectGradientBox from './EffectsCom/EffectsGradientBox';
import EffectNeonSignIcon from './EffectsCom/EffectsNeonSignIcon';
import EffectTextEffect from './EffectsCom/EffectsTextEffect';
import EffectFocusBlur from './EffectsCom/EffectsFocusBlur';
import EffectNeonLoading from './EffectsCom/EffectsNeonLoading';
import EffectBounceLoading from './EffectsCom/EffectsBounceLoading';


const url = 'https://eovhdnjawm1.github.io/db'
const json3D = '/3D_data.json'
const jsonButton = '/button_data.json'
const jsonEffect = '/effect_data.json'
const jsonNav = '/navbar_data.json'

function MainContainer() {
	let navigate = useNavigate();
	let [grapics, setGrapic] = useState([]);

	let [clicks, setClicks] = useState([]);
	let [effects, setEffects] = useState([]);
	let [navBars, setNavBars] = useState([]);

	useEffect(() => {
		axios.get(url + json3D).then((res) => {
			let copy = [...res.data]
			setGrapic(copy)

			axios.get(url + jsonButton).then((res) => {
				let copy = [...res.data]
				setClicks(copy)
			})

			axios.get(url + jsonEffect).then((res) => {
				let copy = [...res.data]
				setEffects(copy)
			})
			axios.get(url + jsonNav).then((res) => {
				let copy = [...res.data]
				setNavBars(copy)
			})
		})
	}, [])

	return (
		<div className='mainContainer'>
			<h1 className='mainTitle'>CSS Gallery</h1>
			<h1 style={{ color: "#fff" }}>Profile</h1>
			{/* <Routes>
				<Route path="/" element={<div>메인페이지</div>} />
				<Route path="/3DCss" element={<Card3D />} />
				<Route path="/NavCss" element={<FlipCard />} />
				<Route path="/ClickCss" element={<div>Click CSS 페이지</div>} />
				<Route path="/EffectCss" element={<div>Effect CSS 페이지</div>} />
			</Routes> */}
			<Routes>
				<Route path="/detail/0" element={<Card3D />} />
				<Route path="/detail/1" element={<FlipCard />} />
				<Route path="/detail/2" element={<NeonMovingButton />} />
				<Route path="/button/0" element={<ButtonFilter />} />
				<Route path="/button/1" element={<ButtonMenus />} />
				<Route path="/button/2" element={<ButtonSkew />} />
				<Route path="/button/3" element={<ButtonHoverAni />} />
				<Route path="/button/4" element={<ButtonChange />} />
				<Route path="/button/5" element={<ButtonPusleAni />} />
				<Route path="/button/6" element={<ButtonShadow />} />
				<Route path="/effect/0" element={<EffectsOverlap />} />
				<Route path="/effect/1" element={<EffectVideoText />} />
				<Route path="/effect/2" element={<EffectLoadingBar />} />
				<Route path="/effect/3" element={<EffectLinkHover />} />
				<Route path="/effect/4" element={<EffectColorUp />} />
				<Route path="/effect/5" element={<EffectChangeFigure />} />
				<Route path="/effect/6" element={<EffectHoverCardAni />} />
				<Route path="/effect/7" element={<EffectCenterHover />} />
				<Route path="/effect/8" element={<EffectGradientBox />} />
				<Route path="/effect/9" element={<EffectNeonSignIcon />} />
				<Route path="/effect/10" element={<EffectTextEffect />} />
				<Route path="/effect/11" element={<EffectFocusBlur />} />
				<Route path="/effect/12" element={<EffectNeonLoading />} />
				<Route path="/effect/13" element={<EffectBounceLoading />} />
			</Routes>
			<div className='cssContainer'>
				<div className='grapicContainer'>
					<h2>3D CSS</h2>
					{
						grapics.map(function (val, i) {
							return (
								<div key={i}>

									<Grapic3DCss grapics={grapics} i={i}></Grapic3DCss>
								</div>
							)
						})
					}

				</div>
				<div className='buttonContainer'>
					<h2>Button CSS</h2>
					{
						clicks.map(function (val, i) {
							return (
								<div key={i}>
									<ButtonCss clicks={clicks} i={i}></ButtonCss>
								</div>
							)
						})
					}</div>
				<div className='effectContainer'>
					<h2>Effect CSS</h2>
					{
						effects.map(function (val, i) {
							return (
								<div key={i}>
									<EffectCss effects={effects} i={i}></EffectCss>
								</div>
							)
						})
					}
				</div>
				<div className='navBarContainer'>
					<h2>NavBar CSS</h2>
					{
						navBars.map(function (val, i) {
							return (
								<div key={i}>
									<NavBarCss navBars={navBars} i={i}></NavBarCss>
								</div>
							)
						})
					}
				</div>



			</div>
		</div>
	)
}

function Grapic3DCss(props) {
	let navigate = useNavigate();
	let { id } = useParams();
	let 찾은것 = props.grapics.find((x) => {
		return x.id == id
	});

	return (
		// 
		<div className='cssContainerSub' onClick={() => navigate('/detail/' + props.i)} >
			{/* <Link to="/3DCss" style={{ textDecoration: 'none', color: '#fff' }}> */}
			<h4>{props.grapics[props.i].title}</h4>
			<img src={`${props.grapics[props.i].image}`} alt="#" width="80%" />
			<p>제작일자 : {props.grapics[props.i].record} </p>
			<p>분류 : {props.grapics[props.i].content} </p>
			{/* </Link> */}
		</div>
	)
}


function ButtonCss(props) {
	let navigate = useNavigate();
	return (

		<div className='cssContainerSub' onClick={() => navigate('/button/' + props.i)}>
			<Link to="/ClickCss" style={{ textDecoration: 'none', color: '#fff' }}>

				<h4>{props.clicks[props.i].title}</h4>
				<img src={`${props.clicks[props.i].image}`} alt="#" width="80%" />
				<p>제작일자 : {props.clicks[props.i].record} </p>
				<p>분류 : {props.clicks[props.i].content} </p>
			</Link>

		</div>
	)
}

function EffectCss(props) {


	let navigate = useNavigate();
	return (

		<div className='cssContainerSub' onClick={() => navigate('/effect/' + props.i)}>
			<Link to="/EffectCss" style={{ textDecoration: 'none', color: '#fff' }}>

				<h4>{props.effects[props.i].title}</h4>
				<img src={`${props.effects[props.i].image}`} alt="#" width="80%" />
				<p>제작일자 : {props.effects[props.i].record} </p>
				<p>분류 : {props.effects[props.i].content} </p>
			</Link>
		</div>
	)
}

function NavBarCss(props) {

	return (

		<div className='cssContainerSub'>
			<Link to="/NavCss" style={{ textDecoration: 'none', color: '#fff' }}>

				<h4>{props.navBars[props.i].title}</h4>
				<img src={`${props.navBars[props.i].image}`} alt="#" width="80%" />
				<p>제작일자 : {props.navBars[props.i].record} </p>
				<p>분류 : {props.navBars[props.i].content} </p>
			</Link>
		</div>
	)
}

export default MainContainer;