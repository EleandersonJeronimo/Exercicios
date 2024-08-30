import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const criarCampo = (linhas, colunas) => {
  let campo = [];
  for (let i = 0; i < linhas; i++) {
    let linhaArray = [];
    for (let j = 0; j < colunas; j++) {
      let novoSquare = {
        row: i,
        column: j,
        state: "closed",
        hasMine: false,
        nearMines: 0
      };
      linhaArray.push(novoSquare);
    }
    campo.push(linhaArray);
  }
  return campo;
};

const sortearMinas = (campo, qtdMinas) => {
  let linhas = campo.length;
  let colunas = campo[0].length;
  let minasColocadas = 0;

  while (minasColocadas < qtdMinas) {
    let linha = Math.floor(Math.random() * linhas);
    let coluna = Math.floor(Math.random() * colunas);

    if (!campo[linha][coluna].hasMine) {
      campo[linha][coluna].hasMine = true;
      minasColocadas++;
    }
  }
};

const contarMinasVolta = (campo, linha, coluna) => {
  let linhas = campo.length;
  let colunas = campo[0].length;
  let qtdMinas = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;

      let novaLinha = linha + i;
      let novaColuna = coluna + j;

      if (novaLinha >= 0 && novaLinha < linhas && novaColuna >= 0 && novaColuna < colunas) {
        if (campo[novaLinha][novaColuna].hasMine) {
          qtdMinas++;
        }
      }
    }
  }

  return qtdMinas;
};

const CampoMinado = () => {
  const [campo, setCampo] = useState([]);
  
  useEffect(() => {
    const campoInicial = criarCampo(10, 10);
    sortearMinas(campoInicial, 10);
    setCampo(campoInicial);
  }, []);

  const revelarSquare = (linha, coluna) => {
    const novoCampo = [...campo];
    const square = novoCampo[linha][coluna];
    square.state = 'open';
    square.nearMines = contarMinasVolta(campo, linha, coluna);
    setCampo(novoCampo);
  };

  return (
    <View style={styles.container}>
      {campo.map((linha, i) => (
        <View key={i} style={styles.row}>
          {linha.map((square, j) => (
            <TouchableOpacity
              key={j}
              style={styles.square}
              onPress={() => revelarSquare(i, j)}
            >
              <Text style={styles.text}>
                {square.state === 'open' ? (square.hasMine ? '*' : square.nearMines) : ' '}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 30,
    height: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
});

export default CampoMinado;

