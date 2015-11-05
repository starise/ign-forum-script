// ==UserScript==
// @name         IGN Forum Background Change
// @namespace    https://github.com/starise/ign-forum-script
// @version      0.2.0
// @author       starise
// @match        *://it.ign.com/forum/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/starise/ign-forum-script/master/ignForum.user.js
// @updateURL    https://raw.githubusercontent.com/starise/ign-forum-script/master/ignForum.user.js
// ==/UserScript==

var ignForum = {

  el: {
    body: $('body'),
    container: $('div.loginButton_mobile, #forumbar, #headerMover, #modbar'),
    pageContent: $('.pageContent'),
    primaryContent: $('.primaryContent'),
    discussionList: $('.sectionMain, .discussionListItem'),
  },

  init: function() {
    ignForum.blackTheme();
  },

  blackTheme: function() {
    ignForum.el.body.css('background-color', '#000');
    ignForum.el.container.css('max-width', '1100px');
    ignForum.el.pageContent.css('background-color', '#f1f1f1');
    ignForum.el.primaryContent.css('background-color', '#f1f1f1');
    ignForum.el.discussionList.css('background-color', '#f1f1f1');
  },

};

ignForum.init();
