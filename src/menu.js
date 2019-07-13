var showItem = {
  'id': 'show',
  'title': chrome.i18n.getMessage('show', []),
  'contexts': ['page_action']
}
chrome.contextMenus.create(showItem)

var gotoItem = {
  'id': 'goto',
  'title': chrome.i18n.getMessage('goto', []),
  'contexts': ['page_action']
}
chrome.contextMenus.create(gotoItem)

var aboutItem = {
  'id': 'about',
  'title': chrome.i18n.getMessage('about', []),
  'contexts': ['page_action']
}
chrome.contextMenus.create(aboutItem)
