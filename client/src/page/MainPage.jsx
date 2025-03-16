import React from 'react'

const MainPage = () => {
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
          <form>
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
                type="date"
                
              />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="sourceCurrency"
              >
                Source Currency
              </label>

              <select
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                name="sourceCurrency"
                id=""
              >
                <option value="">Select source currency</option>{" "}
           
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="sourceCurrency"
              >
                Target Currency
              </label>

              <select
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                name="sourceCurrency"
                id=""
              >
                <option value="">Select target currency</option>{" "}
           
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="date"
              >
                Amount in source currency
              </label>
              <input
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                type="text"
                
              />
            </div>

          </form>
        </section>
      </div>
       
      

    </div>
  )
}

export default MainPage
