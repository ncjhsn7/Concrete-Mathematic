const q1A = (array, elemento) => {
    return BuscaRecursiva(array, elemento, 0, array.length - 1);
}

function BuscaRecursiva(array, elemento, menor, maior) {
    const media = (menor + maior) / 2;
    if (menor > maior) {
        return -1;
    }
    if (array[media] == elemento) {
        return media;
    }
    if (array[media] < elemento) {
        return BuscaRecursiva(array, elemento, media + 1, maior);
    } else {
        return BuscaRecursiva(array, elemento, menor, media - 1);
    }
}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const q1B = (vet, n, valor) => {
    if (n >= 0) {
        if (vet[n] == valor) {
            return n;
        } else {
            return q2(vet, n - 1, valor);
        }
        return -1;
    }
}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Método que realiza (imprime) o movimento
// de um disco entre dois pinos
function mover(o, d) {
    System.out.println(o + " -> " + d);
}

// Método que implementa a recursão
// O = pino origem
// D = pino destino
// T = pino de trabalho

const q1C = (n, o, d, t) => {

    if (n > 0) {
        hanoi(n - 1, o, t, d);
        mover(o, d);
        hanoi(n - 1, t, d, o);
    }

}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const q2 = (x, y) => {

    if (y == 0) {
        return -1;
    } else {
        return x * q2(x, y - 1);
    }

}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const q3 = (m, n) => {
    return (m == 0) ? (n + 1) : ((n == 0) ? q3(m - 1, 1) : q3(m - 1, q3(m, n - 1)));
}

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const q4 = (a, b, x) => {

    const y = (a + b) / 2.0;
    if (Math.abs(y * y - x) <= 1.0e-15 || Math.abs(a - b) <= 1.0e-15) {
        return y;
    } else if (y * y > x) {
        return raizQuadrada(a, y, x);
    } else {
        return raizQuadrada(y, b, x);
    }
}

function raizQuadrada(x) {

    return raizQuadrada(0.0, x, x);

}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const q5 = (n, v) => {
    int x;
    if (n == 1) x = v[0];
    else {
        x = q5(n - 1, v);
        if (x < v[n - 1]) x = v[n - 1];
    }
    return x;
}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const q8 = (times, golsNaPartida = times.length) => {
    if (golsNaPartida === 1) {
        return times.map(gols => [gols]);
    }

    const permutationsList = [];
    const permutations = q8(times, golsNaPartida - 1);
    times.forEach((currentOption) => {
        permutations.forEach((smallerPermutation) => {
            permutationsList.push([currentOption].concat(smallerPermutation));
        });
    });

    return permutationsList;
}
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

