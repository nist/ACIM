// Load lessons titles


// Initialize current lesson
const MIN_LESSON_ID = 1
const MAX_LESSON_ID = 365

var lesson = {
  id: MIN_LESSON_ID,
  title: 'Test',
  url: '',
  day: '',
  refresh: function() {
    this.url = chrome.i18n.getMessage('show_url', []) + '-'+ this.id +'.html'
    chrome.browserAction.setBadgeText({text:String(this.id)})
    chrome.storage.local.set({'lessonId': lesson.id})
  }
}

// Load current lesson
if (localStorage.hasOwnProperty('lessonId')) {
  chrome.storage.local.get(['lessonId'], function(result) {
        lesson.id = result.lessonId || MIN_LESSON_ID
  });
} else {
  lesson.id = MIN_LESSON_ID
}

// If we are a following day, go to next lesson.
if (localStorage.hasOwnProperty('lastDay')) {
  chrome.storage.sync.get(['lastDay'], function(result) {
        lesson.day = result.key
  });
} else {
  lesson.day = 1
}

lesson.refresh()

chrome.browserAction.onClicked.addListener(function show() {
  var show_tab = {
    'url' : lesson.url
  }
  chrome.tabs.create(show_tab)
});
