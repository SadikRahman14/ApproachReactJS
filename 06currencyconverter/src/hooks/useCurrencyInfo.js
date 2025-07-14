import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch(`https://api.exchangerate.host/latest?base=${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    return data;
}

export default useCurrencyInfo;