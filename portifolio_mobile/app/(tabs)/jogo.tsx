import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";

export default function ForcaScreen() {
  const palavras = [
    { palavra: "banana", dica: "Fruta" },
    { palavra: "abacaxi", dica: "Fruta" },
    { palavra: "pitaya", dica: "Fruta" },
    { palavra: "maracuja", dica: "Fruta" },

    { palavra: "computador", dica: "Objeto" },
    { palavra: "microfone", dica: "Objeto" },
    { palavra: "livro", dica: "Objeto" },

    { palavra: "programador", dica: "Profissão" },
    { palavra: "medico", dica: "Profissão" },
    { palavra: "advogado", dica: "Profissão" },

    { palavra: "elefante", dica: "Animal" },
    { palavra: "golfinho", dica: "Animal" },
    { palavra: "raposa", dica: "Animal" },

    { palavra: "outlast", dica: "Jogo de Terror" },
    { palavra: "phasmophobia", dica: "Jogo de Terror" },
    { palavra: "silent hill", dica: "Jogo de Terror" },
  ];

  const [palavraEscolhida, setPalavraEscolhida] = useState<any>(null);
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [erros, setErros] = useState(0);

  const maxErros = 6;

  const perdeu = erros >= maxErros;

  const venceu = useMemo(() => {
    if (!palavraEscolhida) return false;

    return palavraEscolhida.palavra
      .split("")
      .every((letra: string) => letra === " " || letrasUsadas.includes(letra));
  }, [palavraEscolhida, letrasUsadas]);

  function escolherPalavra() {
    const random = palavras[Math.floor(Math.random() * palavras.length)];

    setPalavraEscolhida(random);
    setLetrasUsadas([]);
    setErros(0);
  }

  function tentarLetra(letra: string) {
    if (!palavraEscolhida) return;

    if (letrasUsadas.includes(letra)) return;

    setLetrasUsadas((prev) => [...prev, letra]);

    if (!palavraEscolhida.palavra.includes(letra)) {
      setErros((prev) => prev + 1);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Jogo da Forca</Text>

      <View style={styles.gallowsContainer}>
        <View style={styles.base} />
        <View style={styles.vertical} />
        <View style={styles.top} />
        <View style={styles.rope} />

        {erros >= 1 && <View style={styles.head} />}

        {erros >= 2 && <View style={styles.body} />}

        {erros >= 3 && <View style={styles.leftArm} />}

        {erros >= 4 && <View style={styles.rightArm} />}

        {erros >= 5 && <View style={styles.leftLeg} />}

        {erros >= 6 && <View style={styles.rightLeg} />}
      </View>

      {!palavraEscolhida ? (
        <Pressable style={styles.startButton} onPress={escolherPalavra}>
          <Text style={styles.startButtonText}>Escolher Palavra</Text>
        </Pressable>
      ) : (
        <>
          <Text style={styles.tip}>Dica: {palavraEscolhida.dica}</Text>

          <View style={styles.wordContainer}>
            {palavraEscolhida.palavra
              .split("")
              .map((letra: string, index: number) => {
                if (letra === " ") {
                  return <View key={index} style={styles.space} />;
                }

                const mostrar = perdeu || letrasUsadas.includes(letra);

                return (
                  <View key={index} style={styles.letterBox}>
                    <Text style={styles.letterText}>
                      {mostrar ? letra.toUpperCase() : ""}
                    </Text>
                  </View>
                );
              })}
          </View>

          <View style={styles.keyboard}>
            {"abcdefghijklmnopqrstuvwxyz".split("").map((letra) => (
              <Pressable
                key={letra}
                style={[
                  styles.keyButton,
                  letrasUsadas.includes(letra) && styles.disabledKey,
                ]}
                onPress={() => tentarLetra(letra)}
                disabled={letrasUsadas.includes(letra) || perdeu || venceu}
              >
                <Text style={styles.keyText}>{letra.toUpperCase()}</Text>
              </Pressable>
            ))}
          </View>

          {venceu && <Text style={styles.winText}>🎉 Você venceu!</Text>}

          {perdeu && <Text style={styles.loseText}>💀 Você perdeu!</Text>}

          {(venceu || perdeu) && (
            <Pressable style={styles.restartButton} onPress={escolherPalavra}>
              <Text style={styles.restartButtonText}>Jogar Novamente</Text>
            </Pressable>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },

  content: {
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 30,
  },

  gallowsContainer: {
    width: 220,
    height: 260,
    position: "relative",
    marginBottom: 30,
  },

  base: {
    position: "absolute",
    bottom: 0,
    left: 10,
    width: 150,
    height: 4,
    backgroundColor: "#fff",
  },

  vertical: {
    position: "absolute",
    bottom: 0,
    left: 40,
    width: 4,
    height: 220,
    backgroundColor: "#fff",
  },

  top: {
    position: "absolute",
    top: 20,
    left: 40,
    width: 90,
    height: 4,
    backgroundColor: "#fff",
  },

  rope: {
    position: "absolute",
    top: 20,
    left: 126,
    width: 4,
    height: 30,
    backgroundColor: "#fff",
  },

  head: {
    position: "absolute",
    top: 50,
    left: 111,
    width: 34,
    height: 34,
    borderRadius: 999,
    borderWidth: 3,
    borderColor: "#fff",
  },

  body: {
    position: "absolute",
    top: 84,
    left: 126,
    width: 3,
    height: 70,
    backgroundColor: "#fff",
  },

  leftArm: {
    position: "absolute",
    top: 105,
    left: 100,
    width: 35,
    height: 3,
    backgroundColor: "#fff",
    transform: [{ rotate: "-35deg" }],
  },

  rightArm: {
    position: "absolute",
    top: 105,
    left: 124,
    width: 35,
    height: 3,
    backgroundColor: "#fff",
    transform: [{ rotate: "35deg" }],
  },

  leftLeg: {
    position: "absolute",
    top: 160,
    left: 102,
    width: 35,
    height: 3,
    backgroundColor: "#fff",
    transform: [{ rotate: "-45deg" }],
  },

  rightLeg: {
    position: "absolute",
    top: 160,
    left: 122,
    width: 35,
    height: 3,
    backgroundColor: "#fff",
    transform: [{ rotate: "45deg" }],
  },

  startButton: {
    backgroundColor: "#e83151",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 18,
    marginTop: 10,
  },

  startButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  tip: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 24,
    fontWeight: "600",
  },

  wordContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 30,
  },

  letterBox: {
    width: 36,
    height: 48,
    borderBottomWidth: 3,
    borderBottomColor: "#e83151",
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  letterText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },

  space: {
    width: 18,
  },

  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 8,
    marginTop: 10,
  },

  keyButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: "#121111",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
  },

  disabledKey: {
    opacity: 0.35,
  },

  keyText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  winText: {
    color: "#4ade80",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 30,
  },

  loseText: {
    color: "#ff4d6d",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 30,
  },

  restartButton: {
    backgroundColor: "#e83151",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 18,
    marginTop: 24,
  },

  restartButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
