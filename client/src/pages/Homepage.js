import React, {useState, useEffect} from 'react'
import { fetchPizzas } from '../utils/api'

export const Homepage = () => {
    const [top, setTop] = useState([])

    useEffect(() => {
        topTwenty();
      }, []); 

    const topTwenty = async () => {
        const getPizzas = await fetchPizzas()
        // console.log(getPizzas)
        const orders = getPizzas
        const toppingsCount = new Map()

        orders.forEach(order => {
            const toppings = order.toppings.sort().join(', ')
            const count = toppingsCount.get(toppings) || 0;
            toppingsCount.set(toppings, count + 1)
        })

        const sortedCombination = Array.from(toppingsCount.entries()).sort((a, b) => b[1] - a[1])
        
      
        const displayContent = sortedCombination.slice(0, 20).map(([combination, count], index) => (
            <tr key={index} className="combination-row">
                <td>{index + 1}</td>
                <td>{combination}</td>
                <td>{count}</td>
            </tr>
        ));
        
        setTop(displayContent);
    }

    return (
        <div style={{alignContent:'center', background:'white', height:'600px', textAlign:'center', position:'relative', top:'100px'}}>
            <div id="display" className="combination-container" style={{alignContent:'center', textAlign:'center'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Topping Combination</th>
                            <th>Orders</th>
                        </tr>
                    </thead>
                    <tbody>                    
                        {top}
                    </tbody>
                </table>
            </div>
        </div>
    )
}