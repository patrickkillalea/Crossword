function cardGen() {
    html2canvas([document.getElementById('cardDiv')], {
        onrendered: function(canvas) {
            document.getElementById('canvas').appendChild(canvas);
            var data = canvas.toDataURL('image/png');
            var card = $("<a>").attr("href", data).attr("download", "CardFront.png").appendTo("body");
            card[0].click();
            card.remove();
        }
    });
}
