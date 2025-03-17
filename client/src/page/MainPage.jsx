import axios from "axios";
import { useEffect, useState } from "react";



const MainPage = () => {

  const [date,setdate] = useState(null);
  const [sourceCurrency,setsourceCurrency] = useState("");
  const [targetCurrency,settargetCurrency] = useState("");
  const [amountInSourceCurrency,setamountInSourceCurrency] = useState(0);
  // const [amountInTargetCurrency,setamountInTargetCurrency] = useState(0);
  const [currencyNames, setcurrencyNames] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(
      date,
      setsourceCurrency,
      targetCurrency,
      amountInSourceCurrency
    ); 
  }

//get all the currencies names-request
useEffect(() => {
  const getTheCurrencies = async () => {
    try {
      const responce = await axios.get(
        "http://localhost:5001/getAllCurrencies"
      );
      setcurrencyNames(responce.data);
    } catch (err) {
      console.error(err);
    }
  };
  getTheCurrencies();
}, []);



  return (
    <div>
    <h1 className="lg:mx-32  text-5xl font-black flex items-center justify-normal text-green-500">
      Convert Your Currencies Today
    </h1>
    <p className="lg:mx-32 font-sm opacity-40 py-6">
      Welcome to "Convert Your Currencies Today"! This application allows you
      to easily convert currencies based on the latest exchange rates. Whether
      you're planning a trip, managing your finances, or simply curious about
      the value of your money in different currencies, this tool is here to
      help.
    </p>
    <div className=" mt-5 flex items-center justify-center flex-col">
      <section className="w-full lg:w-1/2">
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="date"
            >
              Date
            </label>
            <input
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              onChange={(e) => setdate(e.target.value)}
              type="date"
              name="date"
              id="date"
              placeholder="date.."
            />
          </div>


          {/* ////////////////////////////////////////////////////// */}

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="sourceCurrency"
            >
              Source Currency
            </label>

            <select
              value={sourceCurrency} // Set the selected value
              onChange={(e) => setsourceCurrency(e.target.value)}
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              name="sourceCurrency"
              id="sourceCurrency"
            >
              <option value="">Select source currency</option>{" "}
              {Object.keys(currencyNames).map((currency) => (
                  <option className=" p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              
            </select>
          </div>

          {/* ////////////////////////////////////////////////////// */}

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="targetCurrency"
            >
              Target Currency
            </label>
            <select
              value={targetCurrency} // Set the selected value
              onChange={(e) => settargetCurrency(e.target.value)}
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              name="sourceCurrency"
              id="sourceCurrency"
            >
              <option value="">Select target currency</option>{" "}
              {Object.keys(currencyNames).map((currency) => (
                  <option className=" p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              
            </select>
          </div>
           {/* ////////////////////////////////////////////////////// */}


           <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="amountInSourceCurrency"
            >
              Amount in source currency
            </label>
            <input
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              onChange={(e) => setamountInSourceCurrency(e.target.value)}
              type="number"
              name="amountInSourceCurrency"
              id="amountInSourceCurrency"
              placeholder="Amount in source currency..."
            />
          </div>

           {/* ////////////////////////////////////////////////////// */}


          <button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Get the target Currency
          </button>

        </form>
      </section>
    </div>
     
    

    </div>
  )
}

export default MainPage
