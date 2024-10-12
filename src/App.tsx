import CategoryPills from "./components/CategoryPills"
import { categories } from "./data/home"
import Header from "./layouts/Header"

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <Header/>
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>Sidebar</div>
        <div className="sticky top-0 bg-white z-10 pb-4">
          <CategoryPills categories={categories}/>
        </div>
      </div>
    </div>
  )
}

export default App
