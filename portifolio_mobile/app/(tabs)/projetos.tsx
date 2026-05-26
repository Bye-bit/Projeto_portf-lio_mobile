import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from "react-native";

const projects = [
  {
    title: "StonksViewer",
    description:
      "Sistema desenvolvido em Django para visualização de ações e dados financeiros.",
    technologies: ["Django", "Python", "HTML"],
    image: require("../../assets/images/projeto1.png"),
    github: "https://github.com/Bye-bit/stonks-viewer",
  },

  {
    title: "CardapIA",
    description:
      "Aplicação que utiliza IA para gerar receitas saudáveis automaticamente.",
    technologies: ["JavaScript", "Gemini API", "CSS"],
    image: require("../../assets/images/projeto2.png"),
    github: "https://github.com/LettyciaDev/PROJETO-WEB-MOBILE",
  },

  {
    title: "Musicap",
    description:
      "Sistema em Java com armazenamento de playlists e músicas usando arquivos.",
    technologies: ["Java", "JavaFX"],
    image: require("../../assets/images/projeto3.png"),
    github: "https://github.com/joao0cb/Projeto-POO",
  },

  {
    title: "Mom Atelie",
    description:
      "Plataforma de e-commerce desenvolvida com foco em experiência do usuário, catálogo de produtos e interface moderna responsiva.",
    technologies: ["Next.js", "JavaScript", "CSS", "React"],
    image: require("../../assets/images/projeto4.png"),
    github: "https://github.com/ManuSilva12/MOM_atelie",
  },
];

export default function ProjetosScreen() {
  const openGithub = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Projetos</Text>

        <Text style={styles.subtitle}>
          Alguns dos projetos que desenvolvi, ou colaborei no desenvolvimento :)
        </Text>
      </View>

      <View style={styles.projectsContainer}>
        {projects.map((project) => (
          <View key={project.title} style={styles.card}>
            <Image source={project.image} style={styles.projectImage} />

            <View style={styles.cardContent}>
              <Text style={styles.projectTitle}>{project.title}</Text>

              <Text style={styles.projectDescription}>
                {project.description}
              </Text>

              <View style={styles.techContainer}>
                {project.technologies.map((tech) => (
                  <View key={tech} style={styles.techBadge}>
                    <Text style={styles.techText}>{tech}</Text>
                  </View>
                ))}
              </View>

              <Pressable
                style={styles.githubButton}
                onPress={() => openGithub(project.github)}
              >
                <Text style={styles.githubButtonText}>Ver no GitHub</Text>
              </Pressable>
            </View>
          </View>
        ))}
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
  },

  header: {
    marginBottom: 30,
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

  projectsContainer: {
    gap: 24,
  },

  card: {
    backgroundColor: "#121111",
    borderRadius: 28,
    overflow: "hidden",
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
  },

  projectImage: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
  },

  cardContent: {
    padding: 22,
  },

  projectTitle: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },

  projectDescription: {
    color: "#d4d4d4",
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 18,
  },

  techContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 22,
  },

  techBadge: {
    backgroundColor: "#1f1f1f",
    borderWidth: 1,
    borderColor: "#e83151",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },

  techText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 13,
  },

  githubButton: {
    backgroundColor: "#e83151",
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#e83151",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },

  githubButtonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 16,
  },
});
