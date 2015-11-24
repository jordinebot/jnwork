function $(id) {
  return document.getElementById(id);
}

function toggleMenu() {
  document.body.classList.toggle('show-aside');
  document.body.classList.toggle('lock-overflow');
  $('menu-icon').classList.toggle('rotate');
}

var menuButton = $('menu-button');
menuButton.addEventListener('click', toggleMenu);
var menuOptions = document.querySelectorAll('.menu-item a');
menuOptions.addEventListener('click', toggleMenu);

function finishedPreload() {
  setTimeout(function() {
    progressBar.classList.toggle('loading');
  }, 500);
  setTimeout(function() {
    progressBar.style.width = 0;
  }, 1000);
}

var preload = document.querySelectorAll('.thumbnail, .highres-image');
var imgLoad = imagesLoaded(preload, { background: true }, finishedPreload),
    imagesToLoad = 0,
    alreadyLoaded = 0,
    progressBar = $('progress-bar');

imgLoad.on('progress', function(instance, image) {
  if (! imagesToLoad) {
    imagesToLoad = instance.elements.length;
  }
  if (! progressBar.classList.contains('loading')) {
    progressBar.classList.toggle('loading');
  }
  progressBar.style.width = 100 * (++alreadyLoaded / imagesToLoad) + '%';
});

var timer = {
  callback : false,
  timeout  : 300
};

var selection = '',
    message   = '';

$('me').addEventListener('mouseup', function() {
  if (timer.callback) {
    clearTimeout(timer.callback);
  }
  selection = window.getSelection().toString();
  switch(selection) {
    case 'jordinebot':
      message = "Hey! It's me! ;)";
      break;
    case 'jordi':
      message = "Yeap, you can call me that :)";
      break;
    case 'nebot':
      message = "My family name: Nebot.";
      break;
    case 'jord':
      message = "Jord. How my everyday barista calls me... She knows.";
      break;
    default:
      message = "";
  };
  if (message !== "") {
    timer.callback = setTimeout(function() {
      console.log(message);
    }, timer.timeout);
  }
});