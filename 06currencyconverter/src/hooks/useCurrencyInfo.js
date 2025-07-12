import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.exchangerate.host/latest?base=${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res.rates))
        console.log(data);
    }, [currency])
    return data;
}



export default useCurrencyInfo;