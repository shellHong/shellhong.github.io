var winH = window.innerHeight,
    winW = window.innerWidth,
    HEIGHT = 1000,
    WIDTH = 800,
    treeRight = 360,
    scale = 1,
    isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);

if(isMobile){
  scale = Math.min(window.innerWidth/HEIGHT, window.innerHeight/WIDTH);
  if(winH < HEIGHT){
    winH /= scale;
  }
  if(winW < 400){
    document.getElementById('output-wrap').style.left = '10%';
  }
  if(winW < WIDTH){
    winW /= scale;
  }
  if(scale < 1){
    document.querySelector('meta[name="viewport"]').setAttribute('content', "width=device-width, initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no");
  }
  var temp = winW * .3;
  if(treeRight > temp){
    treeRight = temp;
  }
}

// Tree configuration
var flowers = [];
var branches = [];
var offsetH = 30;
var flowerMax = 0;
var flowerMin = 600;
var startH = winH - offsetH;
var seed = {
  i: 0,
  x: winW - treeRight,
  y: startH,
  a: 0,
  l: 120,
  d: 0
}; // a = angle, l = length, d = depth
var da = 0.5; // Angle delta
var dl = 0.8; // Length delta (factor)
var ar = 0.7; // Randomness
var maxDepth = 10;
var angle = da;
var mainSvg = d3.select('svg');
var halfW = winW / 3;
var qW = halfW / 2;
var bottomH = 4;

// Tree creation functions
function branch(b) {
  var end = endPt(b),
    daR, newB;
  branches.push(b);

  if (b.d === maxDepth) {
    flowerMax = Math.max(b.y, flowerMax);
    flowerMin = Math.min(b.y, flowerMin);
    flowers.push(b);
    return;
  }
  // Left branch
  daR = ar * Math.random() - ar * 0.5;
  if (b.d < 3) {
    angle = .4;
  } else {
    angle = da;
  }
  newB = {
    i: branches.length,
    x: end.x,
    y: end.y,
    a: b.a - angle + daR,
    l: b.l * dl,
    d: b.d + 1,
    parent: b.i
  };
  branch(newB);

  // Right branch
  daR = ar * Math.random() - ar * 0.5;
  if (b.d < 3) {
    angle = .3;
  } else {
    angle = da;
  }
  newB = {
    i: branches.length,
    x: end.x,
    y: end.y,
    a: b.a + angle + daR,
    l: b.l * dl,
    d: b.d + 1,
    parent: b.i
  };
  branch(newB);
}

function regenerate() {
  branches = [];
  branch(seed);
  create();
}

function endPt(b) {
  // Return endpoint of branch
  var l = b.l;
  if (b.d < 2) {
    l += 50;
  }
  var x = b.x + l * Math.sin(b.a);
  var y = b.y - l * Math.cos(b.a);
  return {
    x: x,
    y: y
  };
}

// D3 functions
function x1(d) {
  return d.x;
}

function y1(d) {
  return d.y;
}

function x2(d) {
  return endPt(d).x;
}

function y2(d) {
  return endPt(d).y;
}

// function highlightParents(d) {
//   var colour = d3.event.type === 'mouseover' ? 'green' : '#777';
//   var depth = d.d;
//   for (var i = 0; i <= depth; i++) {
//     d3.select('#id-' + parseInt(d.i)).style('stroke', colour);
//     d = branches[d.parent];
//   }
// }

function getPoint(startX, startY, endX, endY, dLen){
  var xOffset = endX - startX,
      yOffset = endY - startY,
      len = Math.sqrt(Math.pow(xOffset, 2) + Math.pow(yOffset, 2)),
      rate = dLen / len;

  return [startX + xOffset * rate, startY + yOffset * rate];
}

var heartStartX = 0,
    heartStartY = 0;

function transform(str, w, h) {
  var halfW = w / 2,
      halfH = h / 2,
      winHalfW = winW / 2,
      winHalfH = winH / 2;
   r = str.replace(/m([-\d\.]+),([-\d\.]+)/g, function(){
    var args = arguments;
    heartStartX = parseFloat(args[1]) + winHalfW - halfW;
    heartStartY = parseFloat(args[2]) + winHalfH - halfH;

    return 'm' + heartStartX + ',' + heartStartY;
  });
  return r;
}

function createHeartPath() {
  return new Promise(function(resolve, reject){
    mainSvg.append('path')
      .attr('id', 'heartPath')
      .style('stroke', 'red')
      .style('stroke-width', 1)
      .attr('d', transform('m29.727744,14.504978c11.750414,-31.304472 57.78892,0 0,40.248607c-57.78892,-40.248607 -11.750414,-71.553079 0,-40.248607z', 57, 53))
      .attr('fill-opacity', 0)
      .classed('appearHeartPath', true);
    resolve();
  });
}

function createTipLine() {
  return new Promise(function(resolve, reject){
    mainSvg.append('line')
      .style('stroke-width', 1)
      .attr('id', 'tipLine')
      .style('stroke', 'red')
      .transition()
      .delay(function(d, i) {
        return 2500;
      })
      .attr('x1', heartStartX + 15 + 16)
      .attr('y1', heartStartY + 30)
      .attr('x2', heartStartX + 15 + 16)
      .attr('y2', heartStartY + 30)
      .transition()
      .delay(function(d, i) {
        return 0;
      })
      .duration(2000)
      .attr('x2', heartStartX + 100 + 16)
      .attr('y2', heartStartY + 30)
      .on('end', function(){
        resolve();
      });
  });
}

function createTipText() {
  return new Promise(function(resolve, reject){
    mainSvg.append('text')
      .attr('id', 'tipText')
      .transition()
      .delay(function(d, i) {
        return 0;
      })
      .style('fill', 'red')
      .attr('x', heartStartX + 17 + 16)
      .attr('y', heartStartY + 23)
      .text('请点击红心')
      .attr('fill-opacity', 0)
      .transition()
      .duration(1000)
      .attr('fill-opacity', 0.6)
      .on('end', function(){
        resolve();
      });
  });
}

function addHeartListener() {
  var heartLen = 190;
  return new Promise(function(resolve, reject){
    var heartPath = mainSvg.select('#heartPath')
    var tipText = mainSvg.select('#tipText')
    var tipLine = mainSvg.select('#tipLine')
    heartPath.on('click', function(){
      tipText.remove();
      tipLine.remove();
      heartPath.classed('appearHeartPath', false);
      heartPath.classed('disappearHeartPath', true);

      var point1 = getPoint(heartStartX, heartStartY, 0, winH, heartLen),
          point2 = getPoint(0, winH, heartStartX, heartStartY, heartLen);

      var line = mainSvg.append('line')
        .style('stroke', 'red')
        .attr('x1', heartStartX)
        .attr('y1', heartStartY)
        .attr('x2', heartStartX)
        .attr('y2', heartStartY)
        .transition()
        .delay(function(d, i) {
          return 0;
        })
        .duration(3000)
        .ease(d3.easeLinear)
        .attr('x2', point1[0])
        .attr('y2', point1[1])
        .transition()
        .delay(function(d, i) {
          return 0;
        })
        .duration(3000)
        .ease(d3.easeLinear)
        .attr('x2', 0)
        .attr('y2', winH)
        .attr('x1', point2[0])
        .attr('y1', point2[1])
        .transition()
        .delay(function(d, i) {
          return 0;
        })
        .ease(d3.easeLinear)
        .duration(1000)
        .attr('x1', 0)
        .attr('y1', winH)
        .remove()
        .on('end', function(){
          mainSvg.select('#heartPath').remove();
          resolve();
        });
    });
  });
}

function createHeart() {
  createHeartPath()
    .then(createTipLine)
    .then(createTipText)
    .then(addHeartListener)
    .then(regenerate);
}

function create() {
  createGround()
    .then(createChair)
    .then(createPeople)
    .then(createTree)
    .then(createFlowers)
    .then(createText);
}

function createGround() {
  return new Promise(function(resolve, reject){
    mainSvg.append('path')
      .classed('groundPath', true)
      .style('stroke-dasharray', winW * 1.1)
      .style('stroke-dashoffset', winW * 1.1)
      .style('stroke', '#cacaca')
      .style('stroke-width', bottomH)
      .attr('d', 'm0,' + (winH - bottomH) + 'h' + halfW + 'c' + (halfW + halfW/6) + ',-65 ' + (halfW + halfW/4) + ',-45 ' + (winW) + ',0')
      .attr('fill', '#d4d4d4')
      .attr('fill-opacity', 0)
      .transition()
      .delay(function(d, i) {
        return 5000;
      })
      .duration(500)
      .attr('fill-opacity', 1)
      .on('end', function(){
        document.getElementById('groundFill').style.display = 'block';
        resolve();
      });
  });
}

function createChair() {
  return new Promise(function(resolve, reject){
    mainSvg.append('path')
      .classed('chairPath', true)
      .style('stroke', '#a58b8b')
      .style('stroke-width', 1)
      .attr('d', 'm'+qW+','+(winH - bottomH - 13) + 'h100v13h-100v-13')
      .attr('fill', '#a68b9b')
      .attr('fill-opacity', 0)
      .transition()
      .delay(function(d, i) {
        return 3000;
      })
      .duration(500)
      .attr('fill-opacity', 1)
      .on('end', function(){
        resolve();
      });
  });
}

function createPeople() {
  return new Promise(function(resolve, reject){
    document.getElementById('people').style.left = qW + 'px';
    d3.select('#people')
      .append('path')
      .classed('peoplePath', true)
      .style('stroke', '#4a4a4a')
      .style('stroke-width', 1.5)
      .attr('d', 'm102.36685,19.712079c-3.509374,3.348599 -18.622442,7.595834 -20.571686,7.595834l-16.566741,0c-2.749499,0 -6.890267,0.463507 -8.839511,1.526104c0.223924,0.170268 0.447849,0.340536 0.664432,0.513956c1.497724,1.195027 4.999757,2.878786 8.097991,2.878786c1.457345,0 2.654056,-0.362607 3.670893,-1.1162c4.324312,-3.175178 6.570899,-3.547245 7.874066,-3.547245c1.545446,0 2.874309,0.60855 3.65621,1.6743c1.468357,1.973845 0.389115,4.556239 '+ '-0.712153,6.580533c-2.635701,4.805334 -11.225592,9.998501 -20.538648,9.998501c-0.007342,0 -0.007342,0 -0.014684,0c-1.299496,0 -2.573296,-0.104053 -3.792033,-0.312158l0,10.250749c0,2.339605 3.792033,7.986819 15.296612,7.986819s14.518383,-11.669647 14.518383,-13.678176l0,-14.226817c8.186092,-3.685982 16.56307,-5.691357 20.571686,-12.28135c3.770007,-6.192701 0.190886,-7.192236 -3.314817,-3.843637zm-25.732962,14.901582c2.922031,-5.357128 -0.194557,-5.357128 '+ '-5.653176,-1.34007s-13.453824,0.331076 -16.181298,-1.844567c-2.727474,-2.17249 -5.454947,-3.84679 -10.329894,-3.679675c-4.874946,0.167115 -16.372184,-0.50765 -23.005488,-1.844567c-6.625962,-1.34007 -17.969023,-9.45932 -18.9051,-7.362504c-0.976458,2.175644 0.774558,3.682828 4.287603,7.362504c3.505703,3.685982 18.629783,8.75933 18.629783,8.75933s0,10.887677 0,15.406079c0,4.524708 10.913566,11.382715 16.56307,11.382715s9.940779,-3.348599 '+ '9.940779,-5.69451l0,-14.226817c9.357107,4.193632 21.731688,-1.557635 24.653719,-6.917916zm-5.873429,-11.953427c6.402038,0 11.596352,-4.458493 11.596352,-9.957511c0,-5.502171 -5.194314,-9.960664 -11.596352,-9.960664s-11.592681,4.458493 -11.592681,9.960664c0,5.499018 5.190643,9.957511 11.592681,9.957511zm-30.552845,0c6.402038,0 11.592681,-4.458493 11.592681,-9.957511c0,-5.502171 -5.190643,-9.960664 -11.592681,-9.960664c-6.405709,0 -11.596352,4.458493 '+ '-11.596352,9.960664c0,5.499018 5.186972,9.957511 11.596352,9.957511z')
      .attr('fill-opacity', 0);
      setTimeout(function(){
        resolve();
      }, 2000);
  });

}

function createTree() {
  var stepDelay = 10;
  return new Promise(function(resolve, reject){
    mainSvg.selectAll('line')
      .data(branches)
      .enter()
      .append('line')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x1)
      .attr('y2', y1)
      .style('stroke-width', function(d) {
        return parseInt(maxDepth + 1 - d.d) + 'px';
      })
      .attr('id', function(d) {
        return 'id-' + d.i;
      })
      // .on('mouseover', highlightParents)
      // .on('mouseout', highlightParents)
      .transition()
      .delay(function(d, i) {
        return i * stepDelay;
      })
      .duration(500)
      .ease(d3.easeLinear)
      .attr('x2', x2)
      .attr('y2', y2)
      .on('end', function(d, index){
        if(index + 1 == branches.length){
          resolve();
        }
      });
  });
}

function createFlowers() {
  return new Promise(function(resolve, reject){
    if(!isMobile){
      mainSvg.append("defs")
        .append("filter")
        .attr("id", "Gaussian_Blur")
        .append("feGaussianBlur")
        .attr("in", "SourceGraphic")
        .attr("stdDeviation", 2);
    }

    var transition = mainSvg.selectAll('circle')
      .data(flowers)
      .enter()
      .append('circle')
      .attr('cx', x2)
      .attr('cy', y2)
      .attr('r', 0)
      .attr('fill', '#f7acbc')
      .transition()
      .delay(function(d, i) {
        return i % 5;
      })
      .duration(500)
      .attr('r', 5);
    if(isMobile){
      transition = transition.style("fill-opacity", ".6");
    }else{
      transition = transition.style("filter", "url(#Gaussian_Blur)");
    }

    transition.on('end', function(d, index){
      if(index + 1 == flowers.length){
        resolve();
        document.getElementById('output-wrap').style.display = 'block';
      }
    });
  });
}
function createText() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      var ele = document.getElementById('output-wrap');
      ele.style.top = flowerMin + (flowerMax - flowerMin)/2 - (80 * scale) + 'px';
      ele.style.display = 'block';
      var typing = new Typing({
        source: document.getElementById('source'),
        output: document.getElementById('output'),
        delay: 80,
        brDelay: 1000,
        end: function() {
          setTimeout(function(){
            document.getElementById('typing-cursor').remove();
            resolve();
          }, 300);
        }
      });
      typing.start();
    }, 1000);
  });
}

createHeart();
