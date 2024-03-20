let data = [
    {
        name: 'M. Semien:',
        field: '2nd Base'  
    },
    {
        name: 'C. Seager:',
        field: 'Short Stop'
    },
    {
        name: 'E. Carter:',
        field: 'Left Field'
    },
    {
        name: 'M. Garver:',
        field: 'DH'
    },
    {
        name: 'J. Jung:',
        field: '3rd Base'
    },
    {
        name: 'N. Lowe:',
        field: '1st Base'
    },
    {
        name: 'J. Heim:',
        field: 'Catcher'
    },
    {
        name: 'L. Taveras:',
        field: 'Center Field'
    },
    {
        name: 'T. Jankowski:',
        field: 'Right Field'
    
    },
    {
        name: 'Bullpen: N. Eovaldi:',
        field: 'Start'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + item.field + '</div>';
});
    

info.innerHTML = details.join('\n');