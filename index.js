//entry point file...
console.log("localStorage length:", localStorage.length);

let uid = localStorage.getItem("user_id");

console.log("user_id: ", uid);

if (!uid) {
  console.log("No user_id found, setting it...");
  localStorage.setItem("token", "DSAJKLE32423JKLCSDJLVI09080");
  localStorage.setItem("user_id", 232);
} else {
  console.log("User id found:", uid);
  console.log("clearing the user id now...");
  localStorage.clear();
}
