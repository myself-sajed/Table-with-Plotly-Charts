import tableData from "../../tableData"
import Checkbox from "./Checkbox"

const Table = ({ handleCheckboxChange, handleCheckAll, selectedProducts, selectAll }) => {
    return (
        <div >
            <div className="relative overflow-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-white-500">
                    <thead className="text-xs text-white uppercase bg-blue-500" >
                        <tr>
                            <th scope="col" className="p-4">
                                <Checkbox onChangeFunction={handleCheckAll} isChecked={selectAll} />
                            </th>
                            <th scope="col" onClick={handleCheckAll} className="px-6 py-3 cursor-pointer">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sales
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rating
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData?.map((item) => {
                                return <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4" >
                                        <Checkbox key={item.id} onChangeFunction={() => handleCheckboxChange(item.id)} isChecked={selectedProducts.includes(item.id)} />
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer" onClick={() => handleCheckboxChange(item.id)}>
                                        {item.productName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.sales}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.ratings}
                                    </td>
                                </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table
