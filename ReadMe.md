# CoderSchool FTW - * FRUIT CATCHERS *

Created with love by: `Thien Hoang`
  
View online at: `https://heuristic-turing-5a2c8f.netlify.com/`
  
This is a 2-player canvas game using HTML5 & Javascript.
In case the content is too big, please zoom out your browser view for a smooth play. 

![](./images/Capture.PNG)

## User Stories

The following functionalities are completed:

* [x] The players can move their characters with the Arrow keys (Baby Monkey) & WASD keys (Hungry Gori).
* [x] The players can move their characters beyond the game boundaries and have their characters reappear at the opposite sides.

* [x] The players can see the background, obstacles (2 eagles & 1 apple worm) and fruits (1 banana, 1 apple, 1 grapefruit & 1 pineapple). 
* [x] The obstacles and fruits are placed at random locations within the game boundaries.

* [x] The players can catch the fruits by moving their characters to the same location as the fruits.
* [x] When the players catch a fruit, a new same kind fruit is placed randomly upon the screen.
* [x] Every time they catch a fruit, their scores should increase as follows: 🍌 = 5 pts, 🍎 = 10 pts, 🍇 = 15 pts & 🍍 = 20 pts.

* [x] The eagles moves around on their own frames (one from left->right, one from right->left).
* [x] When the players got caught by the eagles, a new eagle is placed randomly upon the screen.
* [x] Every time the players got caught by the eagles or got collided with the apple worm, their scores should decrease as follows: 🍎🐛 = -10 pts & 🦅 = -15 pts.

* [x] The players hear background music upon starting the game.
* [x] The players can pause or play background music during gameplay.

* [x] The players can see their total points scored. 
* [x] The players can see their highest scores.
* [x] The game ends when time is up (30 seconds per game). The total time elapsed is displayed during gameplay, in seconds.
* [x] The game announces who wins based on whoever scores highest after each game.
* [x] The players can reset game.
* [x] The players can access this game from the internet (using Netlify).

## Time Spent and Lessons Learned

Time spent: 20 hours spent in total.

Describe any challenges encountered while building the app.
- Make the second character move with a new set of keys.
- Add music background with play/pause options.
- Score tables for each character with total points scored and highest scores.
- Count down timer per game.
- Reset game option.
- Make game obstacles and fruits reappear randomly upon colliding.
- Make the eagles move across the background left-> right & right->left. 
- Make the characters & the eagles reappear at the opposide sides when moving beyond game boundaries.
- Decide who wins based on which character scores highest after each game.
- Retain the highest score of each character even after reseting game or refreshing browser.
- Freeze the game with winner announcement after time is up.

## License

    Copyright [2019] [Thien Hoang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.