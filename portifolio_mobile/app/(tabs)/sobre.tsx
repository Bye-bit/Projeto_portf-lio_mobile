import { View, Text, StyleSheet, ScrollView } from "react-native";

const technologies = [
  "React Native",
  "Expo",
  "Expo Router",
  "TypeScript",
  "Next.js",
  "React",
  "Django",
  "Java",
  "Python",
  "JavaScript",
  "C",
  "Tailwind CSS",
];

export default function SobreScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Sobre</Text>

        <Text style={styles.subtitle}>
          Um pouco sobre mim e as tecnologias utilizadas no App.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quem Sou Eu</Text>

        <Text style={styles.cardText}>
          Sou estudante de Ciências da Computação na Universidade Católica de
          Pernambuco e desenvolvedor apaixonado por tecnologia.
        </Text>

        <Text style={styles.cardText}>
          Tenho experiência com desenvolvimento web, aplicações backend,
          interfaces modernas e projetos acadêmicos voltados para prática e
          aprendizado contínuo.
        </Text>

        <Text style={styles.cardText}>
          Gosto de aprender novas tecnologias e desenvolver projetos que me
          desafiem cada vez mais.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tecnologias Utilizadas</Text>

        <View style={styles.techContainer}>
          {technologies.map((tech) => (
            <View key={tech} style={styles.techBadge}>
              <Text style={styles.techText}>{tech}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sobre o App</Text>

        <Text style={styles.cardText}>
          Este portfólio foi desenvolvido utilizando React Native com Expo,
          focando em responsividade, navegação mobile e design moderno.
        </Text>

        <Text style={styles.cardText}>
          O aplicativo utiliza Expo Router para navegação entre telas e
          componentes nativos do React Native para criar uma experiência fluida
          no mobile.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },

  content: {
    paddingTop: 70,
    paddingHorizontal: 24,
    paddingBottom: 120,
    gap: 24,
  },

  header: {
    marginBottom: 10,
  },

  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#e83151",
    lineHeight: 24,
  },

  card: {
    backgroundColor: "#121111",
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "#2a2a2a",
    shadowColor: "#e83151",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 10,
    gap: 18,
  },

  cardTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#ffffff",
  },

  cardText: {
    color: "#d4d4d4",
    fontSize: 15,
    lineHeight: 26,
  },

  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  techBadge: {
    backgroundColor: "#1f1f1f",
    borderWidth: 1,
    borderColor: "#e83151",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
  },

  techText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
});
