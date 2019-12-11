const Tabulator = require('tabulator-tables');

function dataEdited (newValue) {
    document.getElementById('message').innerHTML = newValue
    console.log(newValue)
}

bet_wranglers = ['Jonty', 'Mikey', 'Reza']

file_url = './odds.html'
fetch(file_url).then(response => response.text())
.then( data => {
    var odds = data
    //var oddshtml = parseHTML(odds)
    //document.getElementById('odds-div').append(oddshtml)
    var table = new Tabulator(".dataframe", {
        dataEdited:dataEdited,
        columns:[
        {title:"Bought At", field:'price', editor:'input'},
        {title:"Bet wrangler", field:'runner', editor:'select',editorParams:{values:bet_wranglers}},
        {title:"Take Down", field:'take_down', editor:'input'}
        ]
    })
})

function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}

