import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react"

function App() {
    const [newProductName,setNewProductName] = useState(""),
          [newProductPrice,setNewProductPrice] = useState(0),
          [newProductOnSale,setNewProductOnSale] = useState(false);
    
    function formSubmitHandler(e){
        e.preventDefault();
        const product ={
                name: newProductName,
                price: newProductPrice,
                onSale: newProductOnSale,
                creacdAt: new Date().getTime()
        }
        console.log("new product: " ,product);
    }
    return (
      <div className="App">
              <header className='py-3'>
                  <div className="container">
                      <div className="card">
                          <form onSubmit={formSubmitHandler} className="card-body">
                                <h1>Creact product form</h1>
                                <div className="mb-3">
                                    <label htmlFor="">Product Name: {newProductName}</label>
                                    <input type="text" onChange={e =>setNewProductName(e.target.value)} className='form-control'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Product price: {newProductPrice}</label>
                                    <input type="number" onChange={e =>setNewProductPrice(e.target.valueAsNumber || 0)} min="0" max="1000000" className='form-control'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">On sale ? {`${newProductOnSale}`}</label>
                                    <input type="checkbox" className='ms-3' onChange={e=>setNewProductOnSale(e.target.checked)} />
                                </div>
                                <div>
                                    <button className="btn btn-primary">Create product</button>
                                </div>
                          </form>
                      </div>
                  </div>
              </header>
      </div>
    );
}

export default App;
