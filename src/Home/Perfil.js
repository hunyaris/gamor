import React from 'react'
// import Typical from 'react-typical'

export default function Perfil() {
	return (
		<div className='perfil-contenedor'>
			<div className='perfil-parent'>
				<div className='perfil-detalles'>
					<div className='colz'>
						{/* <h1>Hola perfil</h1> */}
						<a href='#'>
							<i className='fa fa-facebook-square'></i>
						</a>
						<a href='#'>
							<i className='fa fa-instagram'></i>
						</a>
						<a href='#'>
							<i className='fa fa-youtube-square'></i>
						</a>
						<a href='#'>
							<i className='fa fa-twitter'></i>
						</a>
					</div>
					<div className='perfil-detalles-nombre'>
						<span className='primer-texto'>
							{""}
							Hola, Soy <span className='texto-bla'>Hunyaris</span>
						</span>
					</div>
					<div className='perfil-detalles-rol'>
						<span className='primer-texto'>
							{""}
							<h1>
								{/* <Typical
									steps={['Hello', 1000, 'Hello world!', 500]}
									loop={Infinity}
									wrapper="p"
								/> */}
							</h1>
							<span className='perfil-rol-tagline'>
								bla bla bla...

							</span>
						</span>
					</div>
					<div className='perfil-opciones'>
						<button className='btn primary-btn' > Click Me</button>

					</div>
				</div>
			</div>
		</div>
	)
}
