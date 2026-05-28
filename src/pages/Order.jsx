import React, { useState } from "react";
import { Link } from "react-router-dom";



const menuItems=[
  {id:1 , name:"Cappucino" , desc:"Rich in milk foam" , price:3.50 ,  category:"Hot Coffee" , img:"/download (18).jpg"},
  { id:2 , name:"Latte" , desc:"Soomth espresso with steamed milk" , price:4.50 , category:"Hot Coffee" , img:"/Latte.jpg"},
  {id: 3, name: "Americano", desc: "Espresso diluted with hot water", price: 3.50, category: "Hot Coffee", img: "/Americano (1).jpg" },
  { id: 4, name: "Mocha", desc: "Chocolate + espresso with steamed milk", price: 3.90, category: "Hot Coffee", img: "/Mocha.jpg" },
  { id: 5, name: "Cold Brew", desc: "Smooth slow-brewed coffee", price: 5.00, category: "Cold Coffee", img: "/Boost Your Energy with a Bold Red Eye Coffee – Perfect for Coffee Lovers ☕💥.jpg" },
  { id: 6, name: "Chocolate Brownie", desc: "Rich chocolate brownie with nuts", price: 7.00, category: "Snacks", img: "/Cocoa Fudge Brownies Recipe_ Rich, Chocolatey, and___.jpg" },
];
const DELIVERY_FEE = 1.00;

function Order(){
  const [cart , setCart]=useState([]);
  const [search , setSearch]=useState("");
  const[activeFilter , setActiveFilter]=useState("All");
  const [paymentMethod , setPaymentMethod]=useState("cash");
  const[orderPlaced , setOrderPlaced]=useState(false);
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  address: "",
  instructions: ""
});



  const filterItems = menuItems.filter((item)=>{ //search in everyitem
  const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
  //it mean latte include lat
  const matchFilter= activeFilter==="All" || item.category===activeFilter;
  return matchesSearch && matchFilter ;
  });
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      
      }
      return [...prev, { ...item, qty: 1 }];
         //“Do I already have this item in cart?”
         //“If yes → increase quantity”
        //“If no → add it for first time”
    });
  };
    const changeQty=(id , delta)=>{
    setCart((prev)=> prev.map((c)=>c.id===id ? { ...c, qty: c.qty + delta }: c)
  .filter((c)=>c.qty>0)
  );
  };

  const subtotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const total = subtotal + (cart.length > 0 ? DELIVERY_FEE : 0);


  const handlePlaceOrder =()=>{
    if(cart.length==0) return alert("Your cart is empty!");
    if(!formData.name.trim()) return alert("please enter your name!");
    if(!formData.phone.trim()) return alert("please enter you phone number");
    if(!formData.address.trim()) return alert("please enter yuor address!");
    setOrderPlaced(true);
    setCart([]);
    setFormData({name: "" , phone:"" , address:"", instructions:""});
  };
 const handleFormChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
};


 return (
  <div>
    <div className ="header">
<Link to = "/"> Back to Home</Link>
    </div>
   {orderPlaced && (
    <div  className="order-success">your order has been placed!we'll have it ready soon.
    <button onClick={() => setOrderPlaced(false)}> order Again</button>
  </div>
 )}
<section className="order-page">
  <h1 className="order-head">Order Now</h1>
  <p className="order-caption"> Place your Favorite coffee Order</p>
  <div className="order-container">
 

 <div className="menu">
            <h2>Our Menu</h2>
            <input
              type="text"
              placeholder="Search coffee..."
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
 {filterItems.length === 0 ? (
              <p className="no-results">No items found.</p>
            ) : (
              filterItems.map((item) => (
                <div className="items" key={item.id}>
                  <img src={item.img} alt={item.name} />
                  <div className="info">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <span className="price">${item.price.toFixed(2)}</span>
                  </div>
                  <button className="add" onClick={() => addToCart(item)}>+ Add</button>
                </div>
              ))
            )}
            </div>
             <div className="order">
            <h2>Your Order</h2>

            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty. Add some items!</p>
            ) : (
              <div className="order-item-container">
                {cart.map((c) => (
                  <div className="order-item" key={c.id}>
                    <img src={c.img} alt={c.name} />
                    <h4>{c.name}</h4>
                    <span className="price">${(c.price * c.qty).toFixed(2)}</span>
                    <div className="qty">
                      <button onClick={() => changeQty(c.id, -1)}>-</button>
                      <span className="num">{c.qty}</span>
                      <button onClick={() => changeQty(c.id, +1)}>+</button>
                  </div>
                  </div>
                ))}
              </div>
            )}

            <hr />
            <div className="summary">
              <p>Subtotal <span>${subtotal.toFixed(2)}</span></p>
              <p>Delivery fee <span>${cart.length > 0 ? DELIVERY_FEE.toFixed(2) : "0.00"}</span></p>
              <hr />
              <h3 className="total">Total <span>${total.toFixed(2)}</span></h3>
            </div>

            {/* Customer Details */}
            <div className="form">
              <h4>Customer Details</h4>
              <p>Full Name</p>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleFormChange} />
              <p>Phone Number</p>
              <input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleFormChange} />
              <p>Delivery Address</p>
              <textarea name="address" placeholder="Enter your address" value={formData.address} onChange={handleFormChange} />
              <p>Order Instructions (optional)</p>
              <textarea name="instructions" placeholder="e.g. No sugar, less ice..." value={formData.instructions}  onChange={handleFormChange}/>
            </div>

            {/* Payment */}
            <div className="payments">
              <label>
                <input
                  type="radio"
                  name="pay"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={() => setPaymentMethod("online")}
                /> Online Payment
              </label>
              <label>
                <input
                  type="radio"
                  name="pay"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                /> Cash on Delivery
              </label>
            </div>
<button className="order-button" onClick={handlePlaceOrder}>
              Place Order — ${total.toFixed(2)}
            </button>

          </div>

        </div> 
      </section>
    </div>
  );
}
export default Order;


