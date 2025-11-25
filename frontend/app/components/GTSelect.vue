<script setup lang="ts">
interface SelectOption {
  value: string | number;
  name: string;
}

defineProps<{
  id?: string;
  labelTitle?: string;
  modelValue: string | number | null;
  placeholder?: string;
  disabled?: boolean;
  options: SelectOption[];
}>();

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div>
    <label v-if="labelTitle" :for="id">{{ labelTitle }}</label>

    <select
      :id="id"
      :value="modelValue"
      :disabled="disabled"
      @change="updateValue"
    >
      <option value="" disabled selected>
        {{ placeholder || "Selecione uma opção" }}
      </option>

      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>
