const Choices = require('choices.js')
const Tabulator = require('tabulator-tables');

file_url = './odds.html'
fetch(file_url).then(response => response.text())
.then( data => {
    var odds = data
    var oddshtml = parseHTML(odds)
    document.getElementById('odds-div').append(oddshtml)
    var table = new Tabulator(".dataframe", {});
})

function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}


var options = []
var tracked_horses = []
base_url = 'http://127.0.0.1:82/'
fetch(base_url + 'horses').then(response => response.json())
  .then(horses => {

    for (let i in horses.all) {
      selected = horses.tracked.includes(horses.all[i])
      options.push({ value: i, label: horses.all[i], selected: selected })
    }

    /* Use label on event */
    var choicesSelect = new Choices('#choices-multiple-labels', {
      removeItemButton: true,
      choices: options
    })

    choicesSelect.passedElement.element.addEventListener(
      'addItem',
      function (event) {
        fetch(base_url + 'add/' + event.detail.label)
        document.getElementById('message').innerHTML =
          'You just added "' + event.detail.label + '"';
      },
    );

    choicesSelect.passedElement.element.addEventListener(
      'removeItem',
      function (event) {
        fetch(base_url + 'remove/' + event.detail.label)
        document.getElementById('message').innerHTML =
          'You just removed "' + event.detail.label + '"';
      },
    );
  })