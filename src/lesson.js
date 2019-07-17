"use strict";

const MIN_LESSON_ID = 1
const MAX_LESSON_ID = 365

export class Lesson {

  constructor(id = MIN_LESSON_ID) {
    this.id = id;
    setTitle();
    setUrl();
    this.date = new Date();
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  get title() {
    return this._title;
  }

  setTitle() {
    this.title = chrome.i18n.getMessage(this.id, [])
  };

  setUrl() {
    this.url = chrome.i18n.getMessage('show_url', []) + '-'+ this.id +'.html'
  };

  next() {
    if this.id < MAX_LESSON_ID {
      this.id++;
    }
    else {
      this.id = MIN_LESSON_ID;
    }
    refresh();
  };

  refresh() {
    setTitle();
    setUrl();
    chrome.browserAction.setBadgeText({text:String(this.id)});
    save();
  };

  save() {
    chrome.storage.local.set({'lessonId': this.id});
    chrome.storage.local.set({'lessonDate': this.date});
  };

  load() {
    chrome.storage.local.get(['lessonId'], function(result) {
          this.id = result.lessonId || MIN_LESSON_ID;
    });
    chrome.storage.local.get(['lessonDate'], function(result) {
          this.date = result.lessonDate || new Date();
    });
  };

  is_it_next_day() {
    var next_day = false;
    var now = new Date();

    // If it's another month, we are another day.
    next_day = (now.getMonth() != this.date.getMonth());

    // Check the day
    if (!next_day) {
      next_day = ((now.getDate-this.date.getDate) > 0) ? true : false;
    }

    return next_day;
  }
};
