var themes = {};


themes.init = function () {

  localStorage.selectedTheme = localStorage.selectedTheme || themeLoader.OVERRIDE_DEFAULT_THEME;

  themes.themes = [{
    label: 'Default',
    id: 'default'
  },
    {
      label: 'Clear',
      id: 'clear'
    },
    {
      label: 'Yotsuba',
      id: 'yotsuba'
    },
    {
      label: 'Dark',
      id: 'dark'
    }];

  var postingLink = document.getElementById('navPosting');

  if (!postingLink) {
    return;
  }

  var referenceNode = postingLink.nextSibling;

  var divider = document.createElement('span');
  divider.innerHTML = '/';
  postingLink.parentNode.insertBefore(divider, referenceNode);

  var themeSelector = document.createElement('select');
  themeSelector.id = 'themeSelector';

  themes.themes.forEach(function (theme) {
    var themeOption = document.createElement('option');
    themeOption.innerHTML = theme.label;
    themeOption.selected = theme.id === localStorage.selectedTheme;
    themeSelector.appendChild(themeOption);
  });

  themeSelector.onchange = function () {
    var selectedTheme = themes.themes[themeSelector.selectedIndex];
    if (selectedTheme.id === localStorage.selectedTheme) {
      return;
    }

    localStorage.selectedTheme = selectedTheme.id;

    themeLoader.load();
  };

  postingLink.parentNode.insertBefore(themeSelector, referenceNode);

};

themes.init();