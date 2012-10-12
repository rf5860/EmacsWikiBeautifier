// ==UserScript==
// @name          Emacs Wiki Beautifier
// @description	  Beautifies the Emacs Wiki Page
// @include       http://www.emacswiki.org*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// @author        WMA
// ==/UserScript==
// Style
GM_addStyle('\
a:link {\
	color: #7C7CBB;\
}\
a:visited {\
	color: #883F88;\
}\
body {\
	color: #979797;\
	background-color: #1A1616;\
}\
div.header h1 a, div.journal h1 a {\
	color: #754F4F;\
}\
div.toc {\
	background-color: #1E1E3D;\
}\
div.one {\
	background-color: #1E1E3D;\
}\
');
$('.logo').remove()