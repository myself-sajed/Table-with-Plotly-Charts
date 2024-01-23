import Plot from "react-plotly.js"
import tableData from "../../tableData"

const DisplayChart = ({ selectedProducts }) => {

    const selectedData = tableData.filter(product => selectedProducts.includes(product.id));


    const chartData = [
        {
            x: selectedData.map(product => product.productName),
            y: selectedData.map(product => product.sales),
            type: 'bar',
            marker: {
                color: '#3b82f6',
            },
            textposition: 'auto',
            text: selectedData.map(product => `${product.sales}`)
        },
    ];

    const layout = {
        width: 700,
        height: 500,
        title: 'Product Sales Analysis',
        xaxis: {
            title: 'Product Names',
            tickangle: selectedData.length < 4 ? 0 : 50,
            automargin: true,
            showticklabels: true,
        },
        yaxis: {
            title: 'Sales',
        },
    };


    return (
        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-full mx-auto overflow-auto">
            <Plot
                data={chartData}
                layout={layout}
            />
        </div>
    )
}

export default DisplayChart
