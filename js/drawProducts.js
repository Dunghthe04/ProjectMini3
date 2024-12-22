import {
    param,
    productsId
} from "./variable.js";
import {
    apiProducts
} from "./constant.js";
import {
    fetchApi
} from "./fetchApi.js";

export const drawProduct = () => {
    let category = "";
    if (param.category != "") {
        category = `&category=${param.category}`
    }
    const api = `${apiProducts}?title=${param.q}&_sort=${param.from},${param.to},${param.order}&_page=${param.page}&_per_page=${param.limit}${category}`;
    fetchApi(api)
        .then(data => {
            let htmls = data.data.map(item => {
                return `<div class="products__item">
        <div class="products__img">
            <img src="${item.thumbnail
            }" alt="${item.title
            }">
        </div>
        <div class="products__discount">${item.
            discountPercentage
            }</div>
        <div class="products__content">
            <h3 class="products__title">
            ${item.
                title
                }
            </h3>

            <div class="products__meta">
                <p class="products__price">${item.price
                    }$</p>
                <p class="products__stock">Con lai: ${item.stock
            }</p>
            </div>
        </div>
      </div>`;
            })
            productsId.innerHTML = htmls.join("");
        })
}