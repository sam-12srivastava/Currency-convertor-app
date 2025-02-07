// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"
//   ;

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (let currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "") {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data[toCurr.value.toLowerCase()];

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });

// // // const updateExchangeRate = async () => {
// // //     let amount = document.querySelector(".amount input");
// // //     let amtVal = amount.value;
// // //     if (amtVal === "" || amtVal < 1) {
// // //       amtVal = 1;
// // //       amount.value = "1";
// // //     }
  
// // //     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    
// // //     try {
// // //       let response = await fetch(URL);
  
// // //       // Check if the response is OK (status 200-299)
// // //       if (!response.ok) {
// // //         throw new Error(`Error fetching exchange rate: ${response.statusText}`);
// // //       }
  
// // //       // Parse the JSON response
// // //       let data = await response.json();
// // //       let rate = data[toCurr.value.toLowerCase()];
  
// // //       // Calculate the converted amount
// // //       let finalAmount = amtVal * rate;
// // //       msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
// // //     } catch (error) {
// // //       msg.innerText = "Failed to fetch exchange rate. Please try again later.";
// // //       console.error("Error:", error);
// // //     }
// // //   };



// // // // Base URL for currency API
// // // // const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// // // // // Select elements
// // // // const dropdowns = document.querySelectorAll(".dropdown select");
// // // // const btn = document.querySelector("form button");
// // // // const fromCurr = document.querySelector(".from select");
// // // // const toCurr = document.querySelector(".to select");
// // // // const msg = document.querySelector(".msg");

// // // // // Populate dropdowns with currency options from countryList
// // // // for (let select of dropdowns) {
// // // //   for (let currCode in countryList) {
// // // //     let newOption = document.createElement("option");
// // // //     newOption.innerText = currCode;
// // // //     newOption.value = currCode;

// // // //     // Default selections
// // // //     if (select.name === "from" && currCode === "USD") {
// // // //       newOption.selected = "selected";
// // // //     } else if (select.name === "to" && currCode === "INR") {
// // // //       newOption.selected = "selected";
// // // //     }

// // // //     select.append(newOption);
// // // //   }

// // // //   // Update flag image when dropdown value changes
// // // //   select.addEventListener("change", (evt) => {
// // // //     updateFlag(evt.target);
// // // //   });
// // // // }

// // // // // Fetch and update the exchange rate
// // // // const updateExchangeRate = async () => {
// // // //   let amount = document.querySelector(".amount input");
// // // //   let amtVal = amount.value;

// // // //   // Set default amount if input is empty or invalid
// // // //   if (amtVal === "" || amtVal < 1) {
// // // //     amtVal = 1;
// // // //     amount.value = "1";
// // // //   }

// // // //   // Construct API URL to fetch exchange rate
// // // //   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

// // // //   try {
// // // //     let response = await fetch(URL);
    
// // // //     // Handle API errors
// // // //     if (!response.ok) {
// // // //       throw new Error(`Error fetching exchange rate: ${response.statusText}`);
// // // //     }

// // // //     let data = await response.json();
// // // //     let rate = data[toCurr.value.toLowerCase()];
    
// // // //     // Calculate and display the converted amount
// // // //     let finalAmount = amtVal * rate;
// // // //     msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
// // // //   } catch (error) {
// // // //     // Handle errors and display a message
// // // //     msg.innerText = "Failed to fetch exchange rate. Please try again later.";
// // // //     console.error("Error:", error);
// // // //   }
// // // // };

// // // // // Update flag image when currency is selected
// // // // const updateFlag = (element) => {
// // // //   let currCode = element.value;
// // // //   let countryCode = countryList[currCode];
// // // //   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
// // // //   let img = element.parentElement.querySelector("img");
// // // //   img.src = newSrc;
// // // // };

// // // // // Handle button click to trigger exchange rate update
// // // // btn.addEventListener("click", (evt) => {
// // // //   evt.preventDefault();
// // // //   updateExchangeRate();
// // // // });

// // // // // Update exchange rate on page load
// // // // window.addEventListener("load", () => {
// // // //   updateExchangeRate();
// // // // });



// // const updateExchangeRate = async () => {
// //     let amount = document.querySelector(".amount input");
// //     let amtVal = amount.value;
// //     if (amtVal === "" || amtVal < 1) {
// //       amtVal = 1;
// //       amount.value = "1";
// //     }
  
// //     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    
// //     try {
// //       let response = await fetch(URL);
  
// //       // Check if the response is OK (status 200-299)
// //       if (!response.ok) {
// //         throw new Error(`Error fetching exchange rate: ${response.statusText}`);
// //       }
  
// //       // Parse the JSON response
// //       let data = await response.json();
// //       let rate = data[toCurr.value.toLowerCase()];
  
// //       // Calculate the converted amount
// //       let finalAmount = amtVal * rate;
// //       msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
// //     } catch (error) {
// //       msg.innerText = "Failed to fetch exchange rate. Please try again later.";
// //       console.error("Error:", error);
// //     }
// //   };
  
// const updateExchangeRate = async () => {
//     let amount = document.querySelector(".amount input");
//     let amtVal = amount.value;
  
//     // Validate amount, set to 1 if empty or less than 1
//     if (amtVal === "") {
//       amtVal = 1;
//       amount.value = "1";
//     }
  
//     // Construct API URL for fetching exchange rate
//     const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    
//     try {
//       let response = await fetch(URL);
  
//       // Check if the response is OK
//       if (!response.ok) {
//         throw new Error(`Error fetching exchange rate: ${response.statusText}`);
//       }
  
//       // Parse the JSON response
//       let data = await response.json();
//       let rate = data[toCurr.value.toLowerCase()];  // Get the conversion rate
  
//       // Calculate the converted amount
//       let finalAmount = amtVal * rate;
  
//       // Display the result in a readable format
//       msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
//     } catch (error) {
//       // Display error message if something goes wrong
//       msg.innerText = "Failed to fetch exchange rate. Please try again later.";
//       console.error("Error:", error);
//     }
//   };
 


// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (let currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);  // Change flag when the dropdown is changed
//   });
// }

// // Function to update the exchange rate and message
// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;

//   if (amtVal === "" ) {
//     amtVal = 1;
//     amount.value = "1";
//   }

//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

//   try {
//     let response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error(`Error fetching exchange rate: ${response.statusText}`);
//     }

//     let data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()];
//     let finalAmount = amtVal * rate;

//     // Update the message
//     msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
//   } 
//   catch (error) {
//     msg.innerText = "Failed to fetch exchange rate. Please try again later.";
//     console.error("Error:", error);
//   }
// };

// // Function to update the flag when a currency is selected
// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// // Event listener for the "Get Exchange Rate" button
// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// // On page load, update the initial exchange rate
// window.addEventListener("load", () => {
//   updateExchangeRate();
// });




// const BASE_URL =  "https://free.currconv.com/api/v7/convert?q=USD_INR&compact=ultra&apiKey=YOUR-API-KEY"
// ;
// 




// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (let currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;

//     // Select USD as the default 'from' currency and INR as the default 'to' currency
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = true;
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = true;
//     }
//     select.append(newOption);
//   }

//   // Event listener to update the flag when the currency is changed
//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// // Function to update the exchange rate
// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = parseFloat(amount.value); // Parse the value to a number

//   // Set default value to 1 if input is empty or less than 1
//   if (isNaN(amtVal) || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }

//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

//   try {
//     console.log(`Fetching exchange rate from: ${URL}`);
//     let response = await fetch(URL);
    
//     // Check if response is OK
//     if (!response.ok) {
//       throw new Error(`Error fetching exchange rate: ${response.statusText}`);
//     }

//     let data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()]; // Get the rate for the target currency

//     // Check if the rate is available
//     if (!rate) {
//       throw new Error(`No exchange rate found for ${toCurr.value}`);
//     }

//     let finalAmount = amtVal * rate;

//     // Display the result
//     msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
//   } catch (error) {
//     // Handle errors during fetching
//     msg.innerText = `Failed to fetch exchange rate: ${error.message}`;
//     console.error("Error:", error);
//   }
// };

// // Function to update the flag image for the selected currency
// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
  
//   // Check if a valid country code exists for the currency
//   if (countryCode) {
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
    
//     // Update the flag image source if an <img> element exists
//     if (img) img.src = newSrc;
//   } else {
//     console.error(`No flag found for currency code: ${currCode}`);
//   }
// };

// // Event listener for button click to update the exchange rate
// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// // Update exchange rate when the page loads
// window.addEventListener("load", () => {
//   updateExchangeRate();
// });


// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (let currCode in countryList) {
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;

//     // Select USD as the default 'from' currency and INR as the default 'to' currency
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = true;
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = true;
//     }
//     select.append(newOption);
//   }

//   // Event listener to update the flag when the currency is changed
//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// // Function to update the exchange rate
// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = parseFloat(amount.value); // Parse the value to a number

//   // Set default value to 1 if input is empty or less than 1
//   if (isNaN(amtVal) || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }

//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

//   try {
//     console.log(`Fetching exchange rate from: ${URL}`);
//     let response = await fetch(URL);
    
//     // Check if response is OK
//     if (!response.ok) {
//       throw new Error(`Error fetching exchange rate: ${response.statusText}`);
//     }

//     let data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()]; // Get the rate for the target currency

//     // Check if the rate is available
//     if (!rate) {
//       throw new Error(`No exchange rate found for ${toCurr.value}`);
//     }

//     let finalAmount = amtVal * rate;

//     // Get flag images
//     let fromFlag = `https://flagsapi.com/${countryList[fromCurr.value]}/flat/64.png`;
//     let toFlag = `https://flagsapi.com/${countryList[toCurr.value]}/flat/64.png`;

//     // Display the result with flags and amounts
//     msg.innerHTML = `
//       <img src="${fromFlag}" alt="${fromCurr.value}" width="32" height="32">
//       ${amtVal} ${fromCurr.value} = 
//       ${finalAmount.toFixed(2)} ${toCurr.value}
//       <img src="${toFlag}" alt="${toCurr.value}" width="32" height="32">
//     `;
//   } catch (error) {
//     // Handle errors during fetching
//     msg.innerText = `Failed to fetch exchange rate: ${error.message}`;
//     console.error("Error:", error);
//   }
// };

// // Function to update the flag image for the selected currency
// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
  
//   // Check if a valid country code exists for the currency
//   if (countryCode) {
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
    
//     // Update the flag image source if an <img> element exists
//     if (img) img.src = newSrc;
//   } else {
//     console.error(`No flag found for currency code: ${currCode}`);
//   }
// };

// // Event listener for button click to update the exchange rate
// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// // Update exchange rate when the page loads
// window.addEventListener("load", () => {
//   updateExchangeRate();
// });





const BASE_URL =
  " https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = true;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (isNaN(amtVal) === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
   let response = await fetch(URL);
   let data = await response.json();
   let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
   let finalAmount = amtVal * rate;
   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});