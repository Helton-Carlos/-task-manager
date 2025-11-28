<script setup lang="ts">
defineProps<{
  labelTitle?: string;
  id?: string;
  modelValue: string | number | Date;
  type?:
    | "text"
    | "checkbox"
    | "password"
    | "submit"
    | "button"
    | "email"
    | "number"
    | "checkbox"
    | "date";
  placeholder?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

function handleInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div>
    <label v-if="labelTitle" :for="id">{{ labelTitle }}</label>
    <input
      :id="id"
      :type="type || 'text'"
      :placeholder="placeholder || ''"
      :disabled="disabled || false"
      :value="modelValue"
      @input="handleInput"
    />
  </div>
</template>
