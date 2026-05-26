import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const openLink = async (url: string) => {
    await Linking.openURL(url);
  };

  const skills = [
    "React Native",
    "Expo",
    "Next.js",
    "Django",
    "Java",
    "C",
    "JavaScript",
    "Python",
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <LinearGradient colors={["#1b1b1b", "#121111"]} style={styles.heroCard}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../../assets/images/ME.png")}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.title}>Lucas Fernandes</Text>

        <Text style={styles.subtitle}>
          Full Stack Developer & Computer Science Student
        </Text>

        <Text style={styles.description}>
          Desenvolvedor apaixonado por tecnologia, com experiência em frontend,
          backend e desenvolvimento de aplicações modernas.
        </Text>

        <View style={styles.socialContainer}>
          <Pressable
            style={styles.socialButton}
            onPress={() => openLink("https://github.com/Bye-bit")}
          >
            <Ionicons name="logo-github" size={24} color="#e83151" />
          </Pressable>

          <Pressable
            style={styles.socialButton}
            onPress={() =>
              openLink(
                "https://www.linkedin.com/in/lucas-fernandes-nunes-machado-dev",
              )
            }
          >
            <Ionicons name="logo-linkedin" size={24} color="#e83151" />
          </Pressable>

          <Pressable
            style={styles.socialButton}
            onPress={() => openLink("https://www.instagram.com/fer.lucas2")}
          >
            <Ionicons name="logo-instagram" size={24} color="#e83151" />
          </Pressable>
        </View>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Estudante de Ciências da Computação na Universidade Católica de
            Pernambuco.
          </Text>

          <Text style={styles.infoText}>
            Experiência com desenvolvimento web, APIs, interfaces modernas e
            projetos acadêmicos.
          </Text>

          <Text style={styles.infoText}>
            Sempre buscando aprender novas tecnologias e evoluir como
            desenvolvedor.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>

        <View style={styles.skillsContainer}>
          {skills.map((skill) => (
            <View key={skill} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      <Pressable style={styles.projectsButton}>
        <Text style={styles.projectsButtonText}>Ver Projetos</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b1b1b",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 70,
    paddingBottom: 40,
    gap: 28,
  },

  heroCard: {
    borderRadius: 28,
    padding: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e83151",
    shadowColor: "#e83151",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 12,
  },

  avatarWrapper: {
    width: 170,
    height: 170,
    borderRadius: 999,
    borderWidth: 4,
    borderColor: "#e83151",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
    shadowColor: "#e83151",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#e83151",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "600",
  },

  description: {
    color: "#cfcfcf",
    fontSize: 15,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 24,
  },

  socialContainer: {
    flexDirection: "row",
    gap: 18,
  },

  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 999,
    backgroundColor: "#1b1b1b",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2b2b2b",
  },

  section: {
    gap: 18,
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#ffffff",
  },

  infoCard: {
    backgroundColor: "#121111",
    borderRadius: 24,
    padding: 22,
    gap: 18,
    borderWidth: 1,
    borderColor: "#262626",
  },

  infoText: {
    color: "#d8d8d8",
    lineHeight: 24,
    fontSize: 15,
  },

  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  skillBadge: {
    backgroundColor: "#121111",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#e83151",
  },

  skillText: {
    color: "#ffffff",
    fontWeight: "600",
  },

  projectsButton: {
    backgroundColor: "#e83151",
    paddingVertical: 18,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#e83151",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 10,
  },

  projectsButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
});
