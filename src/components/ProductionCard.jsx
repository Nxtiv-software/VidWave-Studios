function ProductionCard({detail}) {
    return (
        <div className="w-[50vw] px-5 py-12 border border-stone-600 rounded-md mt-5 flex flex-col gap-5">
            <p className="text-2xl text-stone-300">{detail.title}</p>
            <p className="text-stone-400">{detail.description}</p>
            
        </div>
    )
}

export default ProductionCard
