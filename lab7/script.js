function setBtnOnCLickListener() {
    const first = document.getElementById("first_number").value;
    const second = document.getElementById("second_number").value;
    const str = document.getElementById("str").value;

    console.log("(nums): 1)", first, " 2)", second);
    console.log(first, "+", second, "=", parseFloat(first) + parseFloat(second));
    console.log(first, "-", second, "=", parseFloat(first) - parseFloat(second));
    console.log(first, "*", second, "=", parseFloat(first) * parseFloat(second));
    console.log(first, "/", second, "=", parseFloat(first) / parseFloat(second));
    console.log(first, "%", second, "=", parseFloat(first) % parseFloat(second));
    console.log("(pow): 1)", Math.pow(first, 2), " 2)", Math.pow(second, 2));
    console.log("(sqrt): 1)", Math.sqrt(first), " 2)", Math.sqrt(second));
    console.log("(abs): 1)", Math.abs(first), " 2)", Math.abs(second));

    console.log("(str): ", str);
    console.log("(up:) ", str.toUpperCase());
    console.log("(low:) ", str.toLowerCase());
}
