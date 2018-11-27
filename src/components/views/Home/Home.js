import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import BoardCard from '@/components/BoardCard';

const HomeComponent = Vue.extend({
  name: 'home-view',
  components: { BoardCard },

  data() {
    return {
      boardName: '',
    };
  },

  computed: {
    ...mapState([
      'boards',
      'fetchingData',
      'error',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard',
    ]),
    add() {
      this.addBoard({ name: this.boardName });
      this.boardName = '';
    },
  },

  created() {
    this.fetchBoards({ user: 1 });
  },
});

export default HomeComponent;
