const swap = (vetor, a, b) => {
  let temp = vetor[a];
  vetor[a] = vetor[b];
  vetor[b] = temp;
};

const shuffle = (vetor) => {
  for (let i = 0; i < vetor.length; i++) {
    let aleatorio = Math.floor(Math.random() * vetor.length);
    swap(vetor, i, aleatorio);
  }
};

const bubbleSort = vetor => {
  let trocas;
  do {
    trocas = 0;
    for (let i = 0; i < vetor.length - 1; i++) {
      if (vetor[i] > vetor[i + 1]) {
        swap(vetor, i, i + 1);
        trocas++;
      }
    }
  } while (trocas > 0);
};

const selectionSort = vetor => {
  for (let i = 0; i < vetor.length - 1; i++) {
    let menor = i;
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[menor]) {
        menor = j;
      }
    }
    swap(vetor, i, menor);
  }
};

const quickSort = (vetor, inicio = 0, fim = vetor.length - 1) => {
  if (inicio < fim) {
    let pivot = particionamento(vetor, inicio, fim);
    quickSort(vetor, inicio, pivot - 1);
    quickSort(vetor, pivot + 1, fim);
  }
};

const particionamento = (vetor, inicio, fim) => {
  let pivot = vetor[fim];
  let i = inicio - 1;
  for (let j = inicio; j <= fim - 1; j++) {
    if (vetor[j] <= pivot) {
      i++;
      swap(vetor, i, j);
    }
  }
  swap(vetor, i + 1, fim);
  return i + 1;
};
