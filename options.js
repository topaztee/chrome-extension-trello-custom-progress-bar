// Saves options to chrome.storage
function save_options() {
  var option = document.getElementById('option').value;

  chrome.storage.sync.set({
    userChoice: option,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    userChoice: 'rainbow',
  }, function(items) {
    document.getElementById('option').value = items.userChoice;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
  save_options);