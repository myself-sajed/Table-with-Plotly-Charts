import { useEffect, useState } from "react";
import Table from "./components/Table/Table"
import DisplayChart from "./components/Visualization/DisplayChart"
import tableData from "./tableData";
import Empty from "./components/Visualization/Empty";

const App = () => {

  const preSelectedItems = [1, 2, 3, 4, 5]
  const [selectedProducts, setSelectedProducts] = useState(preSelectedItems);
  const [selectAll, setSelectAll] = useState(false);

  // continuosly checks if all the items are selected or not
  useEffect(() => {
    if (selectedProducts.length === tableData.length) {
      setSelectAll(() => true)
    } else {
      setSelectAll(() => false)
    }
  }, [selectedProducts])


  // handles main header check change
  const handleCheckAll = () => {
    if (selectAll) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(tableData.map(product => product.id));
    }
    setSelectAll(!selectAll);
  };


  // handle each check change
  const handleCheckboxChange = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  }


  return (
    <div className="lg:grid grid-cols-2 gap-5 mx-auto my-5 px-3">
      <div className="border-2 rounded-md p-2 mb-5">
        {
          selectedProducts.length > 1 ?
            <DisplayChart selectedProducts={selectedProducts} />
            :
            <Empty />
        }
      </div>
      <div>
        <Table handleCheckAll={handleCheckAll}
          selectAll={selectAll}
          handleCheckboxChange={handleCheckboxChange}
          selectedProducts={selectedProducts}
          key={'MainTable'} />
      </div>
    </div>
  )
}

export default App
