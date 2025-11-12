<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const toast = useToast();

const schema = yup.object({
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup.string().required("Digite sua senha"),
});

const { handleSubmit } = useForm({ validationSchema: schema });

const { value: email, errorMessage: emailError } = useField<string>(
  "email",
  undefined,
  {
    initialValue: "",
  }
);
const { value: password, errorMessage: passwordError } = useField<string>(
  "password",
  undefined,
  {
    initialValue: "",
  }
);

const login = handleSubmit(async (values) => {
  if (values.email && values.password) {
    await navigateTo("/");

    toast.success({
      title: "Sucesso!",
      message: "Seja bem-vindo!",
    });
  } else {
    toast.error({
      title: "Erro!",
      message: "Falha, tente novamente...",
    });
  }
});

definePageMeta({
  layout: "login",
});
</script>

<template>
  <div class="flex justify-between">
    <div class="bg-blue-300 w-[30%] h-screen">
      <h1 class="font-bold text-white">CRM</h1>
    </div>

    <div
      class="min-h-screen w-full bg-gray-50 flex justify-center items-center"
    >
      <form class="form-login" @submit.prevent="login">
        <GTInput
          id="email"
          v-model="email"
          label-title="E-mail"
          type="email"
          placeholder="ex: john@gmail.com"
        />
        <p class="text-red-500 text-sm">{{ emailError }}</p>

        <GTInput
          id="password"
          v-model="password"
          label-title="Password"
          type="password"
          placeholder="ex: tes4@#$%"
        />
        <p class="text-red-500 text-sm">{{ passwordError }}</p>

        <GTButton type="submit">Login</GTButton>
      </form>
    </div>
  </div>
</template>
