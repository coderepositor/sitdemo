import FormattedDate from "./FormattedDate"
import FormattedMoney from "./FormattedMoney"

const products = [
    {name:'T-shirts', id:1 , price:300,purchase_date:new Date("2021-01-01")},
    {name:'Shirts', id:2 , price:350,purchase_date:new Date("2024-04-05")},
    {name:'Jeans', id:3 , price:600,purchase_date:new Date("2024-12-30")},
    {name:'Blazer', id:4 , price:1500,purchase_date:new Date("2022-08-11")},
    {name:'Shoes', id:5 , price:2000,purchase_date:new Date("2023-01-01")},
]
export default function Productlist(){
    const listitems = products.map(product=>
        <li key={product.id} style={{color:'magenta'}}>
            Name:{product.name}
            <br/>
            Price: <FormattedMoney value={product.price}/>
            {/* Price: {product.price} */}
            <br/>
            Purchase Date: <FormattedDate value={product.purchase_date}/>
            <hr color="blue"/>
        </li>
    )    
    return (
        <>
        <marquee behavior="alternate" direction="right">
        <h2>My Shopping List</h2>
        </marquee>
    <ul>{listitems}</ul>
    </>
)
}