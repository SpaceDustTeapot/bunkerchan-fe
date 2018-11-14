var filterManagement = {};

filterManagement.init = function() {

  api.boardUri = document.getElementById('boardIdentifier').value;

  api.convertButton('addFormButton', filterManagement.addFilter,
      'addFilterField');

  var filtersDiv = document.getElementById('divFilters');

  for (var j = 0; j < filtersDiv.childNodes.length; j++) {
    filterManagement.processFilterCell(filtersDiv.childNodes[j]);
  }

  filterManagement.divFilters = filtersDiv;

};

filterManagement.processFilterCell = function(cell) {

  var button = cell.getElementsByClassName('deleteFormButton')[0];

  api.convertButton(button, function() {
    filterManagement.removeFilter(cell);
  });

};

filterManagement.removeFilter = function(cell) {

  api.apiRequest('deleteFilter', {
    boardUri : api.boardUri,
    filterIdentifier : cell.getElementsByClassName('filterIdentifier')[0].value
  }, function requestComplete(status, data) {

    if (status === 'ok') {
      cell.remove();
    } else {
      alert(status + ': ' + JSON.stringify(data));
    }
  });

};

filterManagement.addFilter = function() {

  var typedOriginal = document.getElementById('fieldOriginalTerm').value.trim();
  var typedReplacement = document.getElementById('fieldReplacementTerm').value
      .trim();
  var caseInsensitive = document.getElementById('checkboxCaseInsensitive').checked;

  if (!typedOriginal.length || !typedReplacement.length) {
    alert('Both fields are mandatory.');
    return;
  } else if (typedOriginal.length > 32 || typedReplacement.length > 32) {
    alert('Both fields cannot exceed 32 characters.');
    return;
  }

  api.apiRequest('createFilter', {
    boardUri : api.boardUri,
    originalTerm : typedOriginal,
    caseInsensitive : caseInsensitive,
    replacementTerm : typedReplacement
  }, function requestComplete(status, data) {

    if (status === 'ok') {

      document.getElementById('fieldOriginalTerm').value = '';
      document.getElementById('fieldReplacementTerm').value = '';

      var form = document.createElement('form');
      form.className = 'filterCell';
      form.action = '/deleteFilter.js';
      form.method = 'post';
      form.enctype = 'multipart/form-data';

      var originalPara = document.createElement('p');
      originalPara.innerHTML = 'Original term: ';
      form.appendChild(originalPara);

      var originalLabel = document.createElement('span');
      originalLabel.className = 'labelOriginal';
      originalLabel.innerHTML = typedOriginal;
      originalPara.appendChild(originalLabel);

      var replacementPara = document.createElement('p');
      replacementPara.innerHTML = 'Replacement term: ';
      form.appendChild(replacementPara);

      var replacementLabel = document.createElement('span');
      replacementLabel.className = 'labelReplacement';
      replacementLabel.innerHTML = typedReplacement;
      replacementPara.appendChild(replacementLabel);

      if (caseInsensitive) {
        var casePara = document.createElement('p');
        casePara.innerHTML = 'Case-insensitive';
        casePara.className = 'labelCaseInsensitive';
        form.appendChild(casePara);
      }

      var boardIdentifier = document.createElement('input');
      boardIdentifier.value = api.boardUri;
      boardIdentifier.name = 'boardUri';
      boardIdentifier.type = 'hidden';
      boardIdentifier.className = 'boardIdentifier';
      form.appendChild(boardIdentifier);

      var filterIdentifier = document.createElement('input');
      filterIdentifier.value = typedOriginal;
      filterIdentifier.name = 'filterIdentifier';
      filterIdentifier.type = 'hidden';
      filterIdentifier.className = 'filterIdentifier';
      form.appendChild(filterIdentifier);

      var submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.className = 'deleteFormButton';
      submitButton.innerHTML = 'Delete';
      form.appendChild(submitButton);

      filterManagement.divFilters.appendChild(form);

      filterManagement.processFilterCell(form);

    } else {
      alert(status + ': ' + JSON.stringify(data));
    }
  });

}

filterManagement.init();