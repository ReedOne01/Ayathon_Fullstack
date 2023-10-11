class Poll {
  constructor(root, title) {
    this.root = root;
    this.selected = sessionStorage.getItem("poll-selected");
    this.endpoint = "http://localhost:9000/poll";
  }
}

const p = new Poll(document.querySelector(".poll"), "Which do you prefer?");

console.log();
