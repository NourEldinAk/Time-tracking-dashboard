let actions = document.querySelectorAll(".actions div");
let cards = document.querySelectorAll(".section-content ");
let data = {};

fetch("./data.json")
  .then((resp) => resp.json())
  .then((jsonData) => {
    data = jsonData;
    console.log(data);
  });
actions.forEach((action) => {
  action.addEventListener("click", (e) => {
    actions.forEach((action) => {
      action.classList.remove("active");
    });

    if (e.target.dataset.time === "daily") {
      e.target.classList.add("active");
      console.log("clicked1");
      Time("daily");
    }

    if (e.target.dataset.time === "weekly") {
      e.target.classList.add("active");
      Time("weekly");
    }
    if (e.target.dataset.time === "monthly") {
      e.target.classList.add("active");
      Time("monthly");
    }
  });
  console.log(action.className);
});

function Time(timeStamp) {
  data.forEach((element) => {
    document.querySelector(
      `.${element.title.toLowerCase()} .section-content h1`
    ).innerHTML = element.timeframes[timeStamp].current + "hrs";
    document.querySelector(
      `.${element.title.toLowerCase()} .section-content footer`
    ).innerHTML =
      "Last Week - " + element.timeframes[timeStamp].previous + "hrs";
  });
}
