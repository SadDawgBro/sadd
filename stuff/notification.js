function requestToAllowNotifications() {
  Notification.requestPermission();
}
function sendNotification(title, body) {
  var notification = new Notification(title, { body: body});
}
