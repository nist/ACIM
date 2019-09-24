'use strict'

function initLesson () {
  lesson.load()

  if (lesson.isNewDay()) {
    lesson.next()
  }

  lesson.refresh()

  lesson.save()
}

// Restart where we left
let lesson = new Lesson()

initLesson()

chrome.browserAction.onClicked.addListener(function show () {
  var showTab = {
    'url': lesson.url
  }
  chrome.tabs.create(showTab)
})

chrome.idle.onStateChanged.addListener(function (newState) {
  switch (newState) {
    case 'active' :
      initLesson()
      break
  }
})
