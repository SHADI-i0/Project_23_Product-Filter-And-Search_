let products = [{
        productName: "Sweater-3",
        category: "Sweater",
        price: "160",
        image: "images/sweater-3.jpg",
    },
    {
        productName: "Sweater-4",
        category: "Sweater",
        price: "165",
        image: "images/sweater-4.jpg",
    }, {
        productName: "Jacket-1",
        category: "Jacket",
        price: "30",
        image: "images/jaket-1.jpg",
    },
    {
        productName: "Jacket-4",
        category: "Jacket",
        price: "60",
        image: "images/jaket-4.jpg",
    },
    {
        productName: "Shirt-4",
        category: "Shirt",
        price: "135",
        image: "images/shirt-4.jpg",
    },
    {
        productName: "Shirt-5",
        category: "Shirt",
        price: "140",
        image: "images/shirt-5.jpg",
    },
    {
        productName: "Pants-1",
        category: "Pants",
        price: "90",
        image: "images/pants-1.jpg",
    },
    {
        productName: "Pants-2",
        category: "Pants",
        price: "100",
        image: "images/pants-2.jpg",
    },
    {
        productName: "Shirt-1",
        category: "Shirt",
        price: "120",
        image: "images/shirt-1.jpg",
    },
    {
        productName: "Pants-3",
        category: "Pants",
        price: "105",
        image: "images/pants-3.jpg",
    },
    {
        productName: "Shirt-3",
        category: "Shirt",
        price: "130",
        image: "images/shirt-3.jpg",
    },
    {
        productName: "Shirt-2",
        category: "Shirt",
        price: "125",
        image: "images/shirt-2.jpg",
    },
    {
        productName: "Jacket-2",
        category: "Jacket",
        price: "40",
        image: "images/jaket-2.jpg",
    },
    {
        productName: "Pants-4",
        category: "Pants",
        price: "110",
        image: "images/pants-4.jpg",
    },
    {
        productName: "Jacket-3",
        category: "Jacket",
        price: "50",
        image: "images/jaket-3.jpg",
    },
    {
        productName: "Pants-5",
        category: "Pants",
        price: "115",
        image: "images/pants-5.jpg",
    },
    {
        productName: "Sweater-1",
        category: "Sweater",
        price: "150",
        image: "images/sweater-1.jpg",
    },
    {
        productName: "Sweater-2",
        category: "Sweater",
        price: "155",
        image: "images/sweater-2.jpg",
    },
    {
        productName: "Jacket-5",
        category: "Jacket",
        price: "70",
        image: "images/jaket-5.jpg",
    },
    {
        productName: "Jacket-6",
        category: "Jacket",
        price: "80",
        image: "images/jaket-6.jpg",
    },
];

products.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card", product.category, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let imgSrc = document.createElement("img");
    imgSrc.src = product.image;
    let container = document.createElement("div");
    container.className = "container";
    let name = document.createElement("h4");
    name.className = "product-name";
    name.innerText = product.productName.toUpperCase();
    let price = document.createElement("h5")
    price.innerText = `$${product.price}`

    imgContainer.appendChild(imgSrc);
    container.appendChild(name)
    container.appendChild(price)
    card.appendChild(imgContainer);
    card.appendChild(container)
    document.querySelector(".products").appendChild(card);
});

let allLis = document.querySelectorAll(".shuffle li")
let allCards = document.querySelectorAll(".card")

function filterProduct(category) {
    allLis.forEach(li => {
        if (category.toUpperCase() == li.innerText.toUpperCase()) {
            li.classList.add("active")
        } else {
            li.classList.remove("active")
        }
    })
    allCards.forEach((card) => {
        if (category == "all") {
            card.classList.remove("hide")
        } else {
            if (card.classList.contains(category)) {
                card.classList.remove("hide")
            } else {
                card.classList.add("hide")
            }
        }
    })
}

let buttonSearch = document.querySelector(".search")
buttonSearch.addEventListener("click", function () {
    let searchInput = document.querySelector(".search-input")
    if (searchInput.value == "") {
        alert("Please Enter The Product Name !")
    } else {
        let allNameProducts = document.querySelectorAll(".product-name")
        allNameProducts.forEach((name, indexName) => {
            allLis.forEach((li) => li.classList.remove("active"))
            if (name.innerText.includes(searchInput.value.toUpperCase())) {
                allCards[indexName].classList.remove("hide")
            } else {
                allCards[indexName].classList.add("hide")
            }
        })
        searchInput.value = ""
    }
})

window.onload = () => {
    filterProduct("all")
}