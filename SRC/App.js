import React from 'react'
import Banner from './Banner'
import logo from '../assets/Logo.png'
import Bienvenue from './Bienvenue'
import Hoover from './hoover'
import CO_H from './CO-H'

function App() {
    return(
    <div>
    <Banner>  <img className="lmj-logo" src={logo} alt='Pnyx' />
	
    <Hoover> 
        <nav class="menu">
			<section class="categorie">
			<div class="box">
				<h3>Partagez une histoire</h3>
				
				<ul>
					<li><a href="#">Original</a></li>
					<li><a href="#"> Proposez un webtoon</a></li>
					<li><a href="#">Proposez un livre</a></li>
				</ul>
				</div>
			</section>
			<section class="categorie">
			<div class="box">
				<h3>Votez pour une histoire</h3>
				<ul>
					<li><a href="#">Vos livres</a></li>
					<li><a href="#">Vos Webtoons</a></li>
					<li><a href="#">Vos histoires originales</a></li>
				</ul>
				</div>
			</section>
			<section class="categorie">
				<h3>Précédents gagnants</h3>
				<div class="box">
				<ul>
					<li><a href="#">Par catégorie</a></li>
					<li><a href="#">Par année</a></li>
				</ul>
				</div>
			</section>
			<section class="categorie">
				<h3>Votre espace</h3>
				<div class="box">
				<ul>
					<li><a href="#">Vos histoires écrites à ce jour</a></li>
					<li><a href="#">Vos votes</a></li>
					<li><a href="#">Vos documents</a></li>
				</ul>
				</div>
			</section>
			<section class="categorie">
				<h3>Nous</h3>
				<div class="box">
				<ul>
					<li><a href="#">Notre Histoire</a></li>
					<li><a href="#">Notre équipe</a></li>
					<li><a href="#">Nous contacter</a></li>
					
				</ul>
				</div>
			</section>
		</nav>
     </Hoover>
	 <CO_H />
     
    </Banner>
    <Bienvenue> <div id="Box_descriptif"> <h1>Bienvenue sur Pnyx</h1>
     <div id="description"> Le site ou vous pouvez proposez à 
    vos plateforme préférées, des livres, Webtoons, et autre idées 
    originales à adapter en film ou série</div></div>
     </Bienvenue>
    
    </div>
    )
    
}

export default App 




