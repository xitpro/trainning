// import 'antd/dist/antd.css';
// import React from 'react';
// import { Table } from 'antd';
// import { Button } from '../../component/UI/Button/button';

// function onChange(pagination, filters, sorter) {
//   console.log('params', pagination, filters, sorter);
// }

// const TableGrid = props => {
//   const data = null;

//   function getdata(itemdata) {
//     const listItems = this.props.columns.map(colunmName => (
//       <td>{itemdata[colunmName.dataIndex]}</td>
//     ));

//     return (
//       <>
//         {listItems}
//         <td>
//           <Button
//             elementType="edit"
//             name="Edit"
//             click={event => this.onUpdate(event, itemdata)}
//           />
//           <Button
//             elementType="delete"
//             name="Delete"
//             click={event => this.Delete(event, itemdata)}
//           />
//         </td>
//       </>
//     );
//   }

//   function onView(event, itemdata) {
//     event.preventDefault();
//     this.props.viewDetails(itemdata);
//   }

//   function getRows() {
//     console.log(' props.dataSource', props.dataSource);
//     const TableData = props.dataSource.map(itemdata => (
//       <tr onDoubleClick={event => onView(event, itemdata)}>
//         {getdata(itemdata)}
//       </tr>
//     ));
//     return <> {TableData} </>;
//   }

//   return (
//     <Table columns={props.columns} dataSource={getRows()} onChange={onChange} />
//   );
// };

// export default TableGrid;

import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  getdata = itemdata => {
    console.log(itemdata);
    const listItems = this.props.columns.map(colunmName => (
      <td>{itemdata[colunmName.dataIndex]}</td>
    ));
    return (
      <>
        {listItems}
        <td className="actionBtn">
          <button
            className="btn-edit"
            onClick={event => this.onUpdate(event, itemdata)}
          >
            Edit
          </button>
          <button
            className="btn-delete"
            value="Delete"
            onClick={event => this.Delete(event, itemdata)}
          >
            Delete
          </button>
        </td>
      </>
    );
  };

  getRows = () => {
    const TableData = this.props.dataSource.map(itemData => (
      <tr onDoubleClick={event => this.onView(event, itemData)}>
        {this.getdata(itemData)}
      </tr>
    ));
    return <> {TableData} </>;
  };

  onView = (event, itemData) => {
    event.preventDefault();
    this.props.viewDetails(itemData);
  };

  onUpdate = (event, itemData) => {
    event.preventDefault();
    this.props.Update(itemData);
  };

  Delete = (event, itemdata) => {
    event.preventDefault();
    this.props.Delete(itemdata);
  };

  render() {
    const TableHeader = this.props.columns.map(item => (
      <th style={{ width: item.width ? item.width : '200px' }}>{item.title}</th>
    ));

    return (
      <div className="tableDiv">
        <table>
          {TableHeader}
          <th className="action" />
          {this.getRows()}
        </table>
        <div className="helpText">Double click on row to view more details</div>
      </div>
    );
  }
}
export default Table;
