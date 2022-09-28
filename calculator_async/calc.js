module.exports = function calc(op1, op2, op) {
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    if (op === "ADD") return op1 + op2;
    else if (op === "SUB") return op1 - op2;
    else if (op === "MUL") return op1 * op2;
    else if (op === "DIV") return op1 / op2;
    else return "Enter Proper Details";
  };