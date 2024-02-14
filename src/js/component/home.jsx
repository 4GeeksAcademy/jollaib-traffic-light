import React, {useState} from "react";



import Light from "./Light.js";
//create your first component
const Home = ({saludo}) => {
	//aqui va mi logica
	//useState esta pendiente del cambio de una variable
	//y si cambia la variable se recarga el componente
	// const[variable, funcion que cambia la variable] = useState(valor inicial de la variable)
    let brightnessRed = '';
	let brightnessAmber = '';
	let brightnessGreen = '';
    const [turnOnRed, setTurnOnRed] = useState(false)
	const [turnOnAmber, setTurnOnAmber] = useState(false)
	const [turnOnGreen, setTurnOnGreen] = useState(false)
	const [alternation, setAlternation] = useState(false)
	const alternate = [
		()=>{setTurnOnRed(true), setTurnOnAmber(false), setTurnOnGreen(false)},
		 () => {setTurnOnRed(false), setTurnOnAmber(true), setTurnOnGreen(false)},
		 ()=> {setTurnOnRed(false), setTurnOnAmber(false), setTurnOnGreen(true)} ]
		 const colores = ["rojo", "azul", "verde"];
    {
        if(turnOnRed == true) {
            brightnessRed = '0px 0px 15px 15px yellow'
			brightnessAmber = '0px 0px 0px 0px yellow'
			brightnessGreen = '0px 0px 0px 0px yellow'
        }
		if(turnOnAmber == true) {
			brightnessRed = '0px 0px 0px 0px yellow'
            brightnessAmber = '0px 0px 15px 15px yellow'
			brightnessGreen = '0px 0px 0px 0px yellow'
			
        }
		if(turnOnGreen == true) {
			brightnessRed = '0px 0px 0px 0px yellow'
			brightnessAmber = '0px 0px 0px 0px yellow'
            brightnessGreen = '0px 0px 15px 15px yellow'
        }
		
    } 

	
	return (
	<div>
		<div className="position-absolute top-50 start-50 translate-middle">
			<div>
				<div className="position-absolute bottom-0 start-50 translate-middle" style={{backgroundColor: "black", height: "150px", width: "10px"}}>
				</div>
				<div className="position-absolute top-50 start-50 translate-middle" style={{backgroundColor: "black", height: "220px", width: "100px", borderRadius: "20px"}}>
					<Light onClick ={() => {
						setTurnOnRed(true), setTurnOnAmber(false), setTurnOnGreen(false)
					}}lightColor="red" brightness={brightnessRed}/>
					<Light onClick ={() => {
						setTurnOnRed(false), setTurnOnAmber(true), setTurnOnGreen(false)}} lightColor="rgb(255, 191, 0)" brightness={brightnessAmber}/>
					<Light onClick ={() => {
						setTurnOnRed(false), setTurnOnAmber(false), setTurnOnGreen(true)}} 
					 lightColor="green" brightness={brightnessGreen}/>
				</div>
			</div>
			
		</div>
		<div className="position-absolute top-0 start-50 translate-middle my-5">
		{	alternation == false ?
		<button className="btn btn-success" onClick={() => {
			setAlternation(true)
				setTimeout(() => {
					console.log(colores[0]);
					alternate[0]();
				  },2000);
				  setTimeout(() => {
					console.log(colores[0]);
					alternate[1]();
				  },1000);
				  setTimeout(() => {
					console.log(colores[0]);
					alternate[2]();
				  },4000);
				
		}}
			>Alternate Colour</button>
		: 
		<button className="btn btn-danger" onClick={() => {
			setAlternation(false)
			
	}}
		>Stop!</button>

		}

		</div>
	</div>

	);
};

export default Home;
