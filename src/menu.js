var gotoItem = {
  'id': 'goto',
  'title': chrome.i18n.getMessage('goto', []),
  'contexts': ['browser_action']
}
var gotoMenuId = chrome.contextMenus.create(gotoItem)

var aboutItem = {
  'id': 'about',
  'title': chrome.i18n.getMessage('about', []),
  'contexts': ['browser_action']
}
var aboutMenuId = chrome.contextMenus.create(aboutItem)

function menuHandler(info) {
  switch(info.menuItemId) {
    case gotoMenuId:
      gotoAction()
    break
    case aboutMenuId:
      aboutAction()
    break
  }
}

function gotoAction() {
  var lessonNumber = 0
  do {
    lessonNumber = Number(prompt(chrome.i18n.getMessage('goto_prompt', [])))
  } while (lessonNumber < MIN_LESSON_ID || lessonNumber > MAX_LESSON_ID)
  lesson.id = lessonNumber
  lesson.refresh();
  lesson.save();
}

function aboutAction() {
    var about_tab = {
      'url' : chrome.i18n.getMessage('about_url', [])
    }
    chrome.tabs.create(about_tab)
}

chrome.contextMenus.onClicked.addListener(menuHandler)
