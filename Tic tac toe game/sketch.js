let xImage, oImage;
let music, audio, tada, lineaudio, tadaGif;
let audioPlaying = false;  // Flag to track if the audio is playing
let tadaPlaying = false;   // Flag for tada audio
let lineaudioPlaying = false; // Flag for line audio

function preload(){
  Background = loadImage('media/tahta.png');
  xImage = loadImage('media/x.png');
  oImage = loadImage('media/o.png');
  tadaGif = loadImage('media/tada.gif');
  music = createAudio('media/music.mp3');
  audio = createAudio('media/audio.mp3');
  tada = createAudio('media/tada.mp3');
  lineaudio = createAudio('media/line.mp3');
}

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let player1, player2;
let input1, input2; // name inputs
let winner;
let showInfo = true; //
let touchable = true; // if u can write on the board or not
let currentPlayer = 'X';
let player1Score = 0;
let player2Score = 0;
let roundEnded = false;
let round = 1;
let exitBtn;
let contBtn;
let startBtn;
let gameStart; 
let loopcount = 0;
let exitstatus = false;

function setup() {
  createCanvas(400, 400);
  start();
  newRoundORExit();
}

function draw(){
  if (exitstatus){
    background('#244637');
    exit();
    if (loopcount == 1){
      if (!tadaPlaying) {
        tada.play();
        tadaPlaying = true; // Update flag when audio starts playing
        tada.onended(() => {
          tadaPlaying = false; // Reset flag when audio ends
        });
      }
    }
    loopcount++;
    image(tadaGif, 0, 0, 400, 400);
    if(loopcount == 135){
       noLoop();
     }
  }
}

function start(){
  background('#244637');
  fill(255);
  textSize(60);
  text("WELCOME", 40, 70);
  textSize(20);
  input1 = createInput();
  input1.position(240, 150);
  input1.size(100, 30);
  text("Enter player 1 name:", 20, 170);
  input2 = createInput();
  input2.position(240,200);
  input2.size(100, 30);
  text("Enter player 2 name:", 20, 220);
  
  startBtn = createButton('start');
  startBtn.position(270, 330);
  startBtn.size(100, 40);
  startBtn.mousePressed(startPage);
}

function startPage(){
  player1 = input1.value();
  player2 = input2.value();
  if(player1 === '' && player2 === ''){
    alert("rewrite player1 and player2 names pls!");
  }else if (player1 === ''){
    alert("rewrite player1 name pls!");
  }else if(player2 === ''){
    alert("rewrite player2 name pls!");
  }else{
    music.play();
    music.time(3);
    music.volume(0.5);
    clear();
    input1.remove();
    input2.remove();
    startBtn.remove();
    roundEnded = true; // strat tusuna basmadan oyun baslamasin
    gameStart = true;
    drawBoard();
    playersInfo();
  }
}

function newRoundORExit(){
  roundEnd = true;
  contBtn = createButton('New Round');
  contBtn.position(120, 250);
  contBtn.hide();
  contBtn.mousePressed(resetBoard);
  exitBtn = createButton('Exit');
  exitBtn.position(250, 250);
  exitBtn.hide();
  exitBtn.mousePressed(exit);
}

function playersInfo(){
  textSize(20);
  noStroke();
  fill(255);
  textAlign(CENTER, TOP);
  text("Round " + round, width / 2, 15);
  text(player1 + " (X): " + player1Score, 100, 55); 
  text(player2 + "(O): " + player2Score, 300, 55);
}

function exit(){
  exitstatus = true;
  gameStart = false;
  music.stop();
  clear();
  background('#244637');
  textSize(20);
  fill(255);
  text(player1 + " (X): " + player1Score, 100, 55); 
  text(player2 + "(O): " + player2Score, 300, 55);
  contBtn.hide();
  exitBtn.hide();
  textSize(50);
  noStroke();
  fill(255);
  textAlign(CENTER, TOP);
  if (player1Score > player2Score) {
        text("Congrats " + player1, 200, 200);
      } else if (player1Score < player2Score) {
        text("Congrats " + player2, 200, 200);
      }else if (player1Score === player2Score){
        text("Congrats " + player1 + " & ", 200, 150);
        text( player2 + " it's a tie!!", 200, 250);
      }
  showInfo = false;
}

function drawBoard() {
  touchable = true;
  background(Background);
  let w = width / 3;
  let h = (height - 60) / 3;

  // Tahta çizgileri
  strokeWeight(4);
  stroke(0); // Siyah renk
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2 + 60;
      let spot = board[i][j];
      textSize(40);
      textAlign(CENTER, CENTER);
      let xr = w / 4;
      if (spot == 'X') {
        image(xImage, (x - w / 4) - 1, y - h / 4, 70, 70);
        if (!audioPlaying) {
          audio.play();
          audioPlaying = true; // Update flag when audio starts playing
          audio.onended(() => {
            audioPlaying = false; // Reset flag when audio ends
          });
        }
      } else if (spot == 'O') {
        image(oImage, x - 35, y - 35, 85, 85);
        if (!audioPlaying) {
          audio.play();
          audioPlaying = true; // Update flag when audio starts playing
          audio.onended(() => {
            audioPlaying = false; // Reset flag when audio ends
          });
        }
      }
    }
  } 
}

function resetBoard() {
  gameStart = true;
  roundEnd = false;
  
  // Randomly select the starting player for the next round
  currentPlayer = random(['X', 'O']);
  
  playersInfo();
  contBtn.hide();
  exitBtn.hide();
  round++;
  
  // Reset the board
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  drawBoard();
}


function mousePressed() {
  if(gameStart && touchable){
    if (!roundEnded) {
      let i = floor(mouseX / (width / 3));
      let j = floor((mouseY - 60) / ((height - 60) / 3));
      // Oyun tahtasına hamle yap
      if (board[i][j] === '') {
        board[i][j] = currentPlayer;
        if (currentPlayer === 'X') {
          currentPlayer = 'O';
        } else {
          currentPlayer = 'X';
        }
      }
      drawBoard();

      // Kazananı kontrol et
      winner = checkWinner();
      if (winner != null) {
        if (winner === 'X') {
          player1Score += 3;
        } else if (winner === 'O') {
          player2Score += 3;
        }
        console.log("Kazanan: " + winner);
        drawWinningLine(); // Kazananın hücresine çizgi çek
        roundEnded = true;
      } else {
        // Berabere kontrolü
        let tie = true;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
              tie = false;
            }
          }
        }
        if (tie) {
          player1Score += 1;
          player2Score += 1;
          console.log("It's a tie!");
          roundEnded = true;
        }
      }
      playersInfo(); // oyuncu bilgileri güncellemek
    } else {
      touchable = true;
      roundEnded = false;
      if (showInfo) { // essential
        playersInfo(); // yeni rounda geçince players info yok olmasın diye 
      }
    }
  }
  if (roundEnded && gameStart){
    touchable = false;
    fill(255, 255, 255, 80);
    rect(0, 0, 400, 400);
    fill('#244637');
    rect(100, 180, 200, 100);
    contBtn.show();
    exitBtn.show();
  }
}

function checkWinner() {
  // Dikey ve yatay kontrol
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
      return board[i][0];
    }
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
      return board[0][i];
    }
  }

  // Çapraz kontrol
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
    return board[0][0];
  }
  if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && board[2][0] !== '') {
    return board[2][0];
  }

  return null;
}

function drawWinningLine() {
  if (!lineaudioPlaying) {
    lineaudio.play();
    lineaudioPlaying = true; // Update flag when audio starts playing
    lineaudio.onended(() => {
      lineaudioPlaying = false; // Reset flag when audio ends
    });
  }
  
  strokeWeight(8); 
  stroke(255, 0, 0); 
  
  let w = width / 3;
  let h = (height - 60) / 3;
  
  for (let i = 0; i < 3; i++) {
    // Dikey çizgiler
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && (board[i][0] === 'X' || board[i][0] === 'O')) {
      line(i * w + w / 2, 60, i * w + w / 2, height - 10); // Dikey çizgi
    }
    // Yatay çizgiler
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && (board[0][i] === 'X' || board[0][i] === 'O')) {
      line(10, i * h + h / 2 + 60, width - 10, i * h + h / 2 + 60); // Yatay çizgi
    }
  }
  // Sol üstten sağ alta çapraz çizgi
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && (board[0][0] === 'X' || board[0][0] === 'O')) {
    line(10, 60, width - 20, height - 10); 
  }
  // Sol alttan sağ üste çapraz çizgi
  if (board[2][0] === board[1][1] && board[1][1] === board[0][2] && (board[2][0] === 'X' || board[2][0] === 'O')) {
    line(10, height - 10, width - 20, 60); 
  }
}
