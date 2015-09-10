(function(){

  // tab がアップデートされたとき
  chrome.tabs.onUpdated.addListener(function(tabId){
      // ページアクションを出す
      chrome.pageAction.show(tabId);
  })

  // ページアクションアイコンをクリックしたときの挙動
  chrome.pageAction.onClicked.addListener(function(tab){
    chrome.tabs.insertCSS(tab.id, { file:"style.css" });
    chrome.tabs.executeScript(null,{ file: "jquery-1.11.3.min.js"},
           function(){
              chrome.tabs.executeScript(null,{file: "script.js"});
          });
    });

})();

