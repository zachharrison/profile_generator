const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();
// });

rl.question("What's your name? Nicknames are also acceptable :)", answer => {
  const answers = {};
  answers["name"] = answer;
  rl.question("What's an activity you like doing?", answer => {
    answers["favActivity"] = answer;
    rl.question('What do you listen to while doing that?', answer => {
      answers['favMusic'] = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', answer => {
        answers['favMeal'] = answer;
        rl.question("What's your favourite thing to eat for that meal?", answer => {
          answers['favFood'] = answer;
          rl.question('Which sport is your absolute favourite?', answer => {
            answers['favSport'] = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', answer => {
              answers['superpower'] = answer;
              console.log(`${answers['name']} loves to listen to ${answers['favMusic']} while they ${answers['favActivity']}. ${answers['name']}'s favourite meal is ${answers['favMeal']} and their favourite thing to eat is ${answers['favFood']}. ${answers['favSport']} is their sport of choice and ${answers['name']} is absolutley amazing at ${answers['superpower']}!`);
              rl.close();
            });
          });
        })
      })
    });

    
  });
  
});

