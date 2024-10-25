

function forResult(value) {
    document.getElementById('result').value += value;
}

function clearAns() {
    document.getElementById('result').value = ' ';

}

function calculateAns() {
    const resultFeild = document.getElementById('result');
    try {
        resultFeild.value = eval(resultFeild.value)
    }
    catch (error) {
        resultFeild.value = "Error"
    }
}

