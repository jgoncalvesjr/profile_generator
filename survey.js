const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question(`What's your name? `, (answer) => {
  answers.name = answer;
  rl.question(`What are you doing right now? `, (answer) => {
    answers.doing = answer;
    rl.question(`What's your favorite hobby? `, (answer) => {
      answers.hobby = answer;
      rl.question(`Any favorite sport? `, (answer) => {
        answers.sport = answer;
        rl.question(`And your favorite food? `, (answer) => {
          answers.food = answer;
          rl.question(`Last but not least, tell us something unique about you: `, (answer) => {
            answers.special = answer;
            console.log(
              `${answers.name}. is currently doing ${answers.doing} and enjoys ${answers.hobby} the most. Their favorite sport is ${answers.sport} and they love eating ${answers.food}. They tell that ${answers.special} is what makes them unique!`
              );
              rl.close();
          });
        });
      });
    });
  });
});
