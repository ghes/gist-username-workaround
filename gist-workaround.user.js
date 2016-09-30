// ==UserScript==
// @name         Gist broken link workaround
// @namespace    https://github.com/ghes
// @version      0.1.0
// @description  fix renamed users' broken Gist links
// @author       Stuart P. Bentley (@stuartpb)
// @match        https://gist.github.com/*/*
// ==/UserScript==

// Copyright 2016 Stuart P. Bentley.
// This work may be used freely as long as this notice is included.
// The work is provided "as is" without warranty, express or implied.

var errCodeImg = document.getElementById("parallax_error_text");

if (errCodeImg && errCodeImg.alt.slice(0,3) == '404') {
  location.href = location.href.replace(/\/[^\/]*(\/[^\/]*)$/,'$1');
}
