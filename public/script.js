var doCreateBug = () => {
  // Bug Form Div
  var formDiv = document.createElement('div');

  // Form Input - problem; 
  var probLabel = document.createElement('label');
  probLabel.innerText = "Problem: ";
  probLabel.htmlFor = 'problem';
  var probInput = document.createElement('input');
  probInput.id = 'problem';
  probInput.name = 'problem';
  probInput.type = 'text';
  probInput.placeholder = "WAD UR PROBREM?!?!";
  probInput.required = true;

  formDiv.appendChild(probLabel);
  formDiv.appendChild(probInput);

  document.body.appendChild(formDiv);
};

var createBugButton = () => {
  var button = document.createElement('button');
  button.innerText = "Create Bug!"
  button.addEventListener('click', doCreateBug);
  document.body.appendChild(button);
};

createBugButton();