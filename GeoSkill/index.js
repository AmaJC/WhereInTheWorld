/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
 http://aws.amazon.com/apache2.0/
 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
        "Located in Southeast Asia, approximately how many islands make up the Philippines? 700, seven thousand, or seventeen thousand?": [
            "Seventhousand",
        ]
    },
    {
        "Sometimes referred to as the Lion City, what is this Southeast Asian city-state?": [
            "Singapore",
        ]
    },
    {
        "Known for being the densest city in the world, what is the capital city of the Philippines?": [
            "Manila",
        ]
    },
    {
        "Japan, Indonesia, and the Philippines are all archipelago countries, meaning that they are comprised of a group of islands. Which among them have the highest number of islands?": [
            "Indonesia", 
        ]
    },
    {
        "In what Southeast Asian nation might you hear the Tagalog language?": [
            "Philippines",
        ]
    },
    {
        "What is the only country outside of the Americas to use the peso as its national currency?": [
            "Philippines",
        ]
    },
    {
        "Famous for being the largest religious monument in the world, where in the world might you find the Angkor Wat temple?": [
            "Cambodia",
        ]
    },
    {
        "The official language of which Southeast Asian nation is Khmer?": [
            "Cambodia",
        ]
    },
    {
        "Indochina is comprised of Myanmar, Vietnam, Laos, Thailand, and Cambodia. Which among these has never been colonized by a European nation?": [
            "Thailand",
        ]
    },
    {
        "The Petronas Towers were the tallest skyscrapers in the world from 1998 to 2004. In what country can they be found?": [
            "Malaysia",
        ]
    },
    {
        "Home to 45 out of the world's 50 busiest train stations, where in the world is the Land of the Rising Sun?": [
            "Japan",
        ]
    },
    {
        "Which of the following countries is the most populous? Russia, Brazil, or Mexico?": [
            "Brazil",
        ]
    },
    {
        "The Organization of Petroleum Exporting Countries, known as OPEC, is comprised of 13 nations. Which of these produces the most barrels of oil per year?": [
            "Saudi Arabia",
        ]
    },
    {
        "The BP oil spill in 2010 was the largest marine oil spill in history. In which body of water did the spill occur?": [
            "Gulf of Mexico",
        ]
    },
    {
        "Where in the world can you find the capital city of Podgorica?": [
            "Montenegro",
        ]
    },
    {
        "Where in the world can you find the capital city of Tirana?": [
            "Albania",
        ]
    },
    {
        "Where in the world can you find the capital city of London?": [
            "United Kingdom",
        ]
    },
    {
        "Where in the world can you find the capital city of Stockholm?": [
            "Sweden",
        ]
    },
    {
        "Where in the world can you find the capital city of Wellington?": [
            "New Zealand",
        ]
    },
    {
        "Which country in Oceania is known for having more sheep than people?": [
            "New Zealand",
        ]
    },
    {
        "Where in the world can you find the capital city of Bratislava?": [
            "Slovakia",
        ]
    },
    {
        "Where in the world can you find the capital city of Buenos Aires?": [
            "Argentina",
        ]
    },
    {
        "Where in the Middle East can you find the capital city of Doha?": [
            "Qatar",
        ]
    },
    {
        "Where in the Middle East can you find the capital city of Abu Dhabi?": [
            "United Arab Emirates",
        ]
    },
    {
        "Known for being the oldest pub in Ireland, The Brazen Head, can be found in the capital city. What is Ireland's capital city?": [
            "Dublin",
        ]
    },
    {
        "Which country, landlocked between Belgium, France, and Germany, had the highest nominal GDP per capita in 2016?": [
            "Luxembourg",
        ]
    },
    {
        "Which European country, known for its waffles and chocolate, is where the gourmet chocolate company Godiva was founded?": [
            "Belgium",
        ]
    },
    {
        "Which of the following cities can be found in the San Francisco Bay Area? Seattle, Monterey, Berkeley, or Sacramento?": [
            "Berkeley",
        ]
    },
    {
        "UC Berkeley, ranked among some of the most prestigious universities, can be found in which west coast state?": [
            "California",
        ]
    },
    {
        "The eighth largest cave in the world is located in which small landlocked country in Eastern Europe?": [
            "Moldova",
        ]
    },
    {
        "Which country has a red maple leef in the center of its national flag?": [
            "Canada",
        ]
    },
    {
        "Known for its neutrality during World War two, which European country has not fought in a war since the year 1815?": [
            "Switzerland",
        ]
    },
    {
        "In which African country might you hear the Portuguese language while roaming the streets of its capital city Luanda?": [
            "Angola",
        ]
    },
    {
        "In which African country is the Serengeti National Park located?": [
            "Tanzania",
        ]
    },
    {
        "In which Mediterranean country can you find the Acropolis and the Parthenon?": [
            "Greece",
        ]
    },
    {
        "Where in the world might you be if you are in Damascus, also known as the Jasmine City?": [
            "Syria",
        ]
    },
    {
        "With over 5 million Hebrew speakers, which country's capital is Jerusalem?": [
            "Israel",
        ]
    },
    {
        "The Nile river predominantly flows through which northeast African country?": [
            "Egypt",
        ]
    },
    {
        "Which of the following African countries border the Mediterranean Sea? Kenya, Zimbabwe, or Egypt?": [
            "Egypt",
        ]
    },
    {
        "The currency used in Egypt is called the Egyptian Pound. What is the capital city of Egypt?": [
            "Cairo",
        ]
    },
    {
        "Where in the world is an island country found in the East Mediterranean Sea, whose capital is Nicosia?": [
            "Cyprus",
        ]
    },
    {
        "Named a UNESCO World Heritage Site in 1983, where can you find the Machu Picchu?": [
            "Peru",
        ]
    },
    {
        "In which country might you find the cities of Sao Paulo, Salvador, and Rio de Janeiro?": [
            "Brazil",
        ]
    },
    {
        "In which country might you find the islands of Sumatra, Java, and Sulawesi?": [
            "Indonesia",
        ]
    },
    {
        "Constantinople, which is now known as Istanbul, was once a capital city of the Roman Empire. Where in the world is Istanbul found?": [
            "Turkey",
        ]
    },
    {
        "The Iberian Peninsula is comprised mainly of two southwest European countries, one being Spain. What is the other country?": [
            "Portugal",
        ]
    },
    {
        "Taipei 101, or the Taipei World Financial Center, was the tallest skyscraper in the world from 2004 to 2009. In what country is it located?": [
            "Taiwan",
        ]
    },
    {
        "Standing at 828 meters, the Burj Khalifa is the world's tallest skyscraper. In which country is it located?": [
            "United Arab Emirates",
        ]
    },
    {
        "The CN Tower is a communications and observations tower in downtown Toronto, Ontario, in which North American country?": [
            "Canada",
        ]
    },
    {
        "Which US state shares the same name as the US capital?": [
            "Washington",
        ]
    },
    {
        "Home to almost 2 million people, what is the capital of Poland?": [
            "Warsaw",
        ]
    },
    {
        "What is the most populous country on Earth?": [
            "China",
        ]
    },
    {
        "Home to San Antonio and Houston, which US state is known as the Lone Star State?": [
            "Texas",
        ]
    },
    {
        "What island nation south of India was formerly known as Ceylon?": [
            "Sri Lanka",
        ]
    },
    {
        "The capital city Kabul can be found in which landlocked South Asian country?": [
            "Afghanistan",
        ]
    },
    {
        "Which country became the largest country in Africa by land area in 2011, when South Sudan separated from Sudan?": [
            "Algeria",
        ]
    },
    {
        "Where in the world can you find Vancouver, Montreal, and Toronto?": [
            "Canada",
        ]
    },
    {
        "The volcanic mountain, Mount Fuji, is comprised of three separate volcanoes stacked on top of one another. In which island nation can Mount Fuji be found?": [
            "Japan",
        ]
    },
    {
        "Which tiny country situated between France and Spain is home to the highest capital in Europe?": [
            "Andorra",
        ]
    },
    {
        "Mount Everest, the highest mountain in the world, towers at almost nine thousand meters above sea level. In which landlocked country can Mount Everest be found?": [
            "Nepal",
        ]
    },
    {
        "Within the capital city Vienna, wine framers produce two and a half million liters of wine annually. Where in the world is Vienna?": [
            "Austria",
        ]
    },
    {
        "Where in the world can you find the capital city, Budapest?": [
            "Hungary",
        ]
    },
    {
        "Where in Southern Africa might you stumble upon the capital city, Windhoek?": [
            "Namibia",
        ]
    },
    {
        "Where in the world is the largest of the Caribbean islands?": [
            "Cuba",
        ]
    },
    {
        "Where in the world might you find the cities Munich, Hamburg, and Frankfurt?": [
            "Germany",
        ]
    },
    {
        "Where in the world can you find the world's longest wall, which runs for 5500 miles and can be seen from space?": [
            "China",
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

    if (event.session.application.applicationId !== "amzn1.ask.skill.36008f11-14a6-439d-9b76-13679342d30d") {
        context.fail("Invalid Application ID");
     }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 1;
var GAME_LENGTH = 5;
var CARD_TITLE = "WhereInTheWorld";

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Welcome to Where In The World! I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say your best guess. Let's start. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ";

    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}


function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided an answer that is blank or unintelligible, return an error message to the user.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Sorry, your answer is not recognized. " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText,
            speechOutputAnalysis = "";

        if (answerSlotValid && intent.slots.Answer.value.toUpperCase() == correctAnswerText.toUpperCase()) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is GAME_LENGTH - 1, we've finished the last question and can end game.
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : intent.slots.Answer.value + " is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing Where In The World! Goodbye for now.";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]]);
            var questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            speechOutput += userGaveUp ? "" : intent.slots.Answer.value + " is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.
    
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " geography related questions. Respond with your best guess. " 
        + "To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye for now!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    return answerSlotFilled
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
