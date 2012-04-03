
  function sayHI() {
    worker.postMessage({'cmd': 'start', 'msg': 'Hi '});
  }

  function stop() {
    // Calling worker.terminate() from this script would also stop the worker.
    worker.postMessage({'cmd': 'stop', 'msg': 'Bye'});
  }

  var worker = new Worker('js/worker.js');

  worker.addEventListener('message', function(e) {
    document.getElementById('result').textContent = e.data;
  }, false);