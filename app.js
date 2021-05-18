// JSON
const data = 'pretending to be JSON string'
JSON.parse(data)
// turns JSON string into object

JSON.stringify(object)
// turns Javascript object into JSON string


// Fetch API - making http requests
fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("Response, waiting to parse", res)
        return res.json()
    })
    .then(data => {
        console.log("Data parsed")
        console.log(data.ticker.price)
    })
    .catch(e => {
        console.log("Error", e)
    })
// cleaned up using async function
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (e) {
        console.log("something went wrong", e)
    }
}


// Making requests using Axios
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(err => {
        console.log("Error", err)
    })
// rewriting using async function
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("Error", e)
    }
}


// Setting Headers with Axios
const jokes = document.querySelector('#jokes');
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke);
    jokes.append(newLI)
}