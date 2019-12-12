import React, { Component, useState } from 'react';
import {useSpring, animated} from 'react-spring';


const $ = window.$;

const description ="dasdas";




class FontClass {
  constructor(click, name, valuename, link, desc) {
    this.name = name;
    this.valuename = valuename;
    this.desc = desc;
    this.link = link;
    this.click = click;
  }


  changeFont = () => {
    $("body").css("font-family", this.valuename);
    $("#description").html(this.desc);
    $("#link").html(this.link);
    $("button").css("font-family", this.valuename);
    $("#link").attr("href", this.link);
    $(".ascii-element").css("font-family", this.valuename);
    $(".textarea").css("font-family", this.valuename);
    $(".preview").css("font-family", this.valuename);
    document.getElementById('rightfooter').innerHTML="body.fontfamily="+this.valuename;
  //   document.getElementById('fakeFABL').style.width=$("#fontarraybuttonleft").width()+"px";
  // document.getElementById('fakeFABL').style.height=$("#fontarraybuttonleft").height()+"px";
  // document.getElementById('fakeFABR').style.width=$("#fontarraybuttonright").width()*0.9+"px";
  // document.getElementById('fakeFABR').style.height=$("#fontarraybuttonright").height()+"px";

    
    setTimeout(() => {
    this.changeStyle();;
    },   100);

  }

  changeStyle = () => {
    document.getElementById('arraymain').style.width=window.innerWidth-$("#fontarraybuttonright").width()-$("#fontarraybuttonright").width()+"px";
    document.getElementById('arraymain').style.marginLeft=$("#fontarraybuttonleft").width()+"px";
    document.getElementById('description').style.height=window.innerHeight-$("#arraycarrier").height()-$("#footer").height()-100+"px";
    
    document.getElementById('descontainer').style.height=window.innerHeight-$("#arraycarrier").height()-$("#footer").height()-100+"px";
    document.getElementById('leftreadme').style.marginTop=$("#readmebutton").height()+"px";
    document.getElementById('leftreadme').style.height=window.innerHeight*0.9-$("#readmebutton").height()+"px";
    document.getElementById('rightreadme').style.height=window.innerHeight-$("#readmeArrow").height()-window.innerHeight*0.05+"px";
    
    document.getElementById('typewhitebackground').style.width=$("#typefontbutton").width()+"px";
    document.getElementsByClassName('CodeMirror cm-s-custom-0')[0].style.width=window.innerWidth-$("#typefontbutton").width()+"px";
    



  }

}



//var a = new FontClass ("","","","");
var fira = new FontClass(false, "Fria Code", "Fira Code","https://fonts.google.com/specimen/Fira+Code?selection.family=Fira+Code", "Programmers use a lot of symbols, often encoded with several characters. For the human brain, sequences like ->, <= or := are single logical tokens, even if they take two or three characters on the screen. Your eye spends a non-zero amount of energy to scan, parse and join multiple characters into a single logical one. Ideally, all programming languages should be designed with full-fledged Unicode symbols for operators, but that’s not the case yet.\n\nFira Code is an extension of the Fira Mono font containing a set of ligatures for common programming multi-character combinations. This is just a font rendering feature: underlying code remains ASCII-compatible. This helps to read and understand code faster. For some frequent sequences like .. or //, ligatures allow us to correct spacing.");
var cousine = new FontClass(false,"Cousine", "Cousine" , "https://fonts.google.com/specimen/Cousine?selection.family=Cousine", "Cousine was designed by Steve Matteson as an innovative, refreshing sans serif design that is metrically compatible with Courier New™. Cousine offers improved on-screen readability characteristics and the pan-European WGL character set and solves the needs of developers looking for width-compatible fonts to address document portability across platforms. Updated in May 2013 with improved hinting and released under the Apache 2.0 license.")
var DejaVuSansMono = new FontClass(false,"DejaVu Sans Mono", "DejaVuSansMono" , "https://dejavu-fonts.github.io/", "The DejaVu fonts are a font family based on the Vera Fonts. Its purpose is to provide a wider range of characters while maintaining the original look and feel through the process of collaborative development, under a Free license.")
var Inconsolata = new FontClass (false,"Inconsolata-g","Inconsolata","https://leonardo-m.livejournal.com/77079.html","I use the free Inconsolata font (by Raph Levien) to program and as shell font, and I like it a lot. I have seen this blog post: \"Adding straight single and double quotes to Inconsolata\", that offers Inconsolata-dz:http://nodnod.net/2009/feb/12/adding-straight-single-and-double-quotes-inconsola/So I've uses FontForge to modify more his Inconsolata version, to fix some of the things I don't like of Inconsolata. This is the result, my Inconsolata-g. \n My changes: - Single and double quotes ' and \" are now straight, this comes from Inconsolata-dz. - , . ' are a bit more visible/thick, because such symbols are really important in C-like languages, and you need to see them well. (Now the comma of , is a bit bigger than the comma of ; but I don't care of such useless symmetries, I use this font for practical purposes)....(check more in his website)");
var SourceCodePro = new FontClass (false,"SourceCodePro","SourceCodePro","https://github.com/adobe-fonts/source-code-pro","SourceCodePro is a set of OpenType fonts that have been designed to work well in user interface (UI) environments.");
var UbuntuMono = new FontClass (false,"Ubuntu Mono","Ubuntu Mono","https://fonts.google.com/specimen/Ubuntu+Mono?selection.family=Ubuntu+Mono","The Ubuntu Font Family are a set of matching new libre/open fonts in development during 2010-2011. The development is being funded by Canonical Ltd on behalf the wider Free Software community and the Ubuntu project. The technical font design work and implementation is being undertaken by Dalton Maag. Both the final font Truetype/OpenType files and the design files used to produce the font family are distributed under an open licence and you are expressly encouraged to experiment, modify, share and improve. The new Ubuntu Font Family was started to enable the personality of Ubuntu to be seen and felt in every menu, button and dialog. The typeface is sans-serif, uses OpenType features and is manually hinted for clarity on desktop and mobile computing screens. The scope of the Ubuntu Font Family includes all the languages used by the various Ubuntu users around the world in tune with Ubuntu's philosophy which states that every user should be able to use their software in the language of their choice. So the Ubuntu Font Family project will be extended to cover many more written languages. Ubuntu and Canonical are registered trademarks of Canonical Ltd.");
var HackRegular = new FontClass (false,"Hack Regular","Hack Regular","https://github.com/source-foundry/Hack","The work in the Hack project is Copyright 2018 Source Foundry Authors and licensed under the MIT License The work in the DejaVu project was committed to the public domain. Bitstream Vera Sans Mono Copyright 2003 Bitstream Inc. and licensed under the Bitstream Vera License with Reserved Font Names \"Bitstream\" and \"Vera\"");
var IBMPlexMono= new FontClass (false,"IBM Plex Mono","IBM Plex Mono","https://fonts.google.com/specimen/IBM+Plex+Mono","IBM Plex™ is an international typeface family designed by Mike Abbink, IBM BX&D, in collaboration with Bold Monday, an independent Dutch type foundry. Plex was designed to capture IBM’s spirit and history, and to illustrate the unique relationship between mankind and machine—a principal theme for IBM since the turn of the century. The result is a neutral, yet friendly Grotesque style typeface that includes a Sans, Sans Condensed, Mono, and Serif and has excellent legibility in print, web and mobile interfaces. Plex’s three designs work well independently, and even better together. Use the Sans as a contemporary compadre, the Serif for editorial storytelling, or the Mono to show code snippets. The unexpectedly expressive nature of the italics give you even more options for your designs.");
var iosevkamedium = new FontClass (false,"iosevka medium","iosevka medium","https://typeof.net/Iosevka/","Iosevka is a slender monospace sans-serif and slab-serif typeface inspired by Pragmata Pro, M+ and PF DIN Mono, designed to be the ideal font for programming.");
var MesloLGMregular = new FontClass (false,"MesloLGM-Regular","MesloLGMregular","https://github.com/andreberg/Meslo-Font","Meslo LG is a customized version of Apple’s Menlo-Regular font(which is a customized Bitstream Vera Sans Mono). In Snow Leopard, Menlo-Regular is now the preferred and default font for Apple’s developer tools and also the Terminal (unless you changed the font settings for these apps yourself before upgrading to SL – your changes will stay in place)");
var PTMono = new FontClass (false,"PT Mono","PT Mono","https://fonts.google.com/specimen/PT+Mono?selection.family=PT+Mono","PT Mono was developed for specific uses in forms, tables, worksheets and other contexts. Equal character widths are very helpful in setting complex documents, as with such a font you may easily calculate size of entry fields, column widths in tables and so on. One of the most important areas of use is in governmental web sites where visitors have to fill different forms. Currently PT Mono consists of just one Regular style. PT Mono was designed by Alexandra Korolkova with participation of Isabella Chaeva and with the financial support of Google Web Fonts.");
var mplus1mmedium = new FontClass (false,"M+ 1M","mplus-1m-medium","http://mplus-fonts.osdn.jp/about-en.html","The M PLUS Outline Fonts Project develops a superfamily set of several families: 4 families with proportional Latin, 3 with fixed-halfwidth Latin, and 2 with fixed-fullwidth Japanese Kana variations. This set, M PLUS 1p, are fonts with proportional Latin and fixed-fullwidth Japanese, and 7 weights from Thin to Black. The Kana have contrasting straight lines and hand-drawn curves. The Latin is aimed to be a sophisticated and relaxed design.");
var RobotoMono = new FontClass (false,"Roboto Mono","Roboto Mono","https://fonts.google.com/specimen/Roboto+Mono?selection.family=Roboto+Mono","Roboto Mono is a monospaced addition to the Roboto type family. Like the other members of the Roboto family, the fonts are optimized for readability on screens across a wide variety of devices and reading environments. While the monospaced version is related to its variable width cousin, it doesn’t hesitate to change forms to better fit the constraints of a monospaced environment. For example, narrow glyphs like ‘I’, ‘l’ and ‘i’ have added serifs for more even texture while wider glyphs are adjusted for weight. Curved caps like ‘C’ and ‘O’ take on the straighter sides from Roboto Condensed. Special consideration is given to glyphs important for reading and writing software source code. Letters with similar shapes are easy to tell apart. Digit ‘1’, lowercase ‘l’ and capital ‘I’ are easily differentiated as are zero and the letter ‘O’. Punctuation important for code has also been considered. For example, the curly braces ‘{ }’ have exaggerated points to clearly differentiate them from parenthesis ‘( )’ and braces ‘[ ]’. Periods and commas are also exaggerated to identify them more quickly. The scale and weight of symbols commonly used as operators have also been optimized. To contribute, see github.com/google/roboto");
var MonoidRegular = new FontClass (false,"Monoid Regular","Monoid Regular","https://larsenwork.com/monoid/","Monoid is customizable and optimized for coding with bitmap-like sharpness at 12px/9pt even on low res displays.Semi-condensed and distinguishable glyphs with short ascenders + descenders, big apertures and supersized operators + punctuation.");
var CodeNewRoman = new FontClass (false,"Code New Roman","Code New Roman","https://www.fontspace.com/typostyle/code-new-roman","Code New Roman is aimed for use in programming environments and other circumstances where a monospaced font is specified. All characters have the same width, like old typewriters, making it a good choice for programmers. This font improved and target to Mac OS Western New Roman, MONACO, Windows Consolas/Lusida Consolas, ABeeZee and Bitstream Vera Sans Mono.This font display allowed a design with proportions closer to normal text than traditional monospaced fonts like Courier. This allows for more comfortably reading of extended text on screen. OpenType features include hanging or lining numerals; slashed, dotted and normal zeros; and alternative shapes for a number of lower-case letters. The look of text can be tuned to personal taste by varying the number of bars and waves.download latest version of CNR 2.1, It will resolve all problem in old versions of CNR. And Our recommendation is use more than 7px font size, thanks for being with us CNR v2.1 Stable bold/italic/bold italic coming soon Feel free, don't miss out your comment, It worth than donation");
var ProggyClean = new FontClass (false,"Proggy Clean","ProggyClean","https://proggyfonts.net/","The proggy fonts are a set of fixed-width screen fonts that are designed for code listings. They are distributed in Microsoft’s .fon format, the truetype (ttf) format, as well as XWindows (Linux/BSD…) pcf format. The .fon format works well with MS Visual Studio, a command prompt, Photoshop, etc. Some editors do not recognize .fon fonts, in which case you should use the ttf version (12pt PC, 16pt Mac). Each font only comes in one size that it looks good at. The ttf fonts should also be used at their intended point size as they are basically conversions of the pixel based bitmap versions. The fonts were optimized while coding in C or C++… for this reason, characters like the ‘*’ were placed vertically centered, as ‘*’ usually means dereference or multiply, but never ‘to the power of’ like in Fortran. The {}s are centered horizontally (as my coding style aligns braces vertically), the zero looks different from the capital oh, and there is never any confusion between ells, ones, and eyes. Additionally, the arithmetic operators (+ – * < >) are all axis aligned… unlike the last ones you just saw. Screenshots and individual font information is available in the download area.");
var VictorMonoRegular = new FontClass (false,"VictorMono Regular","VictorMonoRegular","https://rubjo.github.io/victor-mono/","Victor Mono is a free programming font with semi-connected cursive italics, symbol ligatures (!=, ->>, =>, ===, <=, >= ++) and Latin, Cyrillic and Greek characters. It was drawn from scratch as a pet project / experiment because there just wasn't any free or paid font that I found both readable, effective and elegant. The typeface is clean, crisp and narrow, with a large x-height and clear punctuation, making it legible and ideal for code. It comes in seven weights, and is available in Roman, Italic and Oblique styles.");
var HermitRegular = new FontClass (false,"Hermit Regular","Hermit Regular","https://pcaro.es/p/hermit/","Hermit is a monospace font designed to be clear, pragmatic and very readable. Its creation has been focused on programming. Every glyph was carefully planned and calculated, according to defined principles and rules. For this reason, Hermit is coherent and regular. Symbols stand out from common text. Dots and commas are easily seen, and operators are clear even when not surrounded by spaces. Similar characters have been designed to be very distinguishable from each other.");
var VGA = new FontClass (false,"VGA","VGA","https://www.cufonfonts.com/font/perfect-dos-vga-437","The PS/2 standards further modified the system font with a character cell 16 pixels tall, a squarer capital 'O' vs. a rounded zero (now dotted rather than slashed), and so on. The 8x16 version is used in MCGA text mode.  VGA keeps that one, but it also has its own 9x16 version, which once again has wider forms for specific characters and generates the 9th column MDA-like.  The 9x16 font is the VGA default, and that's the one most widely associated with ASCII/ANSI art on the PC... and probably with the entire DOS era in general.");
var NotCourierSans = new FontClass (false,"Not Courier Sans","NotCourierSans","http://osp.kitchen/foundry/notcouriersans/","NotCourierSans is a re-interpretation of Nimbus Mono whose design began in Wroclaw at the occasion of the Libre Graphics Meeting 2008.");
var Nouveau_IBM = new FontClass (false,"Nouveau IBM","Nouveau_IBM","https://www.dafont.com/nouveau-ibm.font","TTF and Unicode version of the IBM PC font. Good for terminal programs. Size 12 represents the original.");
var ShareTechMono = new FontClass (false,"Share Tech Mono","Share Tech Mono","https://fonts.google.com/specimen/Share+Tech+Mono", "Share Tech Mono is a monospaced sans serif, based on the Share family. There is also Share Tech, a proportionally spaced version.");
var NanumGothicCoding = new FontClass (false,"Nanum Gothic Coding","Nanum Gothic Coding","https://fonts.google.com/specimen/Nanum+Gothic+Coding","Nanum Gothic Coding is a contemporary monospaced sans-serif typeface with a warm touch, and it is expertly hinted for screen use. It is part of the Nanum fonts (나눔글꼴) – a set of high quality Unicode fonts designed especially for the Korean-language script “Hangeul” that also support Latin. Designed by Sandoll Communications (산돌 커뮤니케이션) and Fontrix (폰트릭스,) and published by Naver (네이버.)");
var AnonymousPro = new FontClass (false,"Anonymous Pro","Anonymous Pro","https://fonts.google.com/specimen/Anonymous+Pro?selection.family=Anonymous+Pro","Anonymous Pro is a family of four fixed-width fonts designed especially with coding in mind. It is inspired by Anonymous 9, a freeware Macintosh bitmap font developed in the mid-'90s by Susan Lesch and David Lamkins, that was intended as a more legible alternative to Monaco, the fixed-width Macintosh system font. Characters that could be mistaken for one another (O, 0, I, l, 1, etc.) have distinct shapes to make them easier to tell apart in the context of source code. The regular and bold styles have embedded bitmaps for the smallest sizes (10-13 ppem.)");
var consola = new FontClass (false,"consola","consola","https://docs.microsoft.com/en-us/typography/font-list/consolas","Consolas is aimed for use in programming environments and other circumstances where a monospaced font is specified. All characters have the same width, like old typewriters, making it a good choice for personal and business correspondance. The improved Windows font display allowed a design with proportions closer to normal text than traditional monospaced fonts like Courier. This allows for more comfortably reading of extended text on screen. OpenType features include hanging or lining numerals; slashed, dotted and normal zeros; and alternative shapes for a number of lowercase letters. The look of text can be tuned to personal taste by varying the number of bars and waves.");
var D2Coding = new FontClass (false,"D2Coding","D2Coding","https://github.com/naver/d2codingfont","D2 Coding 글꼴은 나눔바른고딕을 바탕으로 개발자의 코딩을 위해 가독성 및 유사 문자간 변별력 뿐만 아니라 디자인적으로 한글과의 조화를 고려해 최적화시킨 글꼴입니다. D2 Coding 글꼴은 코딩시 유사한 형태의 영문/숫자 뿐만 아니라 한글/특수문자 등에 대한 변별력과 가독성을 강화하였습니다. 또한 고정폭 글꼴로 제작이 되어 어떤 개발환경에서도 자간과 행간을 유지하도록 디자인되어 있습니다.");
var Apl2741 = new FontClass (false,"Apl2741","Apl2741","http://apl385.com/fonts/index.html","Historic interest only. This was hand digitised as a PostScript Type-3 font from an original 2741 golf-ball salvaged from an IBM selectric typewriter. Looks good on paper, but poor on screen as it is lightweight and italic. The hinting is rudimentary and even with ClearType it is hard to read!");
var CutiveMono = new FontClass (false,"Cutive Mono","Cutive Mono","https://fonts.google.com/specimen/Cutive+Mono?selection.family=Cutive+Mono","The design of Cutive, and this monospace sister family Cutive Mono, is based on a number of classic typewriter typefaces, in particular the faces of IBM's 'Executive,' and the older 'Smith-Premier.' In Cutive these old faces re-emerge as webfonts that are useful for adding character to body texts as well as in larger sizes for headers and display.");


function handleClick(e, data){
    // access to e.target here
    console.log(data);
}

const Fontarray = ({style}) => {


	return(	

		<animated.div className="nav-wrapper">

    <div id="arraymain">

			<div id="arraycarrier">
		  	<div class="arraytitle">new fontArray=[</div>
        <button className="fontarray" onClick={AnonymousPro.changeFont} >{AnonymousPro.name}</button>,
        <button className="fontarray" onClick={Apl2741.changeFont} >{Apl2741.name}</button>,
        <button className="fontarray" onClick={CodeNewRoman.changeFont} >{CodeNewRoman.name}</button>,
  			<button className="fontarray" style={{backgroundColor: "red"}} onClick={cousine.changeFont} >{cousine.name}</button>,
        <button className="fontarray" onClick={consola.changeFont} >{consola.name}</button>,
        <button className="fontarray" onClick={CutiveMono.changeFont} >{CutiveMono.name}</button>,
  			<button className="fontarray" onClick={DejaVuSansMono.changeFont} >{DejaVuSansMono.name}</button>,
        <button className="fontarray" onClick={D2Coding.changeFont} >{D2Coding.name}</button>,
        <button className="fontarray" onClick={fira.changeFont} >{fira.name}</button>,
        <button className="fontarray" onClick={HackRegular.changeFont} >{HackRegular.name}</button>,
        <button className="fontarray" onClick={HermitRegular.changeFont} >{HermitRegular.name}</button>,
  			<button className="fontarray" onClick={Inconsolata.changeFont} >{Inconsolata.name}</button>,
  			<button className="fontarray" onClick={IBMPlexMono.changeFont} >{IBMPlexMono.name}</button>,
  			<button className="fontarray" onClick={iosevkamedium.changeFont} >{iosevkamedium.name}</button>,
        <button className="fontarray" onClick={NanumGothicCoding.changeFont} >{NanumGothicCoding.name}</button>,
        <button className="fontarray" onClick={NotCourierSans.changeFont} >{NotCourierSans.name}</button>,
        <button className="fontarray" onClick={Nouveau_IBM.changeFont} >{Nouveau_IBM.name}</button>,
        <button className="fontarray" onClick={ProggyClean.changeFont} >{ProggyClean.name}</button>,
        <button className="fontarray" onClick={PTMono.changeFont} >{PTMono.name}</button>,
        <button className="fontarray" onClick={MesloLGMregular.changeFont} >{MesloLGMregular.name}</button>,
        <button className="fontarray" onClick={MonoidRegular.changeFont} >{MonoidRegular.name}</button>,
        <button className="fontarray" onClick={mplus1mmedium.changeFont} >{mplus1mmedium.name}</button>,
        <button className="fontarray" onClick={RobotoMono.changeFont} >{RobotoMono.name}</button>,
        <button className="fontarray" onClick={ShareTechMono.changeFont} >{ShareTechMono.name}</button>,
        <button className="fontarray" onClick={SourceCodePro.changeFont} >{SourceCodePro.name}</button>,			
        <button className="fontarray" onClick={UbuntuMono.changeFont} >{UbuntuMono.name}</button>,
  			<button className="fontarray" onClick={VictorMonoRegular.changeFont} >{VictorMonoRegular.name}</button>,
  			<button className="fontarray" onClick={VGA.changeFont} >{VGA.name}</button><div class="arraytitle">]</div>
  		</div>

      <div id="descontainer">
        <a target="_blank" href={cousine.link}id="link">
          {cousine.link}
        </a>
        <div id = "lastcol">
          <div class="juseok" id="leftcor">
            {"\\*"}
          </div>
              
          <div id="description">
            {cousine.desc}
          </div>

          <div class="juseok" id="rightcor">
            {"*/"}
          </div>
        </div>
      </div>
    </div>

	</animated.div>	



	);
	
}



export default Fontarray;