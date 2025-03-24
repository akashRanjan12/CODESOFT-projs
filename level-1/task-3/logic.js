// get val into text area sec
function apndVal(value) {
  if (
    document.querySelector(".view").value == "undefined" ||
    document.querySelector(".view").value == "Error"
  ) {
    document.querySelector(".view").value = "";
  }
  document.querySelector(".view").value += value;
}

// clear btn sec
document.querySelector(".clear").addEventListener("click", () => {
  document.querySelector(".view").value = "";
});

// result sec
document.querySelector(".res").addEventListener("click", () => {
  try {
    // it evaluate all the value with operator with it in
    document.querySelector(".view").value = eval(
      document.querySelector(".view").value
    );
  } catch {
    //if nothing found gets undefined or not able to cal it gets erroe msg
    document.querySelector(".view").value = Error;
  }
});
