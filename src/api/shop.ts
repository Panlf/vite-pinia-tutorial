export interface IProduct {
    id: number
    title: string
    price: number
    inventory: number
}

const _products:IProduct[] = [
    {id:1,title:"iPad",price:500.3,inventory:2},
    {id:2,title:"iPhone",price:600.5,inventory:4},
    {id:3,title:"iWatch",price:700.4,inventory:5}
]

export const getProducts = async () => {
    await wait(100)
    return _products
}

export const buyProducts = async () => {
    await wait(100)
    return Math.random() > 0.5
}

async function wait(delay: number){
    return new Promise((resolve) => setTimeout(resolve,delay))
}