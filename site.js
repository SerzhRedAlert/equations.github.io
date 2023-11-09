function main() {
    var d;
    var a1 = document.getElementById("a");
    var b1 = document.getElementById("b");
    var c1 = document.getElementById("c");

    var a = a1.value;
    var b = b1.value;
    var c = c1.value;

    if (a == 0 && b == 0 && c == 0) {
        document.write("Любые числа");
        return;
    }

    if (a == 0 && b != 0 && c != 0) {
        document.write(-c / b);
        return;
    }

    if (a == 0 && b == 0 && c != 0) {
        document.write(0);
        return;
    }
 
    d = (b * b) - (4 * a * c);

    if (d < 0) {
        document.write(0);
        return;
    }

    if (d == 0) {
        document.write(-b / (2 * a));
    }

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);

        if (x1 > x2) {
            document.write(x2, " ", x1);
        }

        else {
            document.write(x1, " ", x2);
        }
    }
}