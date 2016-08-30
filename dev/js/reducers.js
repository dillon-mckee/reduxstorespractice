/// EXAMPLE REDUCER THAT DOES NOTHING TO STATE


// var initialRepositoryState = [];

// var repositoryReducer = function(state, action) {
//     state = state || initialRepositoryState;
//     return state;
// };

//exports.repositoryReducer = repositoryReducer;

/// EXAMPLE REDUCER

// var actions = require('./actions');

// var initialRepositoryState = [];

// var repositoryReducer = function(state, action) {
//     state = state || initialRepositoryState;
//     if (action.type === actions.ADD_REPOSITORY) {
//         return state.concat({
//             name: action.repository,
//             rating: null
//         });
//     }
//     else if (action.type === actions.RATE_REPOSITORY) {
//         // Find the index of the matching repository
//         var index = -1;
//         for (var i=0; i<state.length; i++) {
//             var repository = state[i];
//             if (repository.name === action.repository) {
//                 index = i;
//                 break;
//             }
//         }

//         if (index === -1) {
//             throw new Error('Could not find repository');
//         }

//         var before = state.slice(0, i);
//         var after = state.slice(i + 1);
//         var newRepository = Object.assign({}, repository, {rating: action.rating});
//         return before.concat(newRepository, after);
//     }

//     return state;
// };

// exports.repositoryReducer = repositoryReducer;


///// Hot or Cold Reducer
var update = require('react-addons-update');
var actions = require('./actions');

var ranNumb = Math.floor((Math.random() * 100) + 1);

var initialState = {
    number: 0,
    usersGuess: 0,
    compareGuess: '',
    guessCount: 0,
    guessList: []
};

var hotOrColdReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.GENERATE_NUMBER) {
        var newState = update(state, {
            number: {$set: ranNumb}
        });

        return newState
    }
    else if (action.type === actions.USER_GUESS) {
        var guessCounter = state.guessCount++;
        
        var beforeList = state.guessList.slice();
        var afterList = beforeList.concat([action.usersGuess]);

        var newState = update(state, {
            usersGuess: {$set: action.usersGuess},
            guessCount: {$set: guessCounter},
            guessList: {$set: afterList}
        });

        return newState;
    }
    else if (action.type === actions.COMPARE_GUESS) {
        var compareGuess;
        if ((Math.abs(state.usersGuess - state.number)) < 10) {
            compareGuess = "hot"
        }
        else if ((Math.abs(state.usersGuess - state.number)) < 20) {
            compareGuess = "warm"
        }
        else if (state.usersGuess === state.number && state.usersGuess != undefined) {
            compareGuess = "WINNNNEERRRR!!!!"
        }
        else {
            compareGuess = "cold"
        }
        
        var newState = update(state, {
            compareGuess: {$set: compareGuess},
        });

        return newState;
    }

    return state;
};




exports.hotOrColdReducer = hotOrColdReducer;