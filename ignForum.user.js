// ==UserScript==
// @name         IGN Forum Background Change
// @namespace    https://github.com/starise/ign-forum-script
// @version      0.1.0
// @author       starise
// @match        *://it.ign.com/forum/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/starise/ign-forum-script/master/ignForum.user.js
// @updateURL    https://raw.githubusercontent.com/starise/ign-forum-script/master/ignForum.user.js
// ==/UserScript==

var ignForum = {

  el: {
    body: $('body'),
    pageContent: $('.pageContent'),
    primaryContent: $('.primaryContent'),
    discussionList: $('.sectionMain, .discussionListItem'),
  },

  init: function() {
    ignForum.blackTheme();
  },

  blackTheme: function() {
    ignForum.el.body.css('background-color', '#000');
    ignForum.el.pageContent.css('background-color', '#f1f1f1');
    ignForum.el.primaryContent.css('background-color', '#f1f1f1');
    ignForum.el.discussionList.css('background-color', '#f1f1f1');
  },

};

ignForum.init();
