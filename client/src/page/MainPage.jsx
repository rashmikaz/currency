import axios from "axios";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(null); // Initialize as null
  const [currencyNames, setCurrencyNames] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5002/convert", {
        params: {
          date,
          sourceCurrency,
          targetCurrency,
          amountInSourceCurrency,
        },
      });

      if (response.data) {
        setAmountInTargetCurrency(response.data); // Set the result
      } else {
        setAmountInTargetCurrency("Conversion error occurred");
      }
    } catch (err) {
      console.error(err);
      setAmountInTargetCurrency("Error fetching conversion rate");
    }
  };

  // Get all the currency names
  useEffect(() => {
    const getTheCurrencies = async () => {
      try {
        const response = await axios.get("http://localhost:5002/getAllCurrencies");
        setCurrencyNames(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getTheCurrencies();
  }, []);

  return (
    <div>
      <h1 className="lg:mx-32 text-5xl font-black flex items-center justify-normal text-green-500">
        Convert Your Currencies Today
      </h1>
      <p className="lg:mx-32 font-sm opacity-40 py-6">
        Welcome to "Convert Your Currencies Today"! This application allows you
        to easily convert currencies based on the latest exchange rates. Whether
        you're planning a trip, managing your finances, or simply curious about
        the value of your money in different currencies, this tool is here to
        help.
      </p>
      <div className="mt-5 flex items-center justify-center flex-col">
        <section className="w-full lg:w-1/2">
          <form>
            {/* Date input */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="date">
                Date
              </label>
              <input
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                onChange={(e) => setDate(e.target.value)}
                type="date"
                name="date"
                id="date"
                placeholder="date.."
              />
            </div>

            {/* Source Currency */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="sourceCurrency">
                Source Currency
              </label>
              <select
                value={sourceCurrency}
                onChange={(e) => setSourceCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                name="sourceCurrency"
                id="sourceCurrency"
              >
                <option value="">Select source currency</option>
                {Object.keys(currencyNames).map((currency) => (
                  <option key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>

            {/* Target Currency */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="targetCurrency">
                Target Currency
              </label>
              <select
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                name="targetCurrency"
                id="targetCurrency"
              >
                <option value="">Select target currency</option>
                {Object.keys(currencyNames).map((currency) => (
                  <option key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount in Source Currency */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="amountInSourceCurrency">
                Amount in source currency
              </label>
              <input
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                type="number"
                name="amountInSourceCurrency"
                id="amountInSourceCurrency"
                placeholder="Amount in source currency..."
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Get the target Currency
            </button>
          </form>
        </section>
      </div>

      {/* Display the result */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Converted Amount:</h3>
        {amountInTargetCurrency !== null ? (
          <p className="text-lg text-green-500">{amountInTargetCurrency}</p>
        ) : (
          <p className="text-gray-400">Enter values and click the button to see the conversion</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
