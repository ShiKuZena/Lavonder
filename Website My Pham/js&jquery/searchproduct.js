function SearchProduct() {
    const input = document.getElementById("filter").value.toUpperCase();
    const pagi = document.getElementsByClassName("numberd");
    const tabs = document.querySelectorAll(".tab-content .tab-pane");
    const All_Product = new Set();
    const Product_AllIn = [];

    tabs.forEach(tab => {
        const products = tab.getElementsByClassName("col-md-3");
        Array.from(products).forEach(product => {
            const productId = product.dataset.id || product.innerHTML;
            if (!All_Product.has(productId)) {
                All_Product.add(productId);
                Product_AllIn.push(product);
            }
        });
    });

    let searchContainer = document.getElementById("search-results");
    if (!searchContainer) {
        searchContainer = document.createElement("div");
        searchContainer.id = "search-results";
        searchContainer.classList.add("row");
        document.querySelector(".tab-content").appendChild(searchContainer);
    }
    searchContainer.innerHTML = "";

    let KQ_Tim = false;
    Product_AllIn.forEach(product => {
        const title = product.querySelector(".card-body p.cardtext");

        if (title && title.innerText.toUpperCase().indexOf(input) > -1) {
            const clonedProduct = product.cloneNode(true);
            searchContainer.appendChild(clonedProduct);
            KQ_Tim = true;
        }
    });

    if (input === "") {
        searchContainer.style.display = "none";
        tabs.forEach(tab => tab.style.display = "");
        Array.from(pagi).forEach(pag => pag.style.display = "");
    } else {
        searchContainer.style.display = "flex";
        tabs.forEach(tab => tab.style.display = "none");
        Array.from(pagi).forEach(pag => pag.style.display = "none");

        if (!KQ_Tim) {
            searchContainer.innerHTML = "<p class=\"not_found\"><img class=\"reverse_img\" src=\"./MAIN/lavenderofhope.png\">Không tìm thấy sản phẩm<img src=\"./MAIN/lavenderofhope.png\"></p>";
        }
    }
}
