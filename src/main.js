'use strict'

// Restart where we left
let lesson = new Lesson()

lesson.load()

if (lesson.isNewDay()) {
  lesson.next()
}

lesson.refresh()

lesson.save()

chrome.browserAction.onClicked.addListener(function show () {
  var showTab = {
    'url': lesson.url
  }
  chrome.tabs.create(showTab)
})

chrome.idle.onStateChanged.addListener(function (newState) {
  // FIXME Refactor
  switch (newState) {
    case 'active' :
      lesson.load()

      if (lesson.isNewDay()) {
        lesson.next()
      }

      lesson.refresh()

      lesson.save()
      break
  }
})
