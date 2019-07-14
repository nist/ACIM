var showItem = {
  'id': 'show',
  'title': chrome.i18n.getMessage('show', []),
  'contexts': ['page_action']
}
var showMenuId = chrome.contextMenus.create(showItem)

var gotoItem = {
  'id': 'goto',
  'title': chrome.i18n.getMessage('goto', []),
  'contexts': ['page_action']
}
var gotoMenuId = chrome.contextMenus.create(gotoItem)

var aboutItem = {
  'id': 'about',
  'title': chrome.i18n.getMessage('about', []),
  'contexts': ['page_action']
}
var aboutMenuId = chrome.contextMenus.create(aboutItem)

function menuHandler(info) {
  switch(info.menuItemId) {
    case showMenuId:
      showAction()
    break
    case gotoMenuId:
      gotoAction()
    break
    case aboutMenuId:
      aboutAction()
    break
  }
}

function showAction() {
  var show_tab = {
    'url' : chrome.i18n.getMessage('show_url', [])
  }
  chrome.tabs.create(show_tab)
}

function gotoAction() {
  var lessonNumber = 0
  do {
    lessonNumber = prompt(chrome.i18n.getMessage('goto_prompt', []))
  } while (lessonNumber < 1 || lessonNumber > 365)
}

function aboutAction() {
    var about_tab = {
      'url' : chrome.i18n.getMessage('about_url', [])
    }
    chrome.tabs.create(about_tab)
}

chrome.contextMenus.onClicked.addListener(menuHandler)
