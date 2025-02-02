# 📚 **Semana 02 - Aula 01: Introdução ao React Query e Gerenciamento de Estado de Dados**  

## 🎯 **Objetivo da Aula**  
Entender os fundamentos do React Query, configurar o ambiente no Expo, consumir dados de APIs e gerenciar cache eficientemente.  

---

## 📝 **Conteúdo**  

### **1. O que é React Query?**  
React Query é uma biblioteca poderosa para gerenciar o estado de dados em aplicativos React e React Native.

#### 🔑 **Principais Benefícios:**  
- ⚡ **Gerenciamento de Cache Automático:** Reduz requisições desnecessárias.  
- 🔄 **Sincronização em Tempo Real:** Atualiza dados automaticamente.  
- 🚀 **Facilidade com APIs:** Abstração para chamadas HTTP.  
- 🛡️ **Manipulação de Estados:** Suporte completo para estados de carregamento e erros.  

---

### **2. Configurando o React Query no Projeto Expo**

#### **Passo 1 - Instalar a biblioteca**  
```bash
npm install @tanstack/react-query
```

#### **Passo 2 - Configurar o `QueryClient`**  
Adicione a configuração no arquivo `App.tsx`:  

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
```

---

## 🚀 **Atividade Prática**

### **1. Consumir Dados de uma API**  

#### **Passo 1 - Criar a Função de Consulta**  
Adicione uma função para buscar dados da API `jsonplaceholder`:  

```tsx
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Erro ao buscar dados");
  return response.json();
};
```

#### **Passo 2 - Utilizar `useQuery` para Buscar Dados**  

```tsx
import { useQuery } from "@tanstack/react-query";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";

export default function Home() {
  const { data, isLoading, isError } = useQuery(["posts"], fetchPosts);

  if (isLoading) return <ActivityIndicator size="large" color="#00ff00" />;
  if (isError) return <Text>Erro ao carregar dados.</Text>;

  return (
    <ScrollView className="flex-1 p-4">
      {data.map((post: { id: number; title: string }) => (
        <View key={post.id} className="p-4 border-b border-gray-300">
          <Text className="text-lg font-bold">{post.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
```

---

### ✅ **Desafio Prático**
1. Crie uma tela que consuma dados de uma API externa (por exemplo, clima ou criptomoedas).  
2. Adicione tratamento de erro e estado de carregamento.  
3. Garanta a exibição de uma lista com pelo menos 5 itens.  

---