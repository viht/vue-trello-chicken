import Vue from 'vue';

const HomeComponent = Vue.extend({
  props: {
    src: String,
    title: String,
  },
});

export default HomeComponent;
