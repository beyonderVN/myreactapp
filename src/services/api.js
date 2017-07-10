
import { schema, arrayOf, normalize } from 'normalizr'


// Define your Products schema
const product = new schema.Entity('products')
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