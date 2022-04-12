chrome.action.onClicked.addListener(async (tab) => {
  if (!tab?.url?.includes("chrome://")) {
    if (tab.id === undefined) return;
    const { id } = tab;

    const result = await chrome.scripting.executeScript({
      target: { tabId: id },
      func: () => {
        const metaCheckManRootId = "metaCheckManRoot";
        const app = document.getElementById(metaCheckManRootId);
        return app ? false : true;
      },
    });
    // 初回clickのみvendor.jsを読み込む,2回目以降は不要
    const isFirst = result[0].result;
    chrome.scripting.executeScript({
      target: { tabId: id },
      files: isFirst ? ["./js/vendor.js", "./js/popup.js"] : ["./js/popup.js"],
    });
  }
});
