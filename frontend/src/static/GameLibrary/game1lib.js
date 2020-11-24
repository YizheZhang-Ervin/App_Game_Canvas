
function start() {
    //按钮
    let arr = ["left","right","up","down"];
    arr.forEach((val)=>{
        createButton(val);
    })
    // 声音
    soundAppear();
    // 加载图片+动起来
    bgAppear();
    // 主角出场+动起来
    let hero = heroAppear();
    // 创建敌机+向下飞行
    let enemyArray = enemyAppear(hero);
    // 子弹出现+飞起来
    bulletAppear(hero, enemyArray);
}
function createButton(direction){
    let btn = document.createElement("input");
    btn.id = direction + "Btn";
    btn.type = "button";
    btn.style.width = "64px";
    btn.style.height = "64px";
    btn.style.position = "absolute";
    btn.style.zIndex = '10';
    btn.style.backgroundColor="transparent";
    btn.style.color = "white";
    if(direction=="left"){
        btn.value = "<-";
        btn.style.left = "64px";
        btn.style.bottom = "64px";
        console.log(btn.style.top)
    }else if(direction=="right"){
        btn.value = "->";
        btn.style.left = "192px";
        btn.style.bottom = "64px";
    }else if(direction=="up"){
        btn.value = "^";
        btn.style.right = "64px";
        btn.style.bottom = "64px";
    }else if(direction=="down"){
        btn.value = "V";
        btn.style.right = "192px";
        btn.style.bottom = "64px";
    }
    document.getElementById("div001").appendChild(btn);
}
function soundAppear() {
    // 声音
    // let bgsURL = require("")
    // let bgSound = new Audio(bgsURL);
    // bgSound.loop = true;
    // bgSound.play();
}
function bgAppear() {
    let bgCanvas = document.getElementById("canvas");
    let context = bgCanvas.getContext("2d");
    let width = bgCanvas.width;
    let height = bgCanvas.height;
    let backgroundOffset = 0;
    let image = new Image();
    image.onload = function () {
        context.drawImage(this, 0, 0, width, height);
        context.drawImage(this, -width, 0, width, height);
    };
    let bgURL = require("../../assets/game1/backgroundSea.png");
    image.src = bgURL;

    // 移动背景
    function animateBackground(bgCanvas, image, speed) {
        let context = bgCanvas.getContext("2d");
        let width = bgCanvas.width;
        let height = bgCanvas.height;
        //清除画布
        context.clearRect(0, 0, width, height);
        context.save();
        //更新位置
        backgroundOffset += speed;
        if (backgroundOffset >= width) {
            backgroundOffset = 0;
        }
        context.translate(backgroundOffset, 0);
        //绘制图片
        context.drawImage(image, 0, 0, width, height);
        context.drawImage(image, -width, 0, width, height);
        // 获取存储状态
        context.restore();
    }
    setInterval(() => {
        // 执行速度
        let speed = 2;
        // 执行方法
        animateBackground(bgCanvas, image, speed);
    }, 30);
}
function heroAppear() {
    let heroCanvas = document.getElementById("heroCanvas");
    let context = heroCanvas.getContext("2d");
    let img = require("../../assets/game1/hero.png");
    let hero = createHero(171, 96, heroCanvas, img, heroLoaded);
    function heroLoaded() {
        hero.draw(heroCanvas);
    }
    // hero动起来
    setInterval(function () {
        context.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
        hero.draw(heroCanvas);
    }, 30);
    return hero;
}
function bulletAppear(hero, enemyArray) {
    let bCanvas = document.getElementById("bulletCanvas");
    let bContext = bCanvas.getContext("2d");
    let bURL = require("../../assets/game1/bullet.png");
    let bulletArray = new Array();
    setInterval(() => {
        let bullet = createBullet(44, 44, bURL, hero);
        bulletArray.push(bullet);
        bullet.draw(bCanvas);
    }, 200);
    setInterval(() => {
        // 清除画布
        bContext.clearRect(0, 0, bCanvas.width, bCanvas.height);
        for (let i = 0; i < bulletArray.length; i++) {
            // 子弹出屏从数组中删去
            if (bulletArray[i].isOutOfScreen(bCanvas)) {
                bulletArray.splice(i, 1);
            }
            bulletArray[i].move();
            bulletArray[i].draw(bCanvas);
            // 循环敌机
            for (let j = 0; j < enemyArray.length; j++) {
                if (isEnemyHitHero(bulletArray[i], enemyArray[j])) {
                    enemyArray[j].crash();
                    enemyArray.splice(j, 1);
                    bulletArray.splice(i, 1);
                }
            }
        }
    }, 30);
}
function enemyAppear(hero) {
    let eCanvas = document.getElementById("enemyCanvas");
    let eContext = eCanvas.getContext("2d");
    let enemyArray = new Array();
    setInterval(() => {
        let number = Math.round(Math.random() * (3 - 1) + 1);
        let enemy;
        let eURL = require("../../assets/game1/enemy.png");
        switch (number) {
            case 1: {
                enemy = createEnemy(0, 0, eURL, eCanvas);
                break;
            }
            case 2: {
                enemy = createEnemy(128, 0, eURL, eCanvas);
                break;
            }
            case 3: {
                enemy = createEnemy(256, 0, eURL, eCanvas);
                break;
            }
        }
        enemyArray.push(enemy);
        enemy.draw(eCanvas);
    }, 1000);

    // 敌机向左飞行
    let eTimer = setInterval(() => {
        eContext.clearRect(0, 0, eCanvas.width, eCanvas.height);
        for (var i = 0; i < enemyArray.length; i++) {
            enemyArray[i].move();
            enemyArray[i].draw(eCanvas);
            // 碰撞检测
            if (isEnemyHitHero(enemyArray[i], hero)) {
                clearInterval(eTimer);
                eTimer = null;
                alert("Game over");
                window.location.replace('/games/game1');
            }
            // 判断敌机是否出屏幕
            if (enemyArray[i].isOutOfScreen()) {
                enemyArray.splice(i, 1);
            }
        }
    });
    return enemyArray;
}
function Hero(x, y, w, h, imageURL, completeCallback) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = new Image();
    // 加载图片
    this.image.onload = function () {
        if (completeCallback) {
            completeCallback(this);
        }
    };
    // 添加图片源
    this.image.src = imageURL;
    this.draw = function (canvas) {
        let context = canvas.getContext("2d");
        let x = this.w * this.bool;
        context.drawImage(this.image, x, 0, this.w, this.h, this.x, this.y, this.w, this.h);
        this.bool = !this.bool;
    };
    //图片开关
    this.bool = true;
}
function createHero(w, h, canvas, imageURL, completeCallback) {
    let height = canvas.height;
    // 垂直居中,水平向右20像素
    let y = height / 2 - h / 2;
    let x = 20;
    let hero = new Hero(x, y, w, h, imageURL, completeCallback);
    // 按钮
    let map = {
        left:document.getElementById("leftBtn"),
        right:document.getElementById("rightBtn"),
        up:document.getElementById("upBtn"),
        down:document.getElementById("downBtn")
    };
    for(let i in map){
        map[i].ontouchstart = function(){
            hero[i] = true;
        }
        map[i].ontouchend = function(){
            hero[i] = false;
        }
    }
    document.onkeydown = function (e) {
        let event = e || window.event;
        switch (event.keyCode) {
            case 37: {
                hero.left = true;
                break;
            }
            case 38: {
                hero.up = true;
                break;
            }
            case 39: {
                hero.right = true;
                break;
            }
            case 40: {
                hero.down = true;
                break;
            }
        }
    };
    document.onkeyup = function (e) {
        let event = e || window.event;
        switch (event.keyCode) {
            case 37: {
                hero.left = false;
                break;
            }
            case 38: {
                hero.up = false;
                break;
            }
            case 39: {
                hero.right = false;
                break;
            }
            case 40: {
                hero.down = false;
                break;
            }
        }
    };
    setInterval(function () {
        let leftFlag = hero.x >= 0;
        let rightFlag = hero.x <= canvas.width - hero.w;
        let topFlag = hero.y >= 0;
        let bottomFlag = hero.y <= canvas.height - hero.h;
        if (leftFlag && (hero.left == true)) {
            hero.x -= 5;
        } else if (!leftFlag && hero.left == true) {
            hero.x = canvas.width - hero.w
        }
        if (topFlag && hero.up == true) {
            hero.y -= 5;
        } else if (!topFlag && hero.up == true) {
            hero.y = canvas.height - hero.h
        }
        if (rightFlag && hero.right == true) {
            hero.x += 5;
        } else if (!rightFlag && hero.right == true) {
            hero.x = 0
        }
        if (bottomFlag && hero.down == true) {
            hero.y += 5;
        } else if (!bottomFlag && hero.down == true) {
            hero.y = 0;
        }
    }, 10);
return hero;
}
function Bullet(x, y, w, h, imageURL) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = new Image();
    this.image.src = imageURL;
    this.draw = function (canvas) {
        let context = canvas.getContext("2d");
        context.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
    this.move = function () {
        this.x += 10;
    };
    this.isOutOfScreen = function (canvas) {
        if (this.x > canvas.width) {
            return true;
        } else {
            return false;
        }
    };
}
function createBullet(bWidth, bHeight, bURL, hero) {
    let x = hero.x + hero.w + bWidth / 2;
    let y = hero.y + bHeight / 4;
    let bullet = new Bullet(x, y, bWidth, bHeight, bURL);
    // 子弹声音
    // let bsURL = require("");
    // let bSound = new Audio(bsURL);
    // bSound.play();
    return bullet;
}
function Enemy(planeW, planeH, imageURL, canvas) {
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    let y = Math.round(Math.random() * (canvasHeight - 128 - 0) + 0);
    this.y = y;
    this.x = canvasWidth;
    this.w = 128;
    this.h = 128;
    this.speed = Math.round(Math.random() * (10 - 3) + 3) / 10;
    this.image = new Image();
    this.image.src = imageURL;
    this.draw = function (ecanvas) {
        var context = ecanvas.getContext("2d");
        context.drawImage(
            this.image,
            planeW, planeH, 128, 128,
            this.x, this.y, this.w, this.h
        );
    };
    this.move = function () {
        this.x -= this.speed;
    };
    this.isOutOfScreen = function () {
        if (this.x < 0) {
            return true;
        } else {
            return false;
        }
    },
        this.crash = function () {
            // let sURL = require('')
            // let endSound = new Audio(sURL);
            // endSound.play();
        };
}
function createEnemy(w, h, imageURL, canvas) {
    let enemy = new Enemy(w, h, imageURL, canvas);
    return enemy;
}
function isEnemyHitHero(obj1, obj2) {
    let minX1 = obj1.x;
    let minY1 = obj1.y;
    let maxX1 = obj1.x + obj1.w;
    let maxY1 = obj1.y + obj1.h;
    let minX2 = obj2.x;
    let minY2 = obj2.y;
    let maxX2 = obj2.x + obj2.w;
    let maxY2 = obj2.y + obj2.h;
    let minX = Math.max(minX1, minX2);
    let minY = Math.max(minY1, minY2);
    let maxX = Math.min(maxX1, maxX2);
    let maxY = Math.min(maxY1, maxY2);
    if (minX < maxX && minY < maxY) {
        return true;
    } else {
        return false;
    }
}

export default start;