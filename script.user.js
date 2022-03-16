// ==UserScript==
// @name         Auto-Twitch-Channel-Point-Clicker
// @namespace    http://tampermonkey.net/
// @version      1
// @resource     icon https://i.imgur.com/Jks7wvm.png
// @description  Auto Twitch.tv channel point clicker
// @author       Ortiz, Peter
// @match        https://www.twitch.tv/*
// @website      https://pjortiz.github.io/Auto-Twitch-Channel-Point-Clicker/
// @updateURL    https://pjortiz.github.io/Auto-Twitch-Channel-Point-Clicker/script.meta.js
// @downloadURL  https://pjortiz.github.io/Auto-Twitch-Channel-Point-Clicker/script.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

const claimButtonQuery = "button [aria-label^='Claim Bonus']";

function callback(mutationList) {
  mutationList.forEach(function(mutation) {
    let claimButton = document.querySelector(claimButtonQuery);
    if(claimButton) {
      claimButton.click();
      console.log('Points Auto Claimed');
    }
  });
}

var observer = new MutationObserver(callback);
observer.observe(document.body, {childList: true, subtree: true});
