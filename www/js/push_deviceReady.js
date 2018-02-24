var push = PushNotification.init({
	android: {
		senderID: AndroidSenderID,
		icon: 'ic_stat_icon',
		iconColor: 'teal'
	},
	ios: {
		alert: "true",
		badge: "true",
		sound: "true"
	}
});

push.on('registration', function(data) {
	// data.registrationId
	if (device.platform == 'android' || device.platform == 'Android') {
		$.get(siteURL + "external/push.sb.php?pass=al3bbasDevelopment&syst=android&id=" + data.registrationId);
		//alert(data.registrationId);
	} else {
		$.get(siteURL + "external/push.sb.php?pass=al3bbasDevelopment&syst=ios&id=" + data.registrationId);
	}
});

push.on('notification', function(data) {
	// data.message,
	// data.title,
	// data.count,
	// data.sound,
	// data.image,
	// data.additionalData
	navigator.notification.alert(data.message, undefined, 'رسالة', 'موافق');
});

push.on('error', function(e) {
	// e.message
	alert(e.message);
});