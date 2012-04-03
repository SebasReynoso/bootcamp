  function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.
    var file = files[0];
    var start = 0;
    var stop = file.size - 1;

    var reader = new FileReader();

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function(evt) {
      if (evt.target.readyState == FileReader.DONE) { // DONE == 2
        document.getElementById('text').value = evt.target.result;

      }
    };

    if (file.webkitSlice) {
      var blob = file.webkitSlice(start, stop + 1);
    } else if (file.mozSlice) {
      var blob = file.mozSlice(start, stop + 1);
    }
    reader.readAsBinaryString(blob);

}

  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  // Setup the dnd listeners.
  var text = document.getElementById('text');
  text.addEventListener('dragover', handleDragOver, false);
  text.addEventListener('drop', handleFileSelect, false);
