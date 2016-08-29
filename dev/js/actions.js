//// Example Actions

var ADD_REPOSITORY = 'ADD_REPOSITORY';
var addRepository = function(repository) {
    return {
        type: ADD_REPOSITORY,
        repository: repository
    }
};

var RATE_REPOSITORY = 'RATE_REPOSITORY';
var rateRepository = function(repository, rating) {
    return {
        type: RATE_REPOSITORY,
        repository: repository,
        rating: rating

    };
};

exports.ADD_REPOSITORY = ADD_REPOSITORY;
exports.addRepository = addRepository;
exports.RATE_REPOSITORY = RATE_REPOSITORY;
exports.rateRepository = rateRepository;

//// Generate a random number
//// Make a guess
//// reset game
//// count number of guesses / list of guesses
//// guess accuracy feedback / compare guess to number

var GENERATE_NUMBER = 'GENERATE_NUMBER'
var generateNumber = function(number) {
    return {
        type: GENERATE_NUMBER,
        number: number
    }
};

var USER_GUESS = 'USER_GUESS'
var userGuess = function(userGuess, guessList) {
    return {
        type: USER_GUESS,
        userGuess: userGuess,
        guessList: guessList
    }
};

var COMPARE_GUESS = 'COMPARE_GUESS'
var compareGuess = function(number, userGuess, compareGuess, guessList){
    return {
        type: COMPARE_GUESS,
        userGuess: userGuess,
        compareGuess: compareGuess,
        guessList: guessList
    }
};

exports.GENERATE_NUMBER = GENERATE_NUMBER;
exports.generateNumber = generateNumber;
exports.USER_GUESS = USER_GUESS;
exports.userGuess = userGuess;
exports.COMPARE_GUESS = COMPARE_GUESS;
exports.compareGuess = compareGuess;
