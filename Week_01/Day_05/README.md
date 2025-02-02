# 📚 **Aula 05 - Introdução ao TypeScript no Expo**  

## 🎯 **Objetivo da Aula**  
Aprender os fundamentos do TypeScript, suas vantagens no desenvolvimento de aplicativos com Expo, e configurar o ambiente de TypeScript no projeto.

---

## 📝 **Conteúdo**

### **1. O que é TypeScript?**  
TypeScript é uma linguagem de programação baseada no JavaScript, que adiciona tipagem estática opcional.  

#### 🔑 **Principais Benefícios:**  
- ✅ **Tipagem Estática:** Menos erros em tempo de execução.  
- 📦 **Ferramentas de Desenvolvimento:** Melhor autocompletar e verificação de tipos.  
- 🚀 **Código mais robusto:** Detecta problemas antes da execução.  

---

### **2. Configurando o TypeScript no Projeto Expo**

#### **Passo 1 - Adicionar Suporte ao TypeScript**  
```bash
npm install --save-dev typescript @types/react @types/react-native
```

#### **Passo 2 - Renomear Arquivos**  
Renomeie seus arquivos `*.js` para `*.tsx`.

#### **Passo 3 - Configurar o `tsconfig.json`**
Gere o arquivo automaticamente:
```bash
npx tsc --init
```

Atualize o conteúdo básico do `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react",
    "strict": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules"]
}
```

---

## 🚀 **Atividade Prática**  

### **1. Adicionar Tipagem Básica no Componente**

Atualize `index.tsx` para incluir tipagem no componente:  
```tsx
import { View, Text } from "react-native";

type Props = {
  message: string;
};

export default function Home({ message }: Props) {
  return (
    <View className="flex-1 justify-center items-center bg-gray-50">
      <Text className="text-xl text-blue-500">{message}</Text>
    </View>
  );
}
```

---

### **2. Utilizar Interfaces e Tipos**  

Crie um tipo `User` para tipar dados no projeto:  
```tsx
type User = {
  id: number;
  name: string;
  email: string;
};
```

Use a interface em uma função:  
```tsx
const getUserInfo = (user: User) => {
  return `${user.name} - ${user.email}`;
};
```

---

### **3. Adicionar Tipagem a Estados com `useState`**  
```tsx
import { useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl">{`Contagem: ${count}`}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

---

## ✅ **Desafio Prático**  
1. Crie uma interface para um objeto **produto**, contendo `id`, `nome`, `preço`, e `estoque`.  
2. Utilize essa interface em um componente para exibir uma lista de produtos.  
3. Adicione tipagem aos estados que manipulam os produtos.  

---
