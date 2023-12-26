function sendNotification(title, body) {
  if (!Notification) {
    // console.log('This browser does not support notifications.');
    alert('This browser does not support notifications.');
  else {
    Notification.requestPermission();
    var notification = new Notification(title, { body: body});
  }
}
