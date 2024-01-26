let input_search = document.getElementById("search_input");
let form_search = document.getElementById("search_form");
let recent_searchEl = document.querySelector(".recent_search");

let recentArray = ["mobile", "phone", "pen"];

form_search.addEventListener("submit", (e) => {
  e.preventDefault();
  recentArray.unshift(input_search.value);
  console.log(recentArray);
  renderRecent();
  input_search.value = "";
  console.log("clicked")
});

function renderRecent() {
  let recent_Search_html = "";
  recentArray.forEach((el) => {
    recent_Search_html += `
    <div class="recent_list">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>${el}</p>
    </div>`;
  });
  recent_searchEl.innerHTML = recent_Search_html;
}
renderRecent();
