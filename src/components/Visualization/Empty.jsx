const Empty = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-full">
            <img className="h-11 w-h-11" src="/assets/empty.svg" alt="" />
            <p className="text-gray-600">Please select at least two products to get the analysis...</p>
        </div>
    )
}

export default Empty
