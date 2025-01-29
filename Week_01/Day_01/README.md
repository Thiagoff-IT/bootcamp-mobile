# 📚 **Aula 01 - Introdução ao Expo e Desenvolvimento de Apps**

## 🎯 **Objetivo da Aula**  
Compreender o que é o Expo, suas vantagens e como configurar um ambiente de desenvolvimento eficiente para criar aplicativos React Native.

---

## 📝 **Conteúdo**

### **1. O que é o Expo?**
Expo é uma plataforma que facilita o desenvolvimento de aplicativos com React Native. Ele fornece ferramentas e APIs nativas prontas para uso, simplificando o desenvolvimento e a criação de builds.

### **2. Vantagens do Expo**
- 📱 **Configuração simples:** Não precisa configurar Android Studio ou Xcode para iniciar o desenvolvimento.  
- 🔧 **APIs prontas:** Localização, câmera, notificações, e mais.  
- 🔄 **Hot Reload:** Atualização instantânea do app durante o desenvolvimento.  
- 🛠️ **EAS Build:** Gera builds nativas para Android e iOS facilmente.  
- 🌍 **Expo Go:** Simule o aplicativo direto no celular.

---

### **3. Como o Expo simplifica o desenvolvimento React Native**
- Com Expo, você não precisa lidar diretamente com configurações nativas (Xcode, Gradle, Pods).  
- Disponibiliza uma série de componentes e APIs que funcionam fora da caixa.

---

### **4. Introdução ao Expo Go e APIs Nativas**
- O Expo Go permite visualizar o aplicativo diretamente no seu dispositivo físico.  
- APIs nativas integradas: câmera, localização, notificações, entre outras.

---

## 🚀 **Atividade Prática**

### **1. Configurar o ambiente de desenvolvimento**
#### **Passo 1 - Instalar Node.js**
- Baixe e instale a versão LTS do Node.js no [site oficial](https://nodejs.org/).  

#### **Passo 2 - Instalar o Expo CLI**
```bash
npm install -g expo-cli
```

#### **Passo 3 - Criar um projeto básico**
```bash
npx create-expo-app my-first-app
cd my-first-app
```

#### **Passo 4 - Executar o projeto**
```bash
npm start
```

#### **Passo 5 - Testar no Expo Go**
- Instale o **Expo Go** no seu celular: [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/us/app/expo-go/id982107779).  
- Escaneie o QR Code no terminal com o aplicativo Expo Go.

---

### **2. Estrutura do Projeto Expo**
```bash
my-first-app
├── App.js        # Componente principal
├── package.json   # Dependências
└── node_modules/  # Dependências instaladas
```

---

### **3. Criar um componente básico**
Edite o arquivo `App.js` para exibir uma mensagem personalizada:  
```tsx
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, Bootcamp Expo! 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});
```

---

## ✅ **Desafio Prático**  

1. Personalize a tela inicial com uma mensagem e um botão.  
2. Altere o fundo da tela para uma cor diferente.  

Se precisar de ajuda com algum detalhe, me avisa! 😊