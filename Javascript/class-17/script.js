
// Promise

//1. Pending
//2. Either Fullfilled
//3. Or Rejected

// API Call :

// Get the button from HTML
const fetchBtn = document.getElementById("fetchBtn");
const contents = document.getElementById("contents");

// Add event listener to the button
fetchBtn.addEventListener("click", fetchData);

// API Call :

// Method-1:

// function fetchData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// Method-2:
// async await method :

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    // if (!res.ok) throw new Error("Network Error");
    contents.innerHTML = "";
    data.forEach((el) => {
      //   const name = document.querySelector(".name");
      //   const phone = document.querySelector(".phone");
      //   name.innerHTML = el.name;
      //   phone.innerHTML = el.phone;
      const contentsDiv = document.createElement("div");
      contentsDiv.setAttribute("class", "contentsDiv");
      const name = document.createElement("h2");
      name.setAttribute("class", "name");
      name.innerText = `Name: ${el.name}`;
      const phone = document.createElement("h3");
      phone.setAttribute("class", "phone");
      phone.innerText = `Phone: ${el.phone}`;
      contents.append(name, phone);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// try block :
// Only write successfull code

// catch block :
// Only write error handling code
