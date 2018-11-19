var fs = require('fs');
var completedTasks = 0;
var tasks = [];
var workCounts = {};
var filesDir = './done';

// if complete list all word counts
function checkIfComplete () {
  completedTasks++;
  if (completedTasks == tasks.length) {
    for (var index in workCounts) {
      console.log(index + ': ' + workCounts[index]);
    }
  }
}

// count words no repeat
function countWordsInText (text) {
  var words = text.toString().toLowerCase().split(/\w+/).sort();
  for (var index in words) {
    var word = words[index];
    if (word) {
      workCounts[word] = (workCounts[word]) ? workCounts[word] + 1 : 1;
    }
  }
}

// read this fileDir and loop all file
fs.readdir(filesDir, function (err, files) {
  if (err) throw err;
  
  for (var index in files) {
    var task = (function (file) {
      return function () {
        fs.readFile(file, function (err, text) { // read file text
          if (err) throw err;
          countWordsInText(text);
          checkIfComplete();  // every file check if complete
        });
      };
    })(filesDir + '/' + files[index]);
    tasks.push(task);
  }
  
  for (var task in tasks) {
    tasks[task]();
  }
});
