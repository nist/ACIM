// Load lessons titles


// Initialize current lesson
const MIN_LESSON_ID = 1
const MAX_LESSON_ID = 365

var lesson = {
  id: 1,
  title: 'Test',
  url: '',
  day: '',
  refresh: function() {
    this.url = chrome.i18n.getMessage('show_url', []) + '-'+ this.id +'.html'
    chrome.browserAction.setBadgeText({text:String(this.id)})
  }
}

// Load current lesson
if (localStorage.hasOwnProperty('lessonId')) {
  chrome.storage.local.get(['lessonId'], function(result) {
        lesson.id = result.key
  });
} else {
  lesson.id = 1
}

// If we are a following day, go to next lesson.
if (localStorage.hasOwnProperty('lastDay')) {
  chrome.storage.local.get(['lastDay'], function(result) {
        lesson.day = result.key
  });
} else {
  lesson.day = 1
}
chrome.storage.sync.set({'lessonId': lesson.id})

lesson.refresh()
