// function performSearch(event) {
//     event.preventDefault(); // Formun gönderilmesini engelle

//     // Aranan metni al
//     var searchText = document.getElementById('searchInput').value;

//     // Arama sonuçlarını temizle
//     document.getElementById('searchResults').innerHTML = '';

//     // Burada arama işlemleri yapabilirsiniz. Örnek olarak, sadece metni ekrana yazdıralım:
//     var resultsDiv = document.getElementById('searchResults');
//     var resultText = document.createElement('div');
//     resultText.textContent = "Arama Sonuçları: " + searchText;
//     resultText.className = "dropdown-menu";
//     resultsDiv.appendChild(resultText);
// }

// // Arama formunu seç ve gönderme olayını dinle
// var searchForm = document.getElementById('searchForm');
// searchForm.addEventListener('submit', performSearch);

// // Tıklanabilir linkleri seç ve tıklama olayını dinle
// var eminlerLink = document.getElementsByClassName('eminler-link');
// for (var i = 0; i < eminlerLink.length; i++) {
//     eminlerLink[i].addEventListener('click', function(event) {
//         event.preventDefault(); // Linkin varsayılan tıklama davranışını engelle
//         var linkText = this.textContent;
//         alert("Tıklanan link: " + linkText); // Linkin yerine sayfaya yönlendirmeyi burada gerçekleştirebilirsiniz.
//     });
// }

// function searchMenu() {
//     const searchText = document.getElementById('searchInput');

//     searchText.addEventListener("keyup", function(){
//         let data = this.value.charAt(0).toUpperCase() + this.value.slice(1).toLowerCase();
//         let link = document.querySelectorAll('.eminler-link');

//         for (let i = 0; i < link.length; i++) {
        
//             if (link[i].innerHTML.toUpperCase().indexOf(data) > -1) {
//                 // Eşleşme var
//                 link[i].style.display = "";
//             } else {
//                 link[i].style.display = "none";
//             }
//             console.log(link[i].innerHTML);
//         }
//     });
// }

// searchMenu();

 function searchMenu() {
    const searchText = document.getElementById('searchInput');
    const searchResults = $('#searchResults');

    searchText.addEventListener("keyup", function() {
      let data = this.value.trim().toLowerCase();
      let links = document.querySelectorAll('.eminler-link');
      let resultsHtml = '';
      let shownResults = new Set(); // Gösterilen sonuçları izlemek için bir Set kullanalım

      for (let i = 0; i < links.length; i++) {
        let linkText = links[i].textContent.toLowerCase();

        if (linkText.startsWith(data) && !shownResults.has(linkText)) {
          // Eşleşme var ve daha önce gösterilmediyse, sonuçları listele
          resultsHtml += '<a class="dropdown-item eminler-link" href="' + links[i].getAttribute('href') + '">' + links[i].textContent + '</a>';
          shownResults.add(linkText); // Gösterilen sonuçları Set'e ekleyelim
        }
      }

      // Arama sonuçlarını göster veya gizle
      if (resultsHtml) {
        searchResults.html(resultsHtml);
        searchResults.show();
      } else {
        searchResults.hide();
      }
    });

    // Arama sonuçları bölümünü tıklamadan açma işlemi
    searchResults.on('click', function(e) {
      e.stopPropagation();
    });

    // Document'a tıklama olayı ekleme, arama sonuçları bölümünü gizle
    $(document).on('click', function() {
      searchResults.hide();
    });
  }
  searchMenu();