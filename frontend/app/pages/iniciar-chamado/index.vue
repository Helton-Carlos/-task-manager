<script setup lang="ts">
const name = ref<string>("");
const empresaOption = [{ value: "suco", name: "suco" }];
</script>

<template>
  <div class="container">
    <h2>Criar chamado</h2>

    <div class="card">
      <h2>Preencha o formulário</h2>

      <div class="flex gap-4">
        <GTInput
          label-title="Nome completo"
          :model-value="name"
          type="text"
          placeholder="digite seu nome"
        />

        <GTInput
          label-title="Nome completo"
          :model-value="name"
          type="text"
          placeholder="digite seu nome"
        />

        <GTSelect
          id="empresa"
          label-title="Empresa"
          :model-value="name"
          placeholder="ex: casa do suco"
          :options="empresaOption"
        />
      </div>
    </div>
  </div>
</template>
