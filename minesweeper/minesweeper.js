
document.querySelector('#btn_start').addEventListener('click', GenerateGame);


function GenerateGame(){
    //get numbers of rows, columns and mines.
    var numOfRows = parseInt(document.querySelector('#num_of_rows').value);
    var numOfColumns = parseInt(document.querySelector('#num_of_columns').value);
    var numOfMines = parseInt(document.querySelector('#num_of_mines').value);
    //console.log(numOfRows, numOfColumns, numOfMines);


    //generate random number for mines
    var numOfSpaces = numOfRows * numOfColumns;
    var mines = [];

    var counter = 0;
    while(counter < numOfMines)
    {
        var mine = Math.floor(Math.random() * numOfSpaces);
        if(!(mines.includes(mine)))
        {
            mines.push(mine);
            counter++;
        }
    }
    console.log(mines);


    //make a table for game area
    var area = document.querySelector('#mine_table');
    for(var i = 0; i < numOfRows; i++)
    {
        var tr = document.createElement('tr');
        for(var j = 0; j < numOfColumns; j++)
        {
            var td = document.createElement('td');
            tr.appendChild(td);
            
            //mine = @, empty = "-"
            if(mines.includes(i*numOfRows + j))
            {
                td.textContent = "@";
            }
            else
            {
                td.textContent = "-";
            }
        }
        area.appendChild(tr);
    }
    console.log(mines.sort());
}
