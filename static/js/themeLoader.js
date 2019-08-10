var themeLoader = {};

themeLoader.load = function() {
  var body = document.getElementsByTagName('body')[0];

  if(localStorage.selectedTheme === "default") {
    body.removeAttribute('class');
  } else {
    body.className = 'theme_' + localStorage.selectedTheme;
  }
};

themeLoader.load();