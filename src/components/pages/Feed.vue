<template>
  <div class="container">
    <div class="columns is-multiline">
      <div
        class="column is-3"
        v-for="(vacancy, index) in Vacancies"
        :key="index"
      >
        <!-- <Card
          :card-title="vacancy.title"
          :card-content="vacancy.description"
          :action-button-text="'Ver mais'"
          @onClick="handleClick(vacancy)"
          :card-header-class="''"
          :card-header-title-class="''"
          :card-content-class="''"
          :content-class="''"
          :card-footer-class="''"
          :action-button-class="''"
        /> -->
        <Card
          :card-title="vacancy.title"
          :card-content="vacancy.description"
          :card-header-class="'card-header is-shadowless'"
          :card-footer-class="'card-footer is-shadowless'"
        >
          <button
            class="button is-pulled-right has-text-light has-background-danger"
            @click="handleClick(vacancy)"
            style="margin: 0.75em"
          >
            Ver Mais
          </button>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../organisms/Card";

const Vacancies = [
  { title: "Lorem", description: "Lorem" },
  { title: "Lorem", description: "Lorem" },
  { title: "Lorem", description: "Lorem" },
  { title: "Lorem", description: "Lorem" },
  { title: "Lorem", description: "Lorem" },
  { title: "Lorem", description: "Lorem" },
  { title: "Lorem", description: "Lorem" },
  { title: "Lorem", description: "Lorem" }
];

export default {
  name: "Feed",
  components: {
    Card
  },
  data: () => ({
    Vacancies: Vacancies
  }),
  methods: {
    handleClick(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss" scoped></style>
