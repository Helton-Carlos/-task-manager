<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const modal = useTemplateRef("modal");
const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  today: yup.string().required("A data é obrigatória"),
  typeCall: yup.string().required("O tipo de atendimento é obrigatório"),
  sector: yup.string().required("O setor é obrigatório"),
  company: yup.string().required("A empresa é obrigatória"),
  priority: yup.string().required("A prioridade é obrigatória"),
});

const { handleSubmit } = useForm({ validationSchema: schema });

const { value: name, errorMessage: nameError } = useField<string>(
  "name",
  undefined,
  { initialValue: "" }
);

const { value: today, errorMessage: todayError } = useField<string>(
  "today",
  undefined,
  { initialValue: "" }
);

const { value: typeCall, errorMessage: typeCallError } = useField<string>(
  "typeCall",
  undefined,
  { initialValue: "" }
);

const { value: sector, errorMessage: sectorError } = useField<string>(
  "sector",
  undefined,
  { initialValue: "" }
);

const { value: company, errorMessage: companyError } = useField<string>(
  "company",
  undefined,
  { initialValue: "" }
);

const { value: priority, errorMessage: priorityError } = useField<string>(
  "priority",
  undefined,
  { initialValue: "" }
);

const companyOption = [
  { value: "suco", name: "Caso do suco" },
  { value: "logistica", name: "Dia de logistica" },
];

const statusOption = [
  { value: "sem", name: "Sem prioridade" },
  { value: "baixo", name: "Baixa" },
  { value: "medio", name: "Médio" },
  { value: "alta", name: "Alta" },
  { value: "altíssima", name: "Altíssima" },
];

const sectorOption = [
  { value: "atendimento", name: "Atendimento ao Cliente (SAC)" },
  { value: "help_desk", name: "Help Desk / Suporte Técnico" },
  { value: "service_desk", name: "Service Desk" },
  { value: "comercial", name: "Comercial / Vendas" },
  { value: "financeiro", name: "Financeiro / Cobrança" },
  { value: "administrativo", name: "Administrativo" },
  { value: "rh", name: "Recursos Humanos (RH)" },
  { value: "ti", name: "Tecnologia da Informação (TI)" },
  { value: "desenvolvimento", name: "Desenvolvimento / Engenharia" },
  { value: "marketing", name: "Marketing" },
  { value: "logistica", name: "Logística / Operações" },
  { value: "cs", name: "Customer Success (Sucesso do Cliente)" },
];

const submit = handleSubmit((values) => {
  console.log("Formulário validado com sucesso! Dados:", values);
  (modal.value as any)?.openModal();
});

function closeModal() {
  (modal.value as any)?.closeModal();
}

function initCall() {
  (modal.value as any)?.closeModal();
}
</script>

<template>
  <div class="container">
    <h2>Criar chamado</h2>

    <div class="card-page flex flex-col gap-4">
      <h2>Preencha o formulário</h2>

      <form @submit.prevent="submit">
        <div class="flex flex-wrap gap-4">
          <div>
            <GTInput
              v-model="name"
              label-title="Colaborador"
              type="text"
              placeholder="digite seu nome"
            />
            <p class="text-red-500 text-sm">{{ nameError }}</p>
          </div>

          <div>
            <GTSelect
              id="empresa"
              v-model="company"
              class="flex-1"
              label-title="Empresa"
              placeholder="ex: casa do suco"
              :options="companyOption"
            />
            <p class="text-red-500 text-sm">{{ companyError }}</p>
          </div>

          <div>
            <GTInput
              v-model="today"
              label-title="Dia do atendimento"
              type="date"
            />
            <p class="text-red-500 text-sm">{{ todayError }}</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 mt-4">
          <div>
            <GTInput
              v-model="typeCall"
              label-title="Tipo de atendimento"
              type="text"
              placeholder="Financeiro"
            />
            <p class="text-red-500 text-sm">{{ typeCallError }}</p>
          </div>

          <div>
            <GTSelect
              id="status"
              v-model="priority"
              class="flex-1"
              label-title="Status de prioridade"
              placeholder="ex: sem prioridade"
              :options="statusOption"
            />
            <p class="text-red-500 text-sm">{{ priorityError }}</p>
          </div>

          <div>
            <GTSelect
              id="setores"
              v-model="sector"
              class="flex-1"
              label-title="Possível Setores"
              placeholder="ex: Desenvolvimento"
              :options="sectorOption"
            />
            <p class="text-red-500 text-sm">{{ sectorError }}</p>
          </div>
        </div>

        <div class="mt-4">
          <GTButton type="submit">
            <span>Criar chamado</span>
            <Icon name="lucide:plus" size="24" color="white" />
          </GTButton>
        </div>
      </form>
    </div>
  </div>

  <GTModal ref="modal">
    <template #title>
      <h3 class="text-lg font-semibold">Título do Modal</h3>
    </template>

    <template #body>
      <p class="font-semibold">teste</p>
    </template>

    <template #footer>
      <GTButton underline @click="closeModal">Cancelar</GTButton>
      <GTButton @click="initCall"> Iniciar </GTButton>
    </template>
  </GTModal>
</template>
