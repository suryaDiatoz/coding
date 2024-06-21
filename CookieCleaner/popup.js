document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clearCookies").addEventListener("click", async () => {


    chrome.tabs.query({ active: true, currentWindow: true }, async (tabsOrNull) => {
      if (tabsOrNull === null) {
        console.error("Error: tabsOrNull is null");
        return;
      }
      const tabs = tabsOrNull;
      // ... rest of the code
    });



  });
});

function clearCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
}