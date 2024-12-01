function changeBackgroundColor() {
    setInterval(function() {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000); // يغير اللون كل ثانيتين (2000 مللي ثانية)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

changeBackgroundColor(); // يبدأ تغيير الألوان تلقائياً