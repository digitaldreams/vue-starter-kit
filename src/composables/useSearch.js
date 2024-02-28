import { ref, reactive, defineModel, computed, watch } from "vue";
import StringSearch from "@/servies/StringSearch";

export default function useSearch() {
  const filters = reactive({});
  const query = ref();
  const data = ref([]);
  const searhableprops = ref([]);

  const filteredData = computed(() => {
    const qString = query.value || "";
    const searchables = searhableprops.value ?? [];
    if (qString) {
      const search = new StringSearch(data.value, searchables);
      console.log(searchables);

      return search.setQuery(qString).search();
    }

    return data.value;
  });

  return { data, searhableprops, query, filters, filteredData };
}
