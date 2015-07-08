// ==UserScript==
// @name            Google Calendar Weekend Shade
// @description     Makes the weekends coloured a light grey
// @icon            https://raw.githubusercontent.com/henrylawson/gcalendar-weekend-shade/master/gcalendar-weekend-shade.user.jpg
//
// @author          Henry Lawson
// @namespace       https://github.com/henrylawson/gcalendar-weekend-shade
// @downloadURL     https://github.com/henrylawson/gcalendar-weekend-shade/raw/master/gcalendar-weekend-shade.user.js
//
// @match           https://www.google.com/calendar/*
// @match           http://www.google.com/calendar/*
//
// @require         https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
//
// @version         1.0
// @updateURL       https://github.com/henrylawson/gcalendar-weekend-shade/raw/master/gcalendar-weekend-shade.user.js
// ==/UserScript==

(function() {
  var css = [
    "/* weekends on main calendar */",
    "  .st-bg:nth-child(6), .st-bg:nth-child(7),",
    "  .st-dtitle:nth-child(6), .st-dtitle:nth-child(7),",
    "  /* weekends on week calendar */",
    "  .tg-weekend {",
    "    background-color: #EEEEEE !important;",
    "  }"
  ].join("\n");

  if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
  } else if (typeof PRO_addStyle != "undefined") {
    PRO_addStyle(css);
  } else if (typeof addStyle != "undefined") {
    addStyle(css);
  } else {
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
      heads[0].appendChild(node);
    } else {
      // no head yet, stick it whereever
      document.documentElement.appendChild(node);
    }
  }
})();
