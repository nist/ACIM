'use strict'
const MIN_LESSON_ID = 1
const MAX_LESSON_ID = 365

class Lesson {
  constructor (id = MIN_LESSON_ID) {
    this.id = id
    this.setTitle()
    this.setUrl()
    this.setDate()
  }

  setDate () {
    this.date = new Date()
  }

  setTitle () {
    this.title = chrome.i18n.getMessage(String(this.id), [])
  };

  setUrl () {
    this.url = chrome.i18n.getMessage('show_url', []) + '-' + this.id + '.html'
  }

  next () {
    if (this.id < MAX_LESSON_ID) {
      this.id++
    } else {
      this.id = MIN_LESSON_ID
    }
    this.refresh()
  }

  refresh () {
    this.setTitle()
    this.setUrl()
    this.setDate()
    chrome.browserAction.setBadgeText({ text: String(this.id) })
  }

  save () {
    localStorage['lessonId'] = String(this.id)
    localStorage['lessonDate'] = this.date
  }

  load () {
    this.id = Number(localStorage['lessonId']) || MIN_LESSON_ID;
    this.date = localStorage['lessonDate'] ? new Date(localStorage['lessonDate']) : new Date()
  }

  isNewDay () {
    var newDay = false
    var now = new Date()

    // If it's another month, we are another day.
    newDay = (now.getMonth() !== this.date.getMonth())

    // Check the day
    if (!newDay) {
      newDay = ((now.getDate() - this.date.getDate()) > 0)
    }

    return newDay
  }
};
