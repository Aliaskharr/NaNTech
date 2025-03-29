 import Nav from './Components/Nav'
 import Products from './Components/Products'
 import Categories from './Components/Categories'
 import Footer from './Components/Footer'
 
 function App() {

  return (
    <div className='container'>
      <Nav></Nav>
      <div className="row">
        <div className="col-md-3">
          <Categories/>
        </div>
        <div className="col-md-9">
          <Products/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
