// ==UserScript==
// @name         IGN.it Forum Custom Theme
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
    discussionList: $('.sectionMain, .discussionListItem'),
    pageContent: $('.pageContent'),
    messageContent: $('.primaryContent'),
    messageList: $('#messageList'),
  },

  init: function() {
    ignForum.blackTheme();
    ignForum.watchPosts();
  },

  blackTheme: function() {
    ignForum.el.body.css('background-color', '#000');
    ignForum.el.container.css('max-width', '1100px');
    ignForum.el.pageContent.css('background-color', '#f1f1f1');
    ignForum.el.discussionList.css('background-color', '#f1f1f1');
    ignForum.updateMessages();
  },

  updateMessages: function() {
    ignForum.el.messageContent.css('background-color', '#f1f1f1');
  },

  /**
   * Use MutationObserver to determine new ajax posts
   * https://developer.mozilla.org/it/docs/Web/API/MutationObserver
   */
  watchPosts: function() {
    var target = ignForum.el.messageList[0];
    var config = { attributes: true, childList: true, characterData: true };
    var observer = new MutationObserver(function(mutations, observer) {
      // console.log(mutations); // debug
      ignForum.updateMessages();
    });
    observer.observe(target, config);
  },

};

ignForum.init();
