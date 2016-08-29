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

var initialState = [{
    guessList: []
}];

var hotOrColdReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.GENERATE_NUMBER) {
        return state.concat({
            number: Math.floor((Math.random() * 100) + 1)
        });
    } 
    else if (action.type === actions.USER_GUESS) {
        state = state || initialState;
        
        // var before = state.slice(0, i);
        // var after = state.slice(i + 1);
        // var newState = Object.assign({}, userGuess, {guessList: state[0].guessList.push(action.userGuess});
        // return before.concat(newRepository, after);
    

        return state.concat({

            // userGuess: action.userGuess,
            guessList: state[0].guessList.push(action.userGuess),
        });
    }
    else if (action.type === actions.COMPARE_GUESS) {
        if ((Math.abs(state.userGuess - state.number)) < 10) {
            compareGuess = "hot"
        }
        else if ((Math.abs(state.userGuess - state.number)) < 20) {
            compareGuess = "warm"
        }
        else if (state.userGuess === state.number && state.userGuess != undefined) {
            compareGuess = "WINNNNEERRRR!!!!"
        }
        else {
            compareGuess = "cold"
        }
        return state.concat({compareGuess})
    }

    // var newState = update(state, {
    //     userGuess: {$set: action.userGuess},
    //     guessList: {$set: state[0].guessList.push(action.userGuess)} 
    // })

    return state;
};




exports.hotOrColdReducer = hotOrColdReducer;