function CALK() {
    var num1 = parseFloat(prompt("Вbберіть число:"));
    var operator = prompt("Функцію(+, -, *, /):");
    var num2 = parseFloat(prompt("Виберіть інше число:"));
    var result;
    
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("На нуль незя!!!");
                return;
            }
            break;
        default:
            alert("Неправельно введено щось(");
            return;
    }
    
    alert(`Результат: ${num1} ${operator} ${num2} = ${result}`);
}
CALK(
);