let increasevalue = document.getElementById('increment');
let decreasevalue = document.getElementById('decrement');

let n = document.getElementById('number');
let count = 0;


increasevalue.addEventListener('click', function() {
    count += 1;
    n.innerHTML = count;


})

decreasevalue.addEventListener('click', function() {
    if (count == 0) {
        document.getElementById('decreasevalue').disabled = "true"

    }
    count -= 1;
    n.innerHTML = count;
})