(function(){
    var stage, textStage, form, input, entrance;
    var circles, textPixels, textFormed;
    var offsetX, offsetY, text;
    var colors = ['#B2949D', '#FFF578', '#FF5F8D', '#37A9CC', '#188EB2'];

    var WIDTH = 660;
    var HEIGHT = 200;

    function init() {
        initStages();
        initForm();
        initText();
        initCircles();
        animate();
        addListeners();
    }

    // Init Canvas
    function initStages() {
        offsetX = (window.innerWidth-WIDTH)/2;
        offsetY = (window.innerHeight-300)/2;
        textStage = new createjs.Stage("text");
        textStage.canvas.width = WIDTH;
        textStage.canvas.height = HEIGHT;

        stage = new createjs.Stage("stage");
        stage.canvas.width = window.innerWidth;
        stage.canvas.height = window.innerHeight;
    }

    function initForm() {
        form = document.getElementById('form');
        form.style.top = offsetY+HEIGHT+'px';
        form.style.left = offsetX+'px';
        input = document.getElementById('inputText');

        entrance = document.getElementById('entrance');
        entrance.style.top = offsetY+'px';
        entrance.style.left = offsetX+'px';
        entrance.style.width = WIDTH+'px';
        entrance.style.height = HEIGHT+'px';
    }

    function initText() {
        text = new createjs.Text("t", "80px 'Source Sans Pro'", "#eee");
        text.textAlign = 'center';
        text.x = 300;
    }

    function initCircles() {
        circles = [];
        for(var i=0; i<WIDTH; i++) {
            var circle = new createjs.Shape();
            var r = 7;
            var x = window.innerWidth*Math.random();
            var y = window.innerHeight*Math.random();
            var color = colors[Math.floor(i%colors.length)];
            var alpha = 0.2 + Math.random()*0.5;
            circle.alpha = alpha;
            circle.radius = r;
            circle.graphics.beginFill(color).drawCircle(0, 0, r);
            circle.x = x;
            circle.y = y;
            circles.push(circle);
            stage.addChild(circle);
            circle.movement = 'float';
            tweenCircle(circle);
        }
    }


    // animating circles
    function animate() {
        stage.update();
        requestAnimationFrame(animate);
    }

    function tweenCircle(c, dir) {
        if(c.tween) c.tween.kill();
        if(dir == 'in') {
            c.tween = TweenLite.to(c, 0.4, {x: c.originX, y: c.originY, ease:Quad.easeInOut, alpha: 1, radius: 5, scaleX: 0.4, scaleY: 0.4, onComplete: function() {
                c.movement = 'jiggle';
                tweenCircle(c);
            }});
        } else if(dir == 'out') {
            c.tween = TweenLite.to(c, 0.8, {x: window.innerWidth*Math.random(), y: window.innerHeight*Math.random(), ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5, scaleX: 1, scaleY: 1, onComplete: function() {
                c.movement = 'float';
                tweenCircle(c);
            }});
        } else {
            if(c.movement == 'float') {
                c.tween = TweenLite.to(c, 5 + Math.random()*3.5, {x: c.x + -100+Math.random()*HEIGHT, y: c.y + -100+Math.random()*HEIGHT, ease:Quad.easeInOut, alpha: 0.2 + Math.random()*0.5,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            } else {
                c.tween = TweenLite.to(c, 0.05, {x: c.originX + Math.random()*3, y: c.originY + Math.random()*3, ease:Quad.easeInOut,
                    onComplete: function() {
                        tweenCircle(c);
                    }});
            }
        }
    }

    function formText() {
        for(var i= 0, l=textPixels.length; i<l; i++) {
            circles[i].originX = offsetX + textPixels[i].x;
            circles[i].originY = offsetY + textPixels[i].y;
            tweenCircle(circles[i], 'in');
        }
        textFormed = true;
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, {alpha: 0.1});
            }
        }
    }

    function explode() {
        for(var i= 0, l=textPixels.length; i<l; i++) {
            tweenCircle(circles[i], 'out');
        }
        if(textPixels.length < circles.length) {
            for(var j = textPixels.length; j<circles.length; j++) {
                circles[j].tween = TweenLite.to(circles[j], 0.4, {alpha: 1});
            }
        }
    }

    // event handlers
    function addListeners() {
        entrance.addEventListener('click', function(e) {
          if(swal){
            swal({
              title: "",
              text: "",
              type: "input",
              showCancelButton: true,
              closeOnConfirm: false,
              animation: "slide-from-top",
              inputPlaceholder: "请输入授权码"
            },
            function(inputValue){
              if (inputValue === false) return false;

              if (inputValue === "") {
                swal.showInputError("授权码不能为空");
                return false
              }
              location.href = inputValue.toLowerCase() + '/work_nav.html';
            });
            setTimeout(function(){
              document.querySelector('.sweet-alert input').setAttribute('type', 'password');
            }, 0);
          }
        });
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if(textFormed) {
                explode();
                if(input.value != '') {
                    setTimeout(function() {
                        createText(input.value.toUpperCase());
                    }, 810);
                } else {
                    textFormed = false;
                }
            } else {
                createText(input.value.toUpperCase());
            }

        });
    }

    function createText(t, forceFontSize) {
        var fontSize = 860/(t.length);
        if (fontSize > 160) fontSize = 160;
        forceFontSize && (fontSize = forceFontSize);
        text.text = t;
        text.font = "900 "+fontSize+"px 'Source Sans Pro'";
        text.textAlign = 'center';
        text.x = WIDTH/2;
        text.y = (172-fontSize)/2;
        textStage.addChild(text);
        textStage.update();

        var ctx = document.getElementById('text').getContext('2d');
        var pix = ctx.getImageData(0,0,WIDTH,HEIGHT).data;
        textPixels = [];
        for (var i = pix.length; i >= 0; i -= 4) {
            if (pix[i] != 0) {
                var x = (i / 4) % WIDTH;
                var y = Math.floor(Math.floor(i/WIDTH)/4);

                if((x && x%8 == 0) && (y && y%8 == 0)) textPixels.push({x: x, y: y});
            }
        }

        formText();

    }

    function fillAlertRes(){
      var script = document.createElement('script');
      script.setAttribute('src', './index/sweetalert_2f9966a6.js');
      document.body.appendChild(script);
      var link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('media', 'screen');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', './index/sweetalert_d8cc2607.css');
      document.body.appendChild(link);
    }

    window.onload = function() {
      init();
      var index = 3;
      var handle = setInterval(function(){
        if(index > 0){
          textPixels && explode();
          createText(new String(index));
        }else{
          explode();
          setTimeout(function() {
            createText('WELCOME');
          }, 810);
          clearInterval(handle);
        }
        index--;
      }, 1000);
      setTimeout(function(){
        fillAlertRes();
      }, 1000);
    };
})();
