if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log('Yeii, registration worked!');
	})
	.catch(function() {
		console.log('Oh noo, registration failed!');
	});
} 