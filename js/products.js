import {
    drawProduct
} from "./drawProducts.js";
import {
    buttonNext,
    buttonPrev,
    buttonText,
    inputSearch,
    inputValue,
    param,
    selectId
} from "./variable.js";
drawProduct();

// search
const search = () => {
    const valueSeach = inputValue.value;
    param.q = valueSeach;
    drawProduct();
}

inputSearch.addEventListener("click", () => {
    search();
})

inputValue.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        search();
    }
})
// end search


//filter
selectId.addEventListener("change", (e) => {
    switch (e.target.value) {
        case "Mac-Dinh":
            param.order = "";
            break;
        case "Thap-Den-Cao":
            param.order = "price";
            break;
        case "Cao-Den-Thap":
            param.order = "-price";
            break;
        case "Giam-Gia-Nhieu":
            param.order = "-discountPercentage";
            break;
        default:
            break;
    }
    drawProduct();

})
//end filting


// paging
buttonPrev.addEventListener("click", () => {
    param.page = param.page - 1;
    buttonText.innerHTML = param.page;
    drawProduct();
});

buttonNext.addEventListener("click", () => {
    param.page = param.page + 1;
    buttonText.innerHTML = param.page;
    drawProduct();
})
//end paging