<script setup lang="ts">
const search = ref<string>("");
const user = ref<{ name: string }>({ name: "John Doe" });
</script>

<template>
  <header>
    <div>
      <h3 class="font-bold">Olá, {{ user.name }}</h3>
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
      <ul>
        <li>test</li>
      </ul>
    </nav>
  </header>
</template>
