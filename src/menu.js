var myLessonItem = {
  'id': 'myLesson',
  'title': chrome.i18n.getMessage('myLesson', []),
  'contexts': ['browser_action']
}

var myLessonMenuId = chrome.contextMenus.create(myLessonItem)

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

function menuHandler (info) {
  switch(info.menuItemId) {
    case myLessonMenuId:
      myLessonAction()
      break
    case gotoMenuId:
      gotoAction()
      break
    case aboutMenuId:
      aboutAction()
      break
  }
}

function myLessonAction () {
  var myLessonTab = {
    'url': chrome.i18n.getMessage('myLesson_url', [])
  }
  chrome.tabs.create(myLessonTab)
}

function gotoAction () {
  var lessonNumber = 0
  lessonNumber = Number(prompt(chrome.i18n.getMessage('goto_prompt', [])))
  if (lessonNumber >= MIN_LESSON_ID && lessonNumber < MAX_LESSON_ID) {
    lesson.id = lessonNumber
  }
  lesson.refresh()
  lesson.save()
}

function aboutAction () {
  var aboutTab = {
    'url': chrome.i18n.getMessage('about_url', [])
  }
  chrome.tabs.create(aboutTab)
}

chrome.contextMenus.onClicked.addListener(menuHandler)
