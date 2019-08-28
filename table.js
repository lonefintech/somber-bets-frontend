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

