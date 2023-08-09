//JSAM.PARSE => BASE DE DATOS, PRECIO DEL DOLAR BLUE, LATINOMAERICA

const data = {
    "timestamp": 123456789,
    "base": "USD",
    "rates": {
        "ARG":557,
        "BRA":60,
        "CHIL":16,
        "MXN":20,
        "PER":3.55,
    }
}

const {rates:{ARG}}=data;

console.log(ARG);//557