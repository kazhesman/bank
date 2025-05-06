function sm() {
    try {
        throw new TypeError("oops");
      } catch ({ name, message }) {
        console.log(name); // "TypeError"
        console.log(message); // "oops"

      }
      finally {
        console.log("err1");

      }
}




  console.log(sm());