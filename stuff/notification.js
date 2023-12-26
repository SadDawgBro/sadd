function sendNotification(title, body) {
  Notification.requestPermission();
  var notification = new Notification(title, { body: body});
}
