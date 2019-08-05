import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';
import PopupBuilder from '../PopupBuilder/PopupBuilder';
import { insertProductFormData } from '../../model/InsertProductFormData';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './Product.css';
import {
  getProducts,
  postProduct,
  deleteProduct,
} from '../../store/actions/productActions';

const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
    width: '250px',
  },
  {
    title: 'Category',
    dataIndex: 'Category',
    key: 'Category',
    width: '200px',
  },
  {
    title: 'Description',
    dataIndex: 'Description',
    key: 'Description',
    width: '300px',
  },
  {
    title: 'Price',
    dataIndex: 'Price',
    key: 'Price',
    width: '200px',
  },
  {
    title: 'Brand',
    dataIndex: 'Brand',
    key: 'Brand',
    width: '200px',
  },
];

function ProductPage(props) {
  const [openModal, setOpenModal] = useState({ isOpen: false, data: {} });

  useEffect(() => {
    props.getProductList();
  }, []);

  // const listCategories = [
  //   { key: 1, name: 'Laptop', type: 'laptop' },
  //   { key: 2, name: 'Smartphone', type: 'phone' },
  // ];

  // const listBrands = [
  //   { key: 1, name: 'Apple', type: 'apple' },
  //   { key: 2, name: 'Samsung', type: '' },
  // ];

  const create = () => {
    var modaldata = {
      type: 'insert',
      title: 'New Product',
      item: {},
    };
    setOpenModal({ isOpen: true, data: modaldata });
  };

  const viewDetails = item => {
    var modaldata = {
      type: 'view',
      title: 'Product details',
      item: item,
    };
    setOpenModal({ isOpen: true, data: modaldata });
  };

  const deleteConfirm = item => {
    var modaldata = {
      type: 'delete',
      title: 'Delete Product',
      item: item,
      deleteMessage: 'Do you want to delete product ' + item.Name + '?',
    };
    setOpenModal({ isOpen: true, data: modaldata });
  };

  const deleteProduct = () => {
    props.deleteProductItem(openModal.data.item.Id);
    setOpenModal({ isOpen: false, data: {} });
  };

  const update = item => {
    var modaldata = {
      type: 'update',
      title: 'Update product ' + item.UserName,
      item: item,
    };
    setOpenModal({ isOpen: true, data: modaldata });
  };

  const Submit = item => {
    if (openModal.data.item.Id) {
      item.Id = openModal.data.item.Id;
    }
    props.saveProduct(item);
    setOpenModal({ isOpen: false, data: {} });
  };

  return (
    <div className="productPage">
      <div className="header">
        <h1 className="tittle">Products Table Data</h1>
        <button onClick={create}>Add Product</button>
      </div>
      <Table
        columns={columns}
        dataSource={props.products}
        viewDetails={viewDetails}
        Delete={deleteConfirm}
        Update={update}
      />
      <PopupBuilder
        fields={insertProductFormData}
        data={openModal.data}
        delete={deleteProduct}
        closeModal={() => setOpenModal({ isOpen: false, data: {} })}
        visible={openModal.isOpen}
        submit={Submit}
      />
    </div>
  );
}
const mapStateToProps = state => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = dispatch => ({
  deleteProductItem: id => dispatch(deleteProduct(id)),
  getProductList: () => dispatch(getProducts()),
  saveProduct: item => dispatch(postProduct(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
