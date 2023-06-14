        function searchDivs() {
            var searchInput = document.getElementById('searchInput').value.toLowerCase();
            var items = document.getElementsByClassName('item');

            for (var i = 0; i < items.length; i++) {
                var itemText = items[i].textContent.toLowerCase();
                if (itemText.includes(searchInput)) {
                    items[i].style.display = 'block';
                } else {
                    items[i].style.display = 'none';
                }
            }
        }
        function openWebsite() {
            window.location.href = "/Niclub.html";
        }

    function changeImage() {
        var image = document.getElementById("myImage");
        if (image.src.match("D1.png")) {
            image.src = "D2.png";
      } else {
            image.src = "D1.png";
      }
    }