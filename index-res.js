var fs = require("fs");
var path = require("path");
var indexPath = path.resolve(__dirname, './index');

fs.mkdir(indexPath, 0777, function(err) {
  if (err) {
    console.log(err);
  } else {
    deal('./export/css/', ['index']);
    deal('./export/css/common/', ['front', 'print', 'style', 'sweetalert']);
    deal('./export/js/common//', ['sweetalert']);
    deal('./export/js/index/', ['easeljs-0.7.1.min', 'index', 'requestAnimationFrame', 'TweenLite.min']);
  }
});

function deal(key, value) {
  var realName = '',
    dir = path.resolve(__dirname, key);
  fs.readdir(dir, function(err, files) {
    if (err) {
      console.log(err);
      return;
    }
    var count = files.length;
    var results = {};
    files.forEach(function(filename) {
      realName = filename.match(/^(.+)_\w+\.(js|css)$/);
      if (!realName || !realName.length) {
        return;
      }
      realName = realName[1];
      if (value.indexOf(realName) == -1) {
        return;
      }
      var data = fs.readFileSync(path.join(dir, filename), 'utf-8');
      fs.writeFile(path.join(indexPath, filename), data, function(err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('write success:', filename);
      });
    });
  });
}
