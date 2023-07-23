

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

