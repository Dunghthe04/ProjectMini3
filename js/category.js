import {
   apiCarts
} from "./constant.js";
import {
   drawProduct
} from "./drawProducts.js";
import {
   fetchApi
} from "./fetchApi.js";
import {
   cartId,
   list_categorys,
   param
} from "./variable.js";

fetchApi(apiCarts)
   .then(data => {
      let htmls = data.map((item) => {
         return `<div class="category__item"  category__title=${item.name.toLowerCase()}>
            ${item.name}
        </div>`
      });
      cartId.innerHTML = htmls.join("")
      list_categorys.forEach(item => {
         item.addEventListener("click", () => {
            param.category = item.getAttribute("category__title");
            console.log(param.category);
            drawProduct();
         })
      })
   });