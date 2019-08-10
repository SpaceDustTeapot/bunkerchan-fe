var themeLoader = {};

themeLoader.OVERRIDE_DEFAULT_THEME = "yotsuba";

themeLoader.load = function() {
  var body = document.getElementsByTagName('body')[0];

  localStorage.selectedTheme = localStorage.selectedTheme || themeLoader.OVERRIDE_DEFAULT_THEME;

  if(localStorage.selectedTheme === "default") {
    body.removeAttribute('class');
  } else {
    body.className = 'theme_' + localStorage.selectedTheme;
  }
};

themeLoader.load();