
			var x = document.getElementsByClassName("box1")[0]
			document.onkeydown = function() {
				var key = event.charCode || event.keyCode || event.witch
				event.preventDefault()
				switch (key) {
					case 39:
						if (x.offsetLeft >= 450) {
							x.style.left = 450
						} else {
							x.style.left = x.offsetLeft + 10 + "px"
						}
						break;
					case 38:
						if (x.offsetTop <= 0) {
							x.style.top = 0
						} else {
							x.style.top = x.offsetTop - 10 + "px"
						}
						break;
					case 37:
						if (x.offsetLeft <= 0) {
							x.style.left = 0
						} else {
							x.style.left = x.offsetLeft - 10 + "px"
						}
						break;
					case 40:
						if (x.offsetTop >= 450) {
							x.style.top = 450
						} else {
							x.style.top = x.offsetTop + 10 + "px"
						}
						break;
				}
			}
		