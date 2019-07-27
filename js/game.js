/*
  Code modified from:
  http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
  using graphics purchased from vectorstock.com
*/

// WORLD CREATION - START
let canvas;
let ctx;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 1380;
canvas.height = 820;
document.body.appendChild(canvas);

let bgReady,
  monkeyReady,
  goriReady,
  bananaReady,
  pineappleReady,
  appleReady,
  grapeReady,
  eagleReady,
  eagle1Ready;
let bgImage,
  monkeyImage,
  goriImage,
  bananaImage,
  pineappleImage,
  appleImage,
  grapeImage,
  eagleImage,
  eagle1Image;

let startTime = Date.now();
const SECONDS_PER_ROUND = 30;
let elapsedTime = 0;

let game = {
  startspeed: 1
};

let scoreMonkey = 0;
let scoreGori = 0;

// ----------WORLD CREATION - END

// LOADING IMAGES - START
function loadImages() {
  bgImage = new Image();
  bgImage.onload = function() {
    bgReady = true;
  };
  bgImage.src = "images/bg.png";

  monkeyImage = new Image();
  monkeyImage.onload = function() {
    monkeyReady = true;
  };
  monkeyImage.src = "images/monkey3.png";

  goriImage = new Image();
  goriImage.onload = function() {
    goriReady = true;
  };
  goriImage.src = "images/gori1.png";

  bananaImage = new Image();
  bananaImage.onload = function() {
    bananaReady = true;
  };
  bananaImage.src = "images/banana4.png";

  pineappleImage = new Image();
  pineappleImage.onload = function() {
    pineappleReady = true;
  };
  pineappleImage.src = "images/pineapple1.png";

  appleImage = new Image();
  appleImage.onload = function() {
    appleReady = true;
  };
  appleImage.src = "images/apple1.png";

  grapeImage = new Image();
  grapeImage.onload = function() {
    grapeReady = true;
  };
  grapeImage.src = "images/grape1.png";

  eagleImage = new Image();
  eagleImage.onload = function() {
    eagleReady = true;
  };
  eagleImage.src = "images/eagle2.png";

  eagle1Image = new Image();
  eagle1Image.onload = function() {
    eagle1Ready = true;
  };
  eagle1Image.src = "images/eagle3.png";
}
// ----------LOADING IMAGES - END

// PLAYER STARTING POSITION - START
let monkeyX = canvas.width / 2 + 200;
let monkeyY = canvas.height / 2;

let goriX = canvas.width / 2 - 200;
let goriY = canvas.height / 2;
// ----------PLAYER STARTING  POSITION - END

// FRUITS AND EAGLES STARTING POSITION - START


const getRandom = x => Math.floor(Math.random() * x);

let bananaX = getRandom(1200);
let bananaY = getRandom(700);

let pineappleX = getRandom(1200);
let pineappleY = getRandom(700);

let appleX = getRandom(1200);
let appleY = getRandom(700);

let grapeX = getRandom(1200);
let grapeY = getRandom(700);

let eagleX = getRandom(1000);
let eagleY = getRandom(600);

let eagle1X = getRandom(1000);
let eagle1Y = getRandom(600);
// ----------FRUITS AND EAGLES STARTING POSITION - END

// SETUP KEYBOARD LISTENERS - START
let keysDown = {};
function setupKeyboardListeners() {
  addEventListener(
    "keydown",
    function(key) {
      keysDown[key.keyCode] = true;
    },
    false
  );

  addEventListener(
    "keyup",
    function(key) {
      delete keysDown[key.keyCode];
    },
    false
  );
}
// ----------SETUP KEYBOARD LISTENERS - END

let update = function() {
  // TIMER - START

  elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  let timer;
  timer = setInterval(() => {
    const timeDown = SECONDS_PER_ROUND - elapsedTime;
    document.getElementById("timeDown").innerHTML =
      "Remaining time: " + timeDown + "s";
  });

  // TIMER - END

  // PLAYER 1 MOVEMENT KEYS - START
  if (38 in keysDown) {
    // Player is holding up key
    monkeyY -= 10;
  }
  if (40 in keysDown) {
    // Player is holding down key
    monkeyY += 10;
  }
  if (37 in keysDown) {
    // Player is holding left key
    monkeyX -= 10;
  }
  if (39 in keysDown) {
    // Player is holding right key
    monkeyX += 10;
  }
  // ----------PLAYER 1 MOVEMENT KEYS - END

  // PLAYER 2 MOVEMENT KEYS - START
  if (87 in keysDown) {
    // Player is holding up key
    goriY -= 10;
  }
  if (83 in keysDown) {
    // Player is holding down key
    goriY += 10;
  }
  if (65 in keysDown) {
    // Player is holding left key
    goriX -= 10;
  }
  if (68 in keysDown) {
    // Player is holding right key
    goriX += 10;
  }
  // ----------PLAYER 2 MOVEMENT KEYS - END

  // BEYOND BORDER & REAPPEAR - MONKEY - START
  if (monkeyX <= -10) {
    monkeyX = canvas.width - 10;
  }
  if (monkeyX >= canvas.width) {
    monkeyX = 0;
  }
  if (monkeyY >= canvas.height - 10) {
    monkeyY = 0;
  }
  if (monkeyY <= -10) {
    monkeyY = canvas.height - 10;
  }
  // ----------BEYOND BORDER & REAPPEAR - MONKEY - END

  // BEYOND BORDER & REAPPEAR - GORI - START
  if (goriX <= -10) {
    goriX = canvas.width - 10;
  }
  if (goriX >= canvas.width) {
    goriX = 0;
  }
  if (goriY >= canvas.height - 10) {
    goriY = 0;
  }
  if (goriY <= -10) {
    goriY = canvas.height - 10;
  }
  // ----------BEYOND BORDER & REAPPEAR - GORI - END

  // BEYOND BORDER & REAPPEAR - EAGLE - START

  const eagleSpeed = game.startspeed - 15;
  eagleX += eagleSpeed;
  eagleY = eagleY;

  if (eagleX <= -10) {
    eagleX = canvas.width - 10;
    eagleY = Math.floor(Math.random() * 820) - 300;
  }

  if (eagleX >= canvas.width) {
    eagleX = 0;
    eagleY = Math.floor(Math.random() * 820) - 300;
  }
  // ----------BEYOND BORDER & REAPPEAR - EAGLE - START

  // BEYOND BORDER & REAPPEAR - EAGLE1 - START

  const eagle1Speed = game.startspeed + 15;
  eagle1X += eagle1Speed;
  eagle1Y = eagle1Y;

  if (eagle1X <= -10) {
    eagle1X = canvas.width - 10;
    eagle1Y = Math.floor(Math.random() * 1300) - 300;
  }

  if (eagle1X >= canvas.width - 10) {
    eagle1X = 0;
    eagle1Y = Math.floor(Math.random() * 1300) - 300;
  }
  // ----------BEYOND BORDER & REAPPEAR - EAGLE1 - END

  // MONKEY INTERACTIONS - START
  let monkeyTouchBanana =
    monkeyX <= bananaX + 15 &&
    bananaX <= monkeyX + 50 &&
    monkeyY <= bananaY + 27 &&
    bananaY <= monkeyY + 50;

  if (monkeyTouchBanana) {
    scoreMonkey += 5;
    bananaX = Math.floor(Math.random() * 1200);
    bananaY = Math.floor(Math.random() * 700);
  }

  let monkeyTouchPineapple =
    monkeyX <= pineappleX + 15 &&
    pineappleX <= monkeyX + 50 &&
    monkeyY <= pineappleY + 27 &&
    pineappleY <= monkeyY + 50;

  if (monkeyTouchPineapple) {
    scoreMonkey += 20;
    pineappleX = Math.floor(Math.random() * 1200);
    pineappleY = Math.floor(Math.random() * 700);
  }

  let monkeyTouchApple =
    monkeyX <= appleX + 15 &&
    appleX <= monkeyX + 50 &&
    monkeyY <= appleY + 27 &&
    appleY <= monkeyY + 50;

  if (monkeyTouchApple) {
    scoreMonkey += 10;
    appleX = Math.floor(Math.random() * 1200);
    appleY = Math.floor(Math.random() * 700);
  }

  let monkeyTouchGrape =
  monkeyX <= grapeX + 15 &&
  grapeX <= monkeyX + 50 &&
  monkeyY <= grapeY + 27 &&
  grapeY <= monkeyY + 50;

if (monkeyTouchGrape) {
  scoreMonkey += 15;
  grapeX = Math.floor(Math.random() * 1200);
  grapeY = Math.floor(Math.random() * 700);
}

  let monkeyTouchEagle =
    monkeyX <= eagleX + 100 &&
    eagleX <= monkeyX + 50 &&
    monkeyY <= eagleY + 100 &&
    eagleY <= monkeyY + 50;

  if (monkeyTouchEagle) {
    scoreMonkey -= 10;
    eagleX = Math.floor(Math.random() * 1000);
    eagleY = Math.floor(Math.random() * 600);
  }

  let monkeyTouchEagle1 =
    monkeyX <= eagle1X + 100 &&
    eagle1X <= monkeyX + 50 &&
    monkeyY <= eagle1Y + 100 &&
    eagle1Y <= monkeyY + 50;

  if (monkeyTouchEagle1) {
    scoreMonkey -= 10;
    eagle1X = Math.floor(Math.random() * 1000);
    eagle1Y = Math.floor(Math.random() * 600);
  }

  document.getElementById("scoreMonkey").innerHTML =
    "Monkey Score: " + scoreMonkey;

  // HIGHSCORE MONKEY - START
  const currentHighScoreMonkey = localStorage.getItem("high-scoreMonkey");
  if (scoreMonkey > currentHighScoreMonkey) {
    localStorage.setItem("high-scoreMonkey", scoreMonkey);
    document.getElementById("highScoreMonkey").innerHTML =
      "Highest Score: " + scoreMonkey;
  } else {
    document.getElementById("highScoreMonkey").innerHTML =
      "Highest Score: " + currentHighScoreMonkey;
  }
  // HIGHSCORE MONKEY - END

  // ----------MONKEY INTERACTIONS - END

  // GORI INTERACTIONS - START
  let goriTouchBanana =
    goriX <= bananaX + 15 &&
    bananaX <= goriX + 50 &&
    goriY <= bananaY + 27 &&
    bananaY <= goriY + 50;

  if (goriTouchBanana) {
    scoreGori += 5;
    bananaX = Math.floor(Math.random() * 1200);
    bananaY = Math.floor(Math.random() * 700);
  }

  let goriTouchPineapple =
    goriX <= pineappleX + 15 &&
    pineappleX <= goriX + 50 &&
    goriY <= pineappleY + 27 &&
    pineappleY <= goriY + 50;

  if (goriTouchPineapple) {
    scoreGori += 20;
    pineappleX = Math.floor(Math.random() * 1200);
    pineappleY = Math.floor(Math.random() * 700);
  }

  let goriTouchApple =
  goriX <= appleX + 15 &&
  appleX <= goriX + 50 &&
  goriY <= appleY + 27 &&
  appleY <= goriY + 50;

if (goriTouchApple) {
  scoreGori += 10;
  appleX = Math.floor(Math.random() * 1200);
  appleY = Math.floor(Math.random() * 700);
}

let goriTouchGrape =
  goriX <= grapeX + 15 &&
  grapeX <= goriX + 50 &&
  goriY <= grapeY + 27 &&
  grapeY <= goriY + 50;

if (goriTouchGrape) {
  scoreGori += 15;
  grapeX = Math.floor(Math.random() * 1200);
  grapeY = Math.floor(Math.random() * 700);
}



  let goriTouchEagle =
    goriX <= eagleX + 100 &&
    eagleX <= goriX + 50 &&
    goriY <= eagleY + 100 &&
    eagleY <= goriY + 50;

  if (goriTouchEagle) {
    scoreGori -= 10;
    eagleX = Math.floor(Math.random() * 1000);
    eagleY = Math.floor(Math.random() * 600);
  }

  let goriTouchEagle1 =
    goriX <= eagle1X + 100 &&
    eagle1X <= goriX + 50 &&
    goriY <= eagle1Y + 100 &&
    eagle1Y <= goriY + 50;

  if (goriTouchEagle1) {
    scoreGori -= 10;
    eagle1X = Math.floor(Math.random() * 1000);
    eagle1Y = Math.floor(Math.random() * 600);
  }

  document.getElementById("scoreGori").innerHTML = "Gori Score: " + scoreGori;

  // HIGHSCORE GORI - START
  const currentHighScoreGori = localStorage.getItem("high-scoreGori");
  if (scoreGori > currentHighScoreGori) {
    localStorage.setItem("high-scoreGori", scoreGori);
    document.getElementById("highScoreGori").innerHTML =
      "Highest Score: " + scoreGori;
  } else {
    document.getElementById("highScoreGori").innerHTML =
      "Highest Score: " + currentHighScoreGori;
  }
  // HIGHSCORE GORI - END

  // ----------GORI INTERACTIONS - END
};

// RENDERING - START
var render = function() {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (monkeyReady) {
    ctx.drawImage(monkeyImage, monkeyX, monkeyY);
  }
  if (goriReady) {
    ctx.drawImage(goriImage, goriX, goriY);
  }
  if (bananaReady) {
    ctx.drawImage(bananaImage, bananaX, bananaY);
  }
  if (pineappleReady) {
    ctx.drawImage(pineappleImage, pineappleX, pineappleY);
  }
  if (appleReady) {
    ctx.drawImage(appleImage, appleX, appleY);
  }
  if (grapeReady) {
    ctx.drawImage(grapeImage, grapeX, grapeY);
  }
  if (eagleReady) {
    ctx.drawImage(eagleImage, eagleX, eagleY);
  }
  if (eagle1Ready) {
    ctx.drawImage(eagle1Image, eagle1X, eagle1Y);
  }

  if (SECONDS_PER_ROUND - elapsedTime > 0) {
    document.getElementById("reset").disabled = true;
  } else {
    document.getElementById("reset").disabled = false;
  }

  if (SECONDS_PER_ROUND - elapsedTime == 0) {
    if (scoreMonkey > scoreGori) {
      ctx.fillStyle = "#163a2e";
      ctx.fillRect(200, 200, canvas.width - 400, canvas.height - 400);
      ctx.textAlign = "center";
      ctx.font = "60px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(
        "Monkey Won & Survived",
        canvas.width / 2,
        canvas.height / 2 - 30
      );
      ctx.fillText(
        "Reset Game to try again",
        canvas.width / 2,
        canvas.height / 2 + 70
      );
      ctx.fillStyle = "green";
      clearInterval(timer);
    } else if (scoreGori > scoreMonkey) {
      ctx.fillStyle = "#163a2e";
      ctx.fillRect(200, 200, canvas.width - 400, canvas.height - 400);
      ctx.textAlign = "center";
      ctx.font = "60px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(
        "Gori Won & Survived",
        canvas.width / 2,
        canvas.height / 2 - 30
      );
      ctx.fillText(
        "Reset Game to try again",
        canvas.width / 2,
        canvas.height / 2 + 70
      );
      clearInterval(timer);
    } else {
      ctx.fillStyle = "#163a2e";
      ctx.fillRect(200, 200, canvas.width - 400, canvas.height - 400);
      ctx.textAlign = "center";
      ctx.font = "60px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(
        "You both suck. They all died...",
        canvas.width / 2,
        canvas.height / 2 - 30
      );
      ctx.fillText(
        "Reset Game to try again",
        canvas.width / 2,
        canvas.height / 2 + 70
      );
      clearInterval(timer);
    }
  }
};
// ----------RENDERING - END

/**
 * The main game loop. Most every game will have two distinct parts:
 * update (updates the state of the game, in this case our monkey and banana)
 * render (based on the state of our game, draw the right things)
 */
var main = function() {
  update();
  render();
  // Request to do this again ASAP. This is a special method
  // for web browsers.
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame.
// Safely ignore this line. It's mostly here for people with old web browsers.
var w = window;
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;

// Let's play this game!
function playGame() {
  loadImages();
  setupKeyboardListeners();
  main();
  document.getElementById("playGame").disabled = true;
}

function resetGame() {
  main();
  elapsedTime = 0;
  startTime = Date.now();

  scoreMonkey = 0;
  scoreGori = 0;

  // PLAYER STARTING POSITION - START
  monkeyX = canvas.width / 2 + 200;
  monkeyY = canvas.height / 2;

  goriX = canvas.width / 2 - 200;
  goriY = canvas.height / 2;
  // ----------PLAYER STARTING  POSITION - END

  // FRUITS AND EAGLES STARTING POSITION - START
  bananaX = getRandom(1200);
  bananaY = getRandom(700);

  pineappleX = getRandom(1200);
  pineappleY = getRandom(700);

  appleX = getRandom(1200);
  appleY = getRandom(700);

  grapeX = getRandom(1200);
  grapeY = getRandom(700);

  eagleX = getRandom(1000);
  eagleY = getRandom(600);

  eagle1X = getRandom(1000);
  eagle1Y = getRandom(600);
  // ----------FRUITS AND EAGLES STARTING POSITION - END
}
