const Tabulator = require('tabulator-tables');
var fs = require('fs')
var odds = fs.readFileSync(__dirname + '/odds.html', 'utf8');


function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}

var oddshtml = parseHTML(odds)
document.getElementById('odds-div').append(oddshtml)
var table = new Tabulator(".dataframe", {});