import { useEffect, useState } from 'react'
import BookDetail from './components/BookDetail'
import Book from './models/Book'
import Category from './models/Category'
import Repo from './repositories'

function App() {
  const [bookList, setBookList] = useState<Book[]>([])
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [filter, setFilter] = useState<string>('')

  const fetchBookList = async () => {
    const result = await Repo.books.getAll({categoryId: filter})
    if (result) {
      setBookList(result)
    }
  }

  return (   
      <div>
        <select onChange={e => setFilter(e.target.value)}>
          <option value={''}>All</option>
          {categoryList.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
        </select>
        <hr />
      </div>
  );
}

export default App;
