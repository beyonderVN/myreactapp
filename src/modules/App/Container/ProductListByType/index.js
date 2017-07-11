import React from 'react'
import { connect } from 'react-redux'
import { loadProductListbyType } from '../../../../actions'
class ProductListByType extends React.Component {

    componentWillMount() {
        this.props.loadProductListbyType(this.props.login, this.props.productTypeId)
    }
    render() {
        const { productList } = this.props
        console.log(productList);
        return (
            <div className="main-content w3-container w3-card-4">
                {
                    productList.map((item) => (
                        <div key={item.product_id} className="w3-third w3-container w3-margin-bottom grid-item ">
                            <div className="util-box">
                                <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                    <span>Detail</span>
                                </a>
                                <a className="w3-card-2 w3-white w3-border w3-round util-box-item">
                                    <i className="fa fa-plus button-icon"></i><span>Cart</span>
                                </a>
                                <a className="w3-card-2 w3-white w3-border w3-round util-box-item buy-now">
                                    <span>Buy Now</span>
                                </a>
                            </div>
                            <div className="hover_scale scrollbar style-3 w3-border w3-white">
                                <a data-fancybox="gallery" href={`http://vivmall.hk/vivmallhk/image/${item.product_image}`} title={item.product_name}>
                                    <img className="animation w3-hover-opacity" src={`http://vivmall.hk/vivmallhk/image/${item.product_image}`} />
                                </a>
                                <div className="w3-container w3-white">
                                    <p><b>{item.product_name}</b></p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                    <p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
                                    ultricies congue gravida diam non fringilla.</p>
                                </div>
                            </div>

                        </div>
                    ))
                }


            </div>
        )

    }
}
export default connect((state, ownProps) => {
    const { entities: { products }, pagination } = state
    console.log(pagination.productListByType);
    const productList = pagination.productListByType[ownProps.match.params.producttypeid] ? pagination.productListByType[ownProps.match.params.producttypeid].ids.map((id) => {
        return products[id]
    }) : []
    return {
        productTypeName: ownProps.match.params.producttypename,
        productTypeId: ownProps.match.params.producttypeid,
        login: state.user,
        productList: productList
    }
}, {
        loadProductListbyType
    }
)(ProductListByType)