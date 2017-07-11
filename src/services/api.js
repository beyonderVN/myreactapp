
import { schema, arrayOf, normalize } from 'normalizr'


// Define your Products schema
const product = new schema.Entity('products', {}, { idAttribute: 'product_id' })
const productList = new schema.Array(product);

// Define a productTypes schema
const productType = new schema.Entity('productTypes', {
    products: productList
}, {
        idAttribute: 'product_type_id'
    }
);
const productTypeList = new schema.Array(productType);

export const fetchProductTypeList = () => {
    return fetch(`http://localhost:8000/api/getProductType`, { method: 'POST' })
        .then((response) => response.json())
        .then((json) => {
            return normalize(json, productTypeList);
        })
        .then(
        response => ({ response }),
        error => ({ error: error.message || 'Something bad happened' })
        )
}

export const fetchProductListbyType = (id) => {
    var payload = {
        id: id
    };
    console.log('id', id);
    return fetch(`http://localhost:8000/api/getProductByType`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // this line is important, if this content-type is not set it wont work
        body: 'id=01'
    }).then((response) => response.json())
        .then((json) => {
            return normalize(json, productList);
        })
        .then(
        response => ({ response }),
        error => ({ error: error.message || 'Something bad happened' })
        )
}