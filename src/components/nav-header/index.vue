<template>
  <view class="nav-header">
    <up-navbar
      :title="props.title"
      :autoBack="true"
      :placeholder="true"
      :fixed="props.fixed"
    ></up-navbar>
  </view>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  fixed: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
  fixed: true
});
</script>

<style lang="scss" scoped></style>
