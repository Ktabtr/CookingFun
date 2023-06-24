let products = [
    {
        id: 1200,
        name: "Frying pan, 28 cm, coated, aluminum",
        price: 129,
        category: "Cookware Sets",
        description: "Pan. Size: 28 cm. Material: forged aluminum with non-stick granite coating, suitable for all types of stoves, including attracted ones.",
        image: "./images/1p.jpg",
    },
    {
        id: 1201,
        name: "Classic 4-Piece Knife Set",
        price: 169,
        category: "Cutlery",
        description:
            "Knife set, 4 items. Complete set and dimensions: paring knife - 90 mm, slicing knife - 130 mm, cutting knife - 150 mm, chef's knife - 200 mm",
        image: "./images/2p.jpg",
    },
    {
        id: 1202,
        name: "Chinese-style 2-piece set knifes",
        price: 259,
        category: "Cutlery",
        description:
            "This knifes have beautiful edge geometry and are quite thin behind the edge and at the spine. They have an excellent cutting feel and are light and feel very nimble and comfortable in the hand.",
        image: "./images/3p.jpg",
    },
    {
        id: 1203,
        name: "Edge Grain Cutting Board",
        price: 89,
        category: "Tools and Accessories",
        description:
            "Size: 20x15 cm, 30x20 cm. Material: acacia wood.",
        image: "./images/4p.jpg",
    },
    {
        id: 1204,
        name: "Stainless 3-Piece Set",
        price: 399,
        category: "Cookware Sets",
        description:
            "Material: aluminum with non-stick coating, heat-resistant glass lids, Bakelite handles with Soft touch coating.",
        image: "./images/5p.jpg",
    },
    {
        id: 1205,
        name: "12-piece Dinner set",
        price: 129,
        category: "tableware",
        description:
            "Ceramic minimalist dinner plates in two sizes in beige and white",
        image: "./images/6p.jpg",
    },
];

// לכתוב פונקציה שתפקידה להציג את המוצרים בקארדים של בוטסטרפ
// שלושה קארדים בשורה
// תמונה של המוצר, שם המוצר, קטגוריה וכפתור לפרטים מלאים

function showProducts() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML +=
            `<div class="col-md-4 mt-3">
            <div class="card" style="width: 18rem;margin:0 auto;">
        <img src="${products[i].image}" class="card-img-top" alt="${products[i].name}">
            <div class="card-body">
                <h5 class="card-title">${products[i].name}</h5>
                <p class="card-text">${products[i].category}</p>
                <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100" onclick="setModal(${i})">See more</a>
            </div>
            </div>
</div>`;
    }
}
showProducts();

// לכתוב פונקציה שמזינה את פרטי המוצר למודאל על סמך אינדקס
function setModal(index) {
    document.getElementById("title").innerHTML = products[index].name;
    document.getElementById("mbody").innerHTML = `<p><b>Serial Number:</b>${products[index].id}</p>
    <p><b>Category:</b>${products[index].category}</p>
    <p><b>Description:</b>${products[index].description}</p>
    <h4 class="text-end"><b>Price:</b>${products[index].price}</h4>`

}

