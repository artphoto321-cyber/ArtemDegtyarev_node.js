import { stderr, exit } from 'node:process';

const args = process.argv.slice(2);

function showHelp(){
    console.log("Калькулятор квадратных уравнений; Использование: node index.js <a> <b> <c>, где a, b, c — коэффициенты уравнения ax² + bx + c = 0");
 }

if (args.length === 0) {
    showHelp();
    exit(1);
}

if (args.length < 3) {
    stderr.write("Ошибка: недостаточно аргументов. Требуется три числа.");
    exit(2);
}

const a = Number(args[0]);
const b = Number(args[1]);
const c = Number(args[2]);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    stderr.write("Ошибка: все аргументы должны быть числами.");
    exit(2);
}

if (a === 0) {
    stderr.write("Ошибка: коэффициент a не может быть равен нулю (уравнение не квадратное).");
    exit(2);
}

const D = b * b - 4 * a * c;

if (D < 0) {
    stderr.write("Действительных корней нет (дискриминант отрицательный).");
    exit(2);
} else if (D === 0) {
    const x = -b / (2 * a);
    console.log(`Уравнение имеет один корень: x = ${x}`);
    exit(0);
} else {
    const sqrtD = Math.sqrt(D);
    const x1 = (-b + sqrtD) / (2 * a);
    const x2 = (-b - sqrtD) / (2 * a);
    console.log(`Уравнение имеет два корня: x₁ = ${x1}, x₂ = ${x2}`);
    exit(0);
}