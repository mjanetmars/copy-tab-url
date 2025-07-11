/* This Source Code Form is subject to the terms of the Mozilla Public
 - License, v. 2.0. If a copy of the MPL was not distributed with this
 - file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* based on https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/background.js
     and on https://github.com/mdn/webextensions-examples/blob/master/context-menu-copy-link-with-types/clipboard-helper.js */

/* create context menu button */

browser.contextMenus.create(
{
  id: "copy-tab-url",
  title: "Copy Tab URL",
  contexts: ["tab"]
});

/* copy text */
browser.contextMenus.onClicked.addListener( (info, tab) =>
{
  /* when item is clicked */
  if (info.menuItemId === "copy-tab-url")
  {
    /* copies the text */
    function oncopy(event)
    {
      event.preventDefault();
      event.clipboardData.setData("text/plain", tab.url);
      
    }
    document.addEventListener("copy", oncopy, true);

    document.execCommand("copy");
  }
});