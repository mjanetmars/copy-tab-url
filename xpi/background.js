
// #region Add context menu

browser.contextMenus.create({ id: "copy-tab-url", title: "Copy Tab URL", contexts: ["tab"] });

// #endregion

// #region Copy URL to clipboard

browser.contextMenus.onClicked.addListener(async (info, tab) =>
{
  if (info.menuItemId === "copy-tab-url" && tab?.url)
  {
    try
    {
      await navigator.clipboard.writeText(tab.url);

      // Show notification
      browser.notifications.create({
        type: "basic",
        iconUrl: browser.runtime.getURL("copy_tab_url.svg"),
        title: "URL Copied",
        message: "The tab URL has been copied to the clipboard."
      });
    }
    catch (err)
    {
      browser.notifications.create({
        type: "basic",
        iconUrl: browser.runtime.getURL("copy_tab_url.svg"),
        title: "Error",
        message: "Could not copy the URL."
      });
    }
  }
});

// #endregion
