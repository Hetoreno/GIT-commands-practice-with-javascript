var firstName='John';
var hobby='athlete';

switch (hobby){
    case 'athlete':
        console.log(firstName + ' plays football with his friends!');
        break;
    case 'gamer':
        console.log(firstName + ' plaays videogames!');
        break;
    case 'painter':
        console.log(firstName + ' is a painter!');
        break;
    default:
        console.log(firstName + ' does something else!');
    }