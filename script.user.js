// ==UserScript==
// @name         Auto-Twitch-Channel-Point-Clicker
// @namespace    http://pjortiz.github.io
// @version      1
// @resource     icon https://i.imgur.com/Jks7wvm.png
// @description  Auto Twitch.tv channel point clicker
// @author       Ortiz, Peter
// @match        https://www.twitch.tv/*
// @updateURL    https://pjortiz.github.io/Auto-Twitch-Channel-Point-Clicker/script.meta.js
// @downloadURL  https://pjortiz.github.io/Auto-Twitch-Channel-Point-Clicker/script.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

const containerQuery = ".chat-input__buttons-container"
const claimButtonQuery = "[aria-label^='Claim Bonus']";

function callback(mutationList) {
  mutationList.forEach(function(mutation) {
    let claimButton = mutation.target.querySelector(claimButtonQuery);
    if(claimButton) {
      claimButton.click();
      console.log('Points Auto Claimed!');
    } else {
      console.log('No points to be claimed.');
    }
  });
}

let observer = new MutationObserver(callback);
let container;

while(document.readyState !== 'complete' && !(container = document.querySelector(containerQuery))) {
  console.log('Document not ready');
}

observer.observe(container, {childList: true, subtree: true});
