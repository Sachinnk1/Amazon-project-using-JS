import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummery } from "./checkout/paymentSummery.js";
import { loadProducts, loadProductFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-oops.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';


async function loadPage() {
    console.log('load page');

    try {
        await loadProductFetch();

        const value = await new Promise((resolve) => {
            loadCart(() => {
                resolve('value3');
            });
        });
    } catch (error) {
        console.log('unexpected error, please try again later');
    }

    renderOrderSummary();
    renderPaymentSummery();

    return 'value2';
}

loadPage().then((value) => {
    console.log('next step');
    console.log(value);
})
 
/*
Promise.all([
    
    loadProductFetch(),

    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummery();
});

*/


/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
}).then(() => {

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummery();
});


// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummery();
//     });
    
// });
*/