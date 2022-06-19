let shop = document.getElementById("shop");

let shopItemsData = [
    {
        id: "aaa",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "img/img-1.jpeg"
    },
    {
        id: "bbb",
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "img/img-2.jpeg"
    },
    {
        id: "ccc",
        name: "T Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "img/img-3.jpeg"
    },
    {
        id: "ddd",
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        img: "img/img-4.jpeg"
    }]

// Function that generates cards in the shop

let generateShop = () => {

    return (shop.innerHTML = shopItemsData
        .map((x)=>{
        let {id,name,price,desc,img} = x
        return `
        <div id=product-id-${id} class="item">
                    <img width="220" src=${img} alt="image1">
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${desc}</p>
                        <div class="price-quantity">
                            <h2>$ ${price}</h2>
                            <div class="buttons">
                                <i class="bi bi-dash-lg"></i>
                                <div id=${id} class="quantity">0</div>
                                <i class="bi bi-plus-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }).join(""));
};
generateShop();