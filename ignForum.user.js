// ==UserScript==
// @name         IGN.it Forum Custom Theme
// @namespace    https://github.com/starise/ign-forum-script
// @version      0.3.0
// @author       starise
// @match        *://it.ign.com/forum/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/starise/ign-forum-script/master/ignForum.user.js
// @updateURL    https://raw.githubusercontent.com/starise/ign-forum-script/master/ignForum.user.js
// ==/UserScript==

function updatePage() {
  var body           = $('body'),
      discussionList = $('.sectionMain, .discussionListItem'),
      pageContent    = $('.pageContent'),
      messageList    = $('#messageList');

  body.css('background-color', '#000');
  pageContent.css('background-color', '#f1f1f1');
  discussionList.css('background-color', '#f1f1f1');
}

function updatePosts() {
  var messageContent = $('.primaryContent'),
      messageList    = $('#messageList'),
      message        = $('.message');

  messageContent.css('background-color', '#f1f1f1');
  message.css('border-top', '1px solid #000');
}

// Use MutationObserver to determine new ajax posts
// https://developer.mozilla.org/it/docs/Web/API/MutationObserver
function watchPosts() {
  var target = document.querySelector('#messageList');
  var config = { attributes: true, childList: true, characterData: true };
  var observer = new MutationObserver(function(mutations, observer) {
    // console.log(mutations); // debug
    updatePosts();
  });
  observer.observe(target, config);
}

updatePage();
updatePosts();
watchPosts();
