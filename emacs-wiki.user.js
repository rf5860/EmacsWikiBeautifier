// ==UserScript==
// @name          Emacs Wiki Beautifier
// @description	  Beautifies the Emacs Wiki Page
// @include       http://www.emacswiki.org*
// @include       http://emacswiki.org*
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
input[name=sa] {\
	-moz-box-shadow:inset 0px 1px 0px 0px #bbdaf7;\
	-webkit-box-shadow:inset 0px 1px 0px 0px #bbdaf7;\
	box-shadow:inset 0px 1px 0px 0px #bbdaf7;\
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #79bbff), color-stop(1, #378de5) );\
	background:-moz-linear-gradient( center top, #79bbff 5%, #378de5 100% );\
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#79bbff\', endColorstr=\'#378de5\');\
	background-color:#79bbff;\
	-moz-border-radius:6px;\
	-webkit-border-radius:6px;\
	border-radius:6px;\
	border:1px solid #2f74ba;\
	display:inline-block;\
	color:#ffffff;\
	font-family:arial;\
	font-size:15px;\
	font-weight:bold;\
	padding:6px 24px;\
	text-decoration:none;\
	text-shadow:1px 1px 0px #528ecc;\
}.classname:hover {\
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #378de5), color-stop(1, #79bbff) );\
	background:-moz-linear-gradient( center top, #378de5 5%, #79bbff 100% );\
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#378de5\', endColorstr=\'#79bbff\');\
	background-color:#378de5;\
}.classname:active {\
	position:relative;\
	top:1px;\
}\
');
$('.logo').remove()