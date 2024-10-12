import Button from "./Button";

type CategoryPillProps = {
    categories: string[]
}

function CategoryPills({categories}: CategoryPillProps) {
    return(
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
            {categories.map(categories => (
                <Button className="py-1 px-3 rounded-lg whitespace-nowrap" varient={"dark"}>{categories} </Button>
            ))}
            </div>
        </div>
    )
}

export default CategoryPills;