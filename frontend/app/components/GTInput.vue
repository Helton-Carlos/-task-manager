<script setup lang="ts">
defineProps<{
  labelTitle?: string;
  id?: string;
  modelValue: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}>();
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
    />
  </div>
</template>
