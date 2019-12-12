const $ = window.$;






$('body').css('cursor', 'none');

$(document).bind('mousemove', function(e){
    $('#mousecursor').css({
       left:  e.pageX+2,
       top:   e.pageY+2,
       opacity: 1,
    });
});

$(document).mouseleave(function () {
    $('#mousecursor').css({ opacity: 0 });
});

$(document).mouseenter(function () {
    $('#mousecursor').css({ opacity: 1 });
});

////////


///////

   //Enter name of container element & marquee element




$(document).ready(function(){
	$('#marquee').marquee({
    //speed in milliseconds of the marquee
    duration: 1000,
    //gap in pixels between the tickers
    //time in milliseconds before the marquee will start animating
  
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow

});


	var windowww = window.innerWidth;

	document.getElementById('arraymain').style.width=windowww-$("#fontarraybuttonright").width()-$("#fontarraybuttonright").width()+"px";
	document.getElementById('arraymain').style.marginLeft=$("#fontarraybuttonleft").width()+"px";
	document.getElementById('description').style.height=window.innerHeight-$("#arraycarrier").height()-$("#footer").height()-100+"px";
	document.getElementById('descontainer').style.height=window.innerHeight-$("#arraycarrier").height()-$("#footer").height()-100+"px";
	
	document.getElementById('leftreadme').style.marginTop=$("#readmebutton").height()+"px";
	document.getElementById('leftreadme').style.height=window.innerHeight*0.9-$("#readmebutton").height()+"px";

	document.getElementById('rightreadme').style.height=window.innerHeight*0.9-$("#readmeArrow").height()+window.innerHeight*0.05+"px";




	document.getElementById('readmebutton').style.zIndex=1;
	document.getElementById('typewhitebackground').style.width=$("#typefontbutton").width()+"px";
	document.getElementsByClassName('CodeMirror cm-s-custom-0')[0].style.width=windowww-$("#typefontbutton").width()+"px";
	
	
	document.getElementById('dictionarymain').style.width=windowww-$("#dictionaryleft").width()*2+"px";
	document.getElementById('dictionarymain').style.marginLeft=$("#dictionaryleft").width()+"px";

	document.getElementById('wordcontainer').style.width=$("#dictionarymain").width()/2+"px";
	document.getElementById('dicdesc').style.width=$("#wordcontainer").width()*0.8+"px";


	document.getElementById('dictionaryleft').style.zIndex=1;
	document.getElementById('rightcor').style.zIndex=800;

	 //z-index는 js event로 처리하자.


	//아래는 하이라이트
	
	var farray = document.querySelectorAll('.fontarray');
	farray.forEach(function(e) {

      e.addEventListener('mouseover', function() {
       
   		 document.getElementById('mousecursor').style.color="#33FF42";

      })

       e.addEventListener('mouseleave', function() {
       
   		 document.getElementById('mousecursor').style.color="black";

      })

      e.addEventListener('click', function() {
       
        for(var i =0 ; i<farray.length; i++){
        	if(farray[i].style.backgroundColor=="red"){
        		farray[i].style.backgroundColor="blue";
        	}
        }
        this.style.backgroundColor = "red";

      })
  	});



	var darray = document.querySelectorAll('.words');
	darray.forEach(function(e) {

      e.addEventListener('mouseover', function() {
       
   		 document.getElementById('mousecursor').style.color="#33FF42";

      })

       e.addEventListener('mouseleave', function() {
       
   		 document.getElementById('mousecursor').style.color="black";

      })

      e.addEventListener('click', function() {
       
        for(var i =0 ; i<darray.length; i++){
        	if(darray[i].style.backgroundColor=="red"){
        		darray[i].style.backgroundColor="blue";
        	}
        }
        this.style.backgroundColor = "red";

      })
  	});

	 var example = ['No point,', 'No line,', 'No plane,', 'No picture,', 'No icon,', 'But font.'];
	 var readmetitle = document.getElementById("butfont");

     textSequence(0);
     function textSequence(i) {

         if (example.length > i) {

                setTimeout(function() {
                    readmetitle.innerHTML = example[i];

                    if(example[i]=="But font."){
                    	readmetitle.style.color="black";
                    	readmetitle.style.right="";
                    	readmetitle.style.left="50vw";
                    } else if(example[i]=="No point,") {
                    	readmetitle.style.color="black";
                    	readmetitle.style.left="";
                    	readmetitle.style.right="50vw";
                    } else if(example[i]=="No line,") {
                    	
                    } else{
                    	
                    }

                    textSequence(++i);
                }, 1000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

      }

      	var nowindex=document.getElementById('leftfooter');
      	var fontarrayindex =false;
      	var dictionaryindex=false;
      	var readmeindex=false;
      	var typeindex=false;
      	var customcursor =document.getElementById('mousecursor');
	// document.getElementById('fontarraybuttonright').style.left=$("#fontarraybuttonleft").width()+"px";
	// document.getElementById('fontarraybuttonright').style.height=$("#fontarraybuttonleft").height()+"px";
	$( "#fontarraybuttonleft" ).hover(function() {
		document.getElementById('fontarraybuttonright').style.textShadow="8px 8px 4px gray"; 
		document.getElementById('fontarraybuttonleft').style.textShadow="8px 8px 4px gray";
		nowindex.innerHTML="main.fontarray";
		customcursor.style.color="#33FF42";

	});

	$( "#fontarraybuttonleft" ).mouseleave(function() {
		document.getElementById('fontarraybuttonleft').style.textShadow="0px 0px 0px gray"; 
		document.getElementById('fontarraybuttonright').style.textShadow="0px 0px 0px gray"; 
		customcursor.style.color="black";
		if(fontarrayindex==true){

		} else {

		nowindex.innerHTML="main";
		}
	});

	$( "#fontarraybuttonright" ).hover(function() {
		document.getElementById('fontarraybuttonright').style.textShadow="8px 8px 4px gray"; 
		document.getElementById('fontarraybuttonleft').style.textShadow="8px 8px 4px gray";
		nowindex.innerHTML="main.fontarray";
		customcursor.style.color="#33FF42";
	});

	$( "#fontarraybuttonright" ).mouseleave(function() {
		document.getElementById('fontarraybuttonleft').style.textShadow="0px 0px 0px gray"; 
		document.getElementById('fontarraybuttonright').style.textShadow="0px 0px 0px gray"; 
		customcursor.style.color="black";
		if(fontarrayindex==true){

		} else {

		nowindex.innerHTML="main";
		}
	});


	$( "#dictionaryleft" ).hover(function() {
		document.getElementById('dictionaryleft').style.textShadow="8px 8px 4px gray"; 
		document.getElementById('dictionaryright').style.textShadow="8px 8px 4px gray";
		nowindex.innerHTML="main.dictionary";
		customcursor.style.color="#33FF42";
	});

	$( "#dictionaryleft" ).mouseleave(function() {
		document.getElementById('dictionaryleft').style.textShadow="0px 0px 0px gray"; 
		document.getElementById('dictionaryright').style.textShadow="0px 0px 0px gray"; 
		customcursor.style.color="black";
		if(dictionaryindex==true){

		} else {

		nowindex.innerHTML="main";
		}
	});


	$( "#dictionaryright" ).hover(function() {
		document.getElementById('dictionaryleft').style.textShadow="8px 8px 4px gray"; 
		document.getElementById('dictionaryright').style.textShadow="8px 8px 4px gray";
		nowindex.innerHTML="main.dictionary";
		customcursor.style.color="#33FF42";
	});

	$( "#dictionaryright" ).mouseleave(function() {
		document.getElementById('dictionaryleft').style.textShadow="0px 0px 0px gray"; 
		document.getElementById('dictionaryright').style.textShadow="0px 0px 0px gray"; 
		customcursor.style.color="black";
		if(dictionaryindex==true){

		} else {

		nowindex.innerHTML="main";
		}
	});


	$( "#readmebutton" ).hover(function() {
		document.getElementById('readmebutton').style.textShadow="8px 8px 4px gray";
		document.getElementById('readmeArrow').style.textShadow="8px 8px 4px gray";
		nowindex.innerHTML="main.readme";
		customcursor.style.color="#33FF42";
	});

	$( "#readmebutton" ).mouseleave(function() {
		document.getElementById('readmebutton').style.textShadow="0px 0px 0px gray"; 
		document.getElementById('readmeArrow').style.textShadow="0px 0px 0px gray";
		customcursor.style.color="black";
		if(readmeindex==true){

		} else {

		nowindex.innerHTML="main";
		}
	});

	$( "#readmeArrow" ).hover(function() {
		document.getElementById('readmebutton').style.textShadow="8px 8px 4px gray";
		document.getElementById('readmeArrow').style.textShadow="8px 8px 4px gray";
		nowindex.innerHTML="main.readme";
		customcursor.style.color="#33FF42";
	});

	$( "#readmeArrow" ).mouseleave(function() {
		document.getElementById('readmebutton').style.textShadow="0px 0px 0px gray"; 
		document.getElementById('readmeArrow').style.textShadow="0px 0px 0px gray";
		customcursor.style.color="black";
		if(readmeindex==true){

		} else {

		nowindex.innerHTML="main";
		}
	});


	$( "#typefontbutton" ).hover(function() {
		document.getElementById('typefontbutton').style.textShadow="8px 8px 4px gray"; 
		nowindex.innerHTML="main.typecode";
		customcursor.style.color="#33FF42";
	});

	$( "#typefontbutton" ).mouseleave(function() {
		document.getElementById('typefontbutton').style.textShadow="0px 0px 0px gray"; 

		if(typeindex==true){

		} else {
		customcursor.style.color="black";
		nowindex.innerHTML="main";
		}		
	});

	$( "#closetypepage" ).hover(function() {
		document.getElementById('closetypepage').style.textShadow="8px 8px 4px gray"; 
		nowindex.innerHTML="main.typecode";
		customcursor.style.color="#33FF42";
	});

	$( "#closetypepage" ).mouseleave(function() {
		document.getElementById('closetypepage').style.textShadow="0px 0px 0px gray"; 
	
		if(typeindex==true){

		} else {
			customcursor.style.color="black";
		nowindex.innerHTML="main";
		}		
	});



	document.getElementById('rightcor').onmouseover = function(){
		document.getElementById('rightcor').style.color="black";
	

		
	};

	document.getElementById('rightcor').onmouseleave = function(){
		document.getElementById('rightcor').style.color="black";
		
	}



	

	$( "#fontarraybuttonleft" ).mousedown(function() {
		if(fontarrayindex==false){
			nowindex.innerHTML="main.fontarray";
			fontarrayindex=!fontarrayindex;
		} else {
			nowindex.innerHTML="main";
			fontarrayindex=!fontarrayindex;
		}
	});

	

	$( "#fontarraybuttonright" ).mousedown(function() {
		if(fontarrayindex==false){
			nowindex.innerHTML="main.fontarray";
			fontarrayindex=!fontarrayindex;
		} else {
			nowindex.innerHTML="main";
			fontarrayindex=!fontarrayindex;
		}
	});


	$( "#dictionaryleft" ).mousedown(function() {
		if(dictionaryindex==false){
			nowindex.innerHTML="main.dictionary";
			dictionaryindex=!dictionaryindex;
		} else {
			nowindex.innerHTML="main";
			dictionaryindex=!dictionaryindex;
		}
	});


	$( "#dictionaryright" ).mousedown(function() {
		if(dictionaryindex==false){
			nowindex.innerHTML="main.dictionary";
			dictionaryindex=!dictionaryindex;
		} else {
			nowindex.innerHTML="main";
			dictionaryindex=!dictionaryindex;
		}
	});

	$( "#readmebutton" ).mousedown(function() {
		if(readmeindex==false){
			nowindex.innerHTML="main.readme";
			readmeindex=!readmeindex;
		} else {
			nowindex.innerHTML="main";
			readmeindex=!readmeindex;
		}
	});


	$( "#readmeArrow" ).mousedown(function() {
		if(readmeindex==false){
			nowindex.innerHTML="main.readme";
			readmeindex=!readmeindex;
		} else {
			nowindex.innerHTML="main";
			readmeindex=!readmeindex;
		}
	});

	$( "#typefontbutton" ).mousedown(function() {
		if(typeindex==false){
			nowindex.innerHTML="main.typecode";
			customcursor.style.color="#33FF42";
			typeindex=!typeindex;
		} else {
			nowindex.innerHTML="main";
			typeindex=!typeindex;
			customcursor.style.color="black";
		}
	});


	$( "#closetypepage" ).mousedown(function() {
		if(typeindex==false){
			nowindex.innerHTML="main.typecode";
			typeindex=!typeindex;
			customcursor.style.color="#33FF42";
		} else {
			nowindex.innerHTML="main";
			typeindex=!typeindex;
			customcursor.style.color="black";
		}
	});




  	var element = document.querySelector('pre');
	AsciiMorph(element, {x: 0,y: 0});
	AsciiMorph.render(asciis[0]);


	var currentIndex = 2;

	setTimeout(function() {
	  AsciiMorph.morph(asciis[1]);
	}, 1000);

	setInterval(function() {
	  AsciiMorph.morph(asciis[currentIndex]);
	  currentIndex++;
	  currentIndex%= asciis.length;
	}, 3000);

	(function(seconds) {
    var refresh,       
        intvrefresh = function() {
            clearInterval(refresh);
            refresh = setTimeout(function() {
               location.href = location.href;
               
            }, seconds * 1000);


        };

    $(document).on('keypress mousemove', function() { intvrefresh() });
    intvrefresh();


}(15)); 



});


