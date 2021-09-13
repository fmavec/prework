var numero = 100;

for (n = 1; n <= numero; n++) {
    var divisible = false;
    if (esDivisor(n, 3)) {
        document.write("Fizz");
        divisible = true;
    }
    if (esDivisor(n, 5)) {
        document.write("Buzz");
        divisible = true;
    }
    if (!divisible) {
        document.write(n);
    }
    document.write("<br\>");
}

function esDivisor(num, divisor) {
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}