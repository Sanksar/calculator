let string = "";
let btnval = document.querySelectorAll('.col');
let text = document.getElementById('text');
Array.from(btnval).forEach((col) => {
    col.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)   
            text.innerHTML = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            text.innerHTML = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            text.innerHTML = string;
        }
        else if (e.target.innerHTML == 'x') {
            l = string.length;
            string = string.slice(0, l - 1)
            text.innerHTML = string;
        }
        else{
        string = string + e.target.innerHTML;
        text.innerHTML = string;
        }
    })
}
)