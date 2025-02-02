# 📚 **Aula 02 - Navegação com Expo Router**

## 🎯 **Objetivo da Aula**  
Aprender os conceitos básicos de navegação em aplicativos React Native usando Expo Router, configurando rotas e criando navegações entre telas.

---

## 📝 **Conteúdo**

### **1. O que é Expo Router?**  
O Expo Router é uma biblioteca que implementa o conceito de navegação baseado em arquivos para projetos Expo, semelhante ao Next.js para web.

#### 🔑 **Principais Vantagens:**
- Navegação declarativa baseada em arquivos.  
- Menos configuração manual de rotas.  
- Navegação otimizada para apps Expo e React Native.  

---

### **2. Como funciona o Expo Router?**  
- As rotas são definidas dentro da pasta `/app`, onde cada arquivo representa uma tela.  
- Arquivos `.tsx` dentro da pasta `app` se tornam automaticamente rotas.

---

### **3. Estrutura do Projeto com Expo Router**

```bash
my-first-app
├── app/
│   ├── index.tsx        # Tela principal
│   ├── about.tsx        # Tela sobre
│   └── profile.tsx      # Tela perfil
└── App.tsx
```

---

## 🚀 **Atividade Prática**

### **1. Instalar o Expo Router**
```bash
npm install expo-router
```

### **2. Configurar o projeto para usar Expo Router**
Edite o `App.tsx` para importar o roteador:
```tsx
import { ExpoRouter } from 'expo-router';

export default function App() {
  return <ExpoRouter />;
}
```

### **3. Criar Rotas no Projeto**

#### **Criar a Tela Inicial (`index.tsx`)**
```tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Página Inicial 🚀</Text>
      <Button title="Ir para Sobre" onPress={() => router.push('/about')} />
    </View>
  );
}
```

#### **Criar a Tela Sobre (`about.tsx`)**
```tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function About() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Sobre o App 📱</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
```

---

### ✅ **Desafio Prático**  
1. Adicione uma nova tela de **perfil** (`profile.tsx`).  
2. Implemente uma navegação para voltar à tela inicial.  

---
