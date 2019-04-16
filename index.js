//  in data structure stack of book is a perfect
// example of stack
// push thing in the from the top
// pop things from the top
//peek print thing from the top

var palindrome = {
  // we gonna make this two input

  // with a dom script
  letter: [],
  word: "",
  rword: "",

  //this function is the pushing data function in a stack
  adding_stack: function() {
    for (var i = 0; i < this.word.length; i++) {
      this.letter.push(this.word[i]);
    }
    return this.letter;
  },
  //this is popping function (we reversly added for other calculation)
  popping_stack: function() {
    for (var i = 0; i < this.word.length; i++) {
      this.rword += this.letter.pop();
    }

    console.log(this.rword);
    return this.rword;
  },
  checking_function: function() {
    if (this.word === this.rword) {
      var ans = "palindrome";
      return ans;
    } else {
      var ans = "not palinfrome";
      return ans;
    }
  }
};

document.getElementById("button").addEventListener("click", (el, ev) => {
  var str = document.getElementById("firststr").value;
  palindrome.word = str;
  palindrome.adding_stack();
  palindrome.popping_stack();

  document.getElementById("output").innerText = palindrome.checking_function();
  palindrome.rword = "";
  palindrome.word = "";
});
//console.log(palindrome.adding_stack());
//console.log(palindrome.popping_stack());

//console.log(palindrome.checking_function());
