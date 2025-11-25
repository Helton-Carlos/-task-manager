<script setup lang="ts">
const search = ref<string>("");
const user = ref<{ name: string }>({ name: "John Doe" });
</script>

<template>
  <header>
    <div class="container flex justify-between items-center flex-wrap gap-4">
      <div>
        <h3 class="font-bold text-gray-500">Olá, {{ user.name }}</h3>
      </div>

      <div class="w-[400px]">
        <GTInput
          id="search"
          v-model="search"
          type="text"
          placeholder="Procure pelo número da ocorrência"
        />
      </div>

      <nav>
        <ul class="flex items-center gap-2">
          <nuxt-link
            to="/configuracoes"
            class="flex items-center gap-1 text-gray-500 cursor-pointer"
          >
            <Icon name="lucide:settings" size="24" color="blue" />
            <span class="font-bold">Configuração</span>
          </nuxt-link>
        </ul>
      </nav>
    </div>
  </header>
</template>
