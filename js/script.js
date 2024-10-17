$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      $("#navbarNav").collapse('toggle');
    }
  });

  // For Firefox and Safari 
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {

var gh = {};

var home = "snippets/home.html";
var history = "snippets/history.html";
var offer = "snippets/offer.html";
var easter = "snippets/easter.html";
var spring = "snippets/spring.html";
var summer = "snippets/summer.html";
var fall = "snippets/fall.html";
var christmas = "snippets/christmas.html";


// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  home,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

//function to load history page
gh.loadHistory = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  history,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load offer page
gh.loadOffer = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  offer,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load easter page
gh.loadEaster = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  easter,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load spring page
gh.loadSpring = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  spring,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load summer page
gh.loadSummer = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  summer,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load fall page
gh.loadFall = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  fall,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load christmas page
gh.loadChristmas = function () {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  christmas,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//function to load any page
gh.loadPage = function (page) {
  showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  page,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

global.$gh = gh;

})(window);
