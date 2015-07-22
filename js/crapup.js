
/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
 
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    renderStatus('Hi, I crapped on your webpage, happy ?');
	
	//allowcrap = !allowcrap;
	chrome.tabs.executeScript(null, { file: "js/libs/jquery-2.1.4.min.js" }, function(){
	  chrome.tabs.executeScript(null, { file: "js/crapup_scripts.js"});
	});
});