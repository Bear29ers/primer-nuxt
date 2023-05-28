import { ref } from 'vue';

/*
export const useCounter = (initialValue: number) => {
  const count = ref(initialValue);
  const inc = () => (count.value = count.value + 1);
  const dec = () => (count.value = count.value - 1);

  return {
    count,
    inc,
    dec,
  };
};
*/

// 各ページ共通して使用できるuseState
export const useCounter = () => {
  return useState(() => 0);
};
