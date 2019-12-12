
import React, { Component, useState } from 'react';
import {useSpring, animated, useTrail} from 'react-spring';
import './App.css';
import Fontarray from "./fontarray";
import { StyledEditor } from './StyledEditor';
import Dictionary from "./dictionary";

function fontarrayzindesxcontrol(){


}


function readmezindesxcontrol(){
   if(document.getElementById('readmebutton').style.zIndex==1){
   	document.getElementById('readmebutton').style.zIndex=30;
   	document.getElementById('readmepage').style.zIndex=20;
   	document.getElementById('readmeArrow').style.zIndex=30;
   } else {
   	document.getElementById('readmebutton').style.zIndex=1;
   	document.getElementById('readmeArrow').style.zIndex=21;
   }

}


function dictionaryzindexcontrol(){
	 if(document.getElementById('dictionaryleft').style.zIndex==1){
	 	document.getElementById('dictionaryleft').style.zIndex=20;
	 	document.getElementById('dictionaryright').style.zIndex=20;
	 	document.getElementById('dictionarypage').style.zIndex=19;
	 	document.getElementById('wordcontainer').style.zIndex=25;
	 	
	} else {
		document.getElementById('dictionaryleft').style.zIndex=1;
	 	document.getElementById('dictionaryright').style.zIndex=4;
	 	document.getElementById('dictionarypage').style.zIndex=0;
	}
}
const $ = window.$;


const windoww = window.innerWidth;
const windowh = window.innerHeight;


const App = () => {

	const [isArrayOpen, setArrayOpen] = useState(false);

  	const ArrayOpenAnimation = useSpring({
		left : isArrayOpen ? '80vw' : '15vw',

	})

	const arrayPageOpen = useSpring({
		// transform : isArrayOpen ? 'translate3d(0,0,0)' : 'translate3d(-100vw,0,0)',

		width: isArrayOpen ? windoww+"px" : "0px",
		// opacity : isArrayOpen ? '1' : '0',

	})

	const [isReadmeOpen, setReadmeOpen] = useState(false);

	const ReadmeAnimation = useSpring({
		transform : isReadmeOpen ? 'translate3d(0,0,0)' : 'translate3d(100vw,0,0)',

	})

	const ReadmetitleAnimation = useSpring({
		opacity : isReadmeOpen ? '1' : '0',

	})

	const leftReadmeAnimation = useSpring({
		right : isReadmeOpen ? windoww*0.5+"px" : '0px',

	})

	const readmeArrow = useSpring({
		marginLeft : isReadmeOpen ? windoww*0.5+"px" : 0-windoww*0.5+"px",

	})

	const readmeleftanimation = useSpring({
		marginLeft : isReadmeOpen ? "0px" : 0-windoww*3+"px",

	})

	const [istypeOpen, settypeOpen] = useState(false);

	const typepageanimation = useSpring({
		marginLeft : istypeOpen ? "0px" : windoww+"px",

	})

	const typepageanimationtwo = useSpring({
		marginRight : istypeOpen ? windoww+"px" : "0px",

	})

	const [isDictionaryOpen, setDictionaryOpen] = useState(false);

  	const DictionaryOpenAnimation = useSpring({
		left: isDictionaryOpen ? "0px" : windoww*0.6+'px',
		width : isDictionaryOpen ? windoww+'px' : "0px" ,
		

	})

	const leftDictionaryOpenAnimation = useSpring({
		left : isDictionaryOpen ? '0px' : windoww*0.3+'px',

	})

	const rightDictionaryOpenAnimation =   useSpring({
		left : isDictionaryOpen ? windoww-$("#dictionaryright").width()+'px' : windoww*0.6+"px",


	})

	const exanimation =  useSpring({
		opacity : isDictionaryOpen ? '1':'0',

	})

	const marqueeanimation = useSpring({
		right : istypeOpen ? windoww*0.25+'px' : 0-windoww+'px',

	})






	return(
		<div>

			
			<animated.button class="nav"  id="fontarraybuttonleft" onClick={()=> {
					setArrayOpen(!isArrayOpen);  
					fontarrayzindesxcontrol();
			}}>{'['}</animated.button>
			<animated.div id="fontarraypage" style={arrayPageOpen}>

			
			<Fontarray />


			</animated.div>
				<animated.button class="nav" id="fontarraybuttonright"  style={ArrayOpenAnimation} onClick={() => {
			    		setArrayOpen(!isArrayOpen);  
			    		fontarrayzindesxcontrol();
			    		}
				}>{']'}</animated.button>

			<animated.div id="readmepage" style={ReadmeAnimation}>

				<animated.div id = "leftreadme" style={readmeleftanimation}>
				{"phase2. I worked on dictionary about the words and symbols used in programming languages. I wrote my own opinion of how the symbol or words became to have that meaning, Not just explaining it like boring books. The grammar used in programming languages is completely different from the grammar we use in our daily lives. The use of symbols or signs is completely different, too. At first, I introduced symbols that anyone can read without any burden, and the more the difficult it  becomes. I can't tell you exactly, but it seems that the mission has been assigned according to the form of those symbols. For example, '//' is used for annotation processing that prevents interpretation of the computer. The shape of '//' reminds me of strong, brick wall that blocks block the interpretation of the computer. Exploring signs and symbols used in programming language may bring a fairly new perspective to those who study design."}</animated.div>

				<div id = "rightreadme" >
				{"phase1.'Form Follows Function.' Fonts used in programming follows the term. It has a slightly different shape than the ordinary typeface we daily use. It has to be careful and explicit not to confuse programmers. People around the world who uses various writing system use it, so it has to be clear. Not to mention examples like 0 and O, l, 1, and i. So it requires clarity. Small mistakes between , and . Or I and Ie, can shut down whole system. Most of the fonts used in programming are monotype. This is because you need to align the columns to clearly see the structure or hierarchy of the code, and programming software provide service assuming that users use moto-type font. We may think Programmers are indifferent to the font, but they when they choose the typeface, they are very careful just as designers picking up fonts in Indesign. Most of designers do not have the opportunity to see a font for programming purposes. However, I think fonts for programming are very well ‘designed’. Font with form for special function. Reason why this website’s title is font follows function(){}. On the one hand, when searching for programming fonts, they often fail to select and select by only the words in the already written sentence. So I archived various programming fonts on this site, and filled all the elements of the homepage with only letters. And I’ve got a place where we can actually write code using the font. Whenever a font changes, the height of the font and the layout of this page change dynamically depending on the lettering space or height of the font. I wanted this homepage to be a type specimen."}
				
				</div>

			</animated.div>

			<animated.div id="butfont" style={ReadmetitleAnimation}>

			</animated.div>

			<animated.button id="readmeArrow" style={readmeArrow} onClick={()=> {
					setReadmeOpen(!isReadmeOpen);  
					readmezindesxcontrol();
			}}>
				{'-->'}
			</animated.button>
			
			
			<animated.button class="nav" id="dictionaryleft" style={leftDictionaryOpenAnimation} onClick={()=> {
					setDictionaryOpen(!isDictionaryOpen);  
					dictionaryzindexcontrol();

					
			}}>{'('}</animated.button>




		<animated.div id='marquee' style={marqueeanimation}>Type some code here!</animated.div>






			<animated.div id="dictionarypage" style={DictionaryOpenAnimation}>
				
					<Dictionary isDictionaryOpen={isDictionaryOpen} />


			</animated.div>








			

			<animated.button class="nav" id="dictionaryright" style={rightDictionaryOpenAnimation} onClick={()=> {
					setDictionaryOpen(!isDictionaryOpen);  
					dictionaryzindexcontrol();
					
			}}>{')'}</animated.button>

			<animated.button class="nav" id="readmebutton" style={leftReadmeAnimation} onClick={()=> {
					setReadmeOpen(!isReadmeOpen);  
					readmezindesxcontrol();
					
			}}>{'<!--'}</animated.button>
			<animated.button class="nav" id="typefontbutton" style={typepageanimationtwo} onClick={()=> {
					settypeOpen(!istypeOpen);  
					
				}}>{'{'}</animated.button>

			<animated.div id = "typepage" style={typepageanimation}>

				<StyledEditor />

				<animated.button id ="closetypepage" onClick={()=> {
					settypeOpen(!istypeOpen);  
					}}>
				{'}'}
				</animated.button>

				<div id="typewhitebackground">
				</div>

			</animated.div>

			<div id="footer">
				<div id="leftfooter">
					{'main'}
				</div>

				<div id="rightfooter">
					{'body.fontfamily=cousine'}
				</div>
			</div>

			<animated.div id = "footerbackground" style={typepageanimation}>
			</animated.div>
		</div>



	);
    
  
}



export default App;
