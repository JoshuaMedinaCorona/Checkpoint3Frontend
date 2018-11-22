import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Aerolineas from './aerolineas';
import Body from './Body';
import Usuarios from './usuarios';
import AerolineasAgregar from './aerolineas/Agregar'


const App =() => (
		<div>
			<BrowserRouter>
				<div id='Footer'>
					<Header/>
						<main className="container">
							<Route exact path="/aerolineas" component={Aerolineas}/>
							<Route exact path='/usuarios' component={Usuarios} />
							<Route exact path="/" component={Body}/>
							<Route exact path='/a_agregar' component={AerolineasAgregar}/>
						</main>
					<Footer/>
				</div>
			</BrowserRouter>
		</div>
	)

export default App;
