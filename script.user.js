// ==UserScript==
// @name         Auto-Twitch-Channel-Point-Clicker
// @namespace    https://pjortiz.github.io
// @version      1.0.0
// @icon         https://i.imgur.com/Jks7wvm.png
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

function getContainer(document, query) {
  return new Promise(resolve => {
    setTimeout((d, q) => {
      try {
        while(d.readyState !== 'complete' && !(d.querySelector(q))) {
          console.log('Document not ready');
        }
        resolve(d.querySelector(q))
      }	catch (error) {
        console.error(error);
      }
    }, 2000, document, query);
  });
}


async function initObserver() {  
  try {  
    
    function callback(mutationList) {
      mutationList.forEach(function(mutation) {
        let claimButton = mutation.target.querySelector(claimButtonQuery);
        if(claimButton) {
          claimButton.click();
          console.log('Points Auto Claimed!');
        } else {
          //console.log('No points to be claimed.');
        }
      });
    }

    let observer = new MutationObserver(callback);
    let container = await getContainer(document, containerQuery);
		
    
    observer.observe(container, {childList: true, subtree: true});
    
    console.log('Auto-Twitch-Channel-Point-Clicker loaded!');
  } catch (error) {
    console.log('Auto-Twitch-Channel-Point-Clicker failed to load!');
    console.error(error);
  }
  
}

initObserver();
