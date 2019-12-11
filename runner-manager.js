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
    var oddshtml = parseHTML(odds)
    document.getElementById('odds-div').append(oddshtml)
    var table = new Tabulator(".dataframe", {
        layout:"fitColumns",      //fit columns to width of table
        responsiveLayout:"hide",  //hide columns that dont fit on the table
        tooltips:true,            //show tool tips on cells
        addRowPos:"top",          //when adding a new row, add it to the top of the table
        history:true,             //allow undo and redo actions on the table
        pagination:"local",       //paginate the data
        paginationSize:7,         //allow 7 rows per page of data
        movableColumns:true,      //allow column order to be changed
        resizableRows:true,       //allow row order to be changed
        initialSort:[             //set the initial sort order of the data
            {column:"name", dir:"asc"},
        ],
        columns:[
        {title:"Bet wrangler", field:'runner', editor:'select',editorParams:{values:bet_wranglers}},
        {title:"Take Down", field:'take_down', editor:'input'},
        {title:"Bought At (first)", field:'price', editor:'input'},
        ]
    })
})

function parseHTML(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content.cloneNode(true);
}




