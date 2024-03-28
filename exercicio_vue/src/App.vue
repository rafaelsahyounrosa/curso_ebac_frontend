<script setup>
import { reactive, watch } from 'vue';


const estado = reactive({

    numero1: 10,
    numero2: 1,
    resultado: '0',
    filtro: 'somar',
})

const somar = () => {
    estado.resultado = Number(estado.numero1) + Number(estado.numero2) + '';
}
const subtrair = () => {
    estado.resultado = Number(estado.numero1) - Number(estado.numero2) + '';
}
const dividir = () => {
    if (Number(estado.numero2) == 0) {
        estado.resultado = '0 não pode ser divisor'
    } else {
        estado.resultado = Number(estado.numero1) / Number(estado.numero2) + '';
    }
}
const multiplicar = () => {
    estado.resultado = Number(estado.numero1) * Number(estado.numero2) + '';
}

const executaOperacao = () => {
    const { filtro } = estado;

    switch (filtro) {
        case 'subtrair':
            return subtrair();
        case 'multiplicar':
            return multiplicar();
        case 'dividir':
            return dividir();
        default:
            return somar();
    }
}

watch([() => estado.numero1, () => estado.numero2, () => estado.filtro], () => {
    executaOperacao();
});


</script>

<template>
    <div class="container">
        <header class="p-5 mb-4 mt-4 bg-dark rounded-3 text-light">
            <h1>Calculadora Simples</h1>
            <p>
                Insira os números da conta abaixo:
            </p>
        </header>
        <form @submit.prevent="executaOperacao" class="form">
            <div class="row">
                <div class="col-md-4">
                    <label class="d-block w-100" for="numero1">Numero 1</label>
                    <input @keyup="evento => estado.numero1 = evento.target.value" id=" numero1" type="number"
                        :value="estado.numero1" class="form-control">
                </div>
                <div class="col-md-4">
                    <label class="d-block w-100" for="numero2">Numero 2</label>
                    <input @keyup="evento => estado.numero2 = evento.target.value" id="numero2" type="number"
                        :value="estado.numero2" class="form-control">
                </div>
                <div class="col-md-4">
                    <label class="d-block w-100" for="operacoes">Operações</label>
                    <select id="operacoes" @change="evento => estado.filtro = evento.target.value" class="form-control">
                        <option value="somar">Somar</option>
                        <option value="subtrair">Subtrair</option>
                        <option value="multiplicar">Multiplicar</option>
                        <option value="dividir">Dividir</option>
                    </select>
                </div>
            </div>
            <div class="row mt-4">
                <label class="d-block w-100" for="resultado">Resultado</label>
                <textarea :value="estado.resultado" class="form-control" id="resultado" readonly></textarea>
            </div>
        </form>
    </div>
</template>

<style scoped></style>
