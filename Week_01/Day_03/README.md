# 📚 **Aula 03 - Estilização com NativeWind**  

## 🎯 **Objetivo da Aula**  
Explorar o NativeWind para estilização eficiente de componentes em projetos Expo, configurando temas e criando estilos reutilizáveis.

---

## 📝 **Conteúdo**

### **1. O que é NativeWind?**  
O NativeWind é uma biblioteca inspirada no Tailwind CSS para React Native, que permite aplicar classes utilitárias diretamente nos componentes para uma estilização rápida e eficiente.

#### 🔑 **Principais Benefícios:**  
- 🚀 **Produtividade:** Estilização declarativa com classes simples.  
- 🎨 **Temas Dinâmicos:** Configuração fácil de cores e temas.  
- 📱 **Compatibilidade:** Funciona nativamente com React Native.  

---

### **2. Configurando o NativeWind no Projeto**

#### **Passo 1 - Instalar a biblioteca**  
```bash
npm install nativewind tailwindcss
```

#### **Passo 2 - Configurar o Tailwind**
Gere o arquivo de configuração:  
```bash
npx tailwindcss init
```

Atualize o `tailwind.config.js`:  
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### **Passo 3 - Importar o CSS global**
No `App.tsx`, importe o NativeWind:
```tsx
import { ExpoRouter } from "expo-router";
import "nativewind/tailwind.css";

export default function App() {
  return <ExpoRouter />;
}
```

---

## 🚀 **Atividade Prática**

### **1. Estilizando Componentes com NativeWind**
Edite `index.tsx` para incluir uma estilização básica:
```tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-xl font-bold text-blue-500">Página Inicial 🚀</Text>
      <Button title="Ir para Sobre" onPress={() => router.push("/about")} />
    </View>
  );
}
```

---

### **2. Criar Estilos Reutilizáveis (Composição de Classes)**  
Crie um arquivo `styles.ts` para definir classes reutilizáveis:
```tsx
export const containerStyle = "flex-1 justify-center items-center bg-white";
export const titleStyle = "text-2xl font-semibold text-teal-500";
```

Utilize essas classes no componente:  
```tsx
import { View, Text } from "react-native";
import { containerStyle, titleStyle } from "../styles";

export default function About() {
  return (
    <View className={containerStyle}>
      <Text className={titleStyle}>Página Sobre 🚀</Text>
    </View>
  );
}
```

---

## ✅ **Desafio Prático**  
1. Crie uma tela de **perfil** com estilização diferenciada usando NativeWind.  
2. Adicione cores customizadas no tema do Tailwind configurando o arquivo `tailwind.config.js`.  

---
