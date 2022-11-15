$("#game").hide()
  
  async function load() {
    setTimeout(() => {
    $(".loadingScreen").fadeOut(500)
    $("#game").fadeIn(1000)
  }, 2000)
  }
  load()
  const c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let log = console.log;
let scale = 15;
const rows = c.height / scale;
const columns = c.width / scale;
let speed = 7;
  let y = 0;
  let x = 0;
  let velocity = null;
  $("#Dead").hide()
const game = {
  core: {
    clearScreen(){
      ctx.fillStyle = "#3e3e3e"
      ctx.fillRect(0, 0, c.width, c.height)
    },
    draw(){
      ctx.fillStyle = "yellow"
      ctx.fillRect(x, y, scale, scale);
    },
    loop(){
      game.core.clearScreen();
      game.core.draw();
      setTimeout(() => {
        log("Updating Screen..")
        game.core.loop();
      }, 1000 / speed)
    },
    death() {
      velocity = null;
        $("#game").fadeOut(1000)
        //$(".controlButtons").fadeOut(1000)
        $("#Dead").fadeIn(1000)
    }
  },
  movement: {
    left(){
      if(x < 0) return game.core.death();
      if(x > 0) {
        velocity = "left"
}
      },
      right() {
      if(x > 285) return;
      if (x < 285) {
        velocity = "right"
      }
      },
    up(){
      velocity = "up"
    },
    down(){
      velocity = "down"
    },
    test(){log(`x: ${x} y: ${y}`)}
}
}

    
     
    
game.core.draw();
game.core.loop();
var controls = setInterval(() => {
  if (velocity === "right") {
    if(x === 285) return game.core.death()
    if(x < 285) return x += 15;
  }
  if (velocity === "left") {
    if (x < 0) return game.core.death();
    if (x > 0) return x = (x - 15);
  }
  if (velocity === "down") {
    if (y === 285) return game.core.death()
    y += 15;
  }
  if (velocity === "up") {
    if (y === 0) return game.core.death();
    y = (y - 15)
    
  }
}, 300);


const reload = () => {
  x = 0;
  y = 0;
  $("#Dead").hide()
  $(".loadingScreen").fadeIn(0)
  load()
  game.core.loop()
}