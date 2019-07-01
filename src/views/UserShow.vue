<template>
  <div class="show">
    <div id="offer">
      <div class="no-top">
        <h1>{{ user.name }}</h1>
        <h3>Grado académico: {{ user.degree }}</h3>
        <h3 v-if="user.admin">Es un administrador</h3>
        <h3 v-if="!user.admin">No es un administrador</h3>
        <h3>CV:</h3>
        <ul>
          <li v-for="item in user.CV">{{ item }}</li>
        </ul>
        <br>
        <br>
        <h3>Validaciones recibidas:</h3>
        <div class="column">
          <Review
            v-for="_validation in filteredValidations"
            :key="_validation.id"
            :validation="_validation"
          />
        </div>
      </div>
    </div>
    <br>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import Review from "../components/Review";

export default {
  name: "UserShow",
  components: {
    Review
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState("validations", ["validations"]),
    ...mapState("users", ["users"]),
    user() {
      const observer = this.users.__ob__;
      return observer.value[this.$route.params.id];
    },

    filteredValidations() {
      const l = [];
      Object.entries(this.validations).forEach(([id, validation]) => {
        if (validation.person_id === +this.$route.params.id) {
          l.push(validation);
        }
      });
      return l;
    }
  },
  created() {
    this.fetchValidations().then(() => {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
    this.fetchUsers().then(async () => {
      setTimeout(async () => {
        this.loading = false;
      }, 500);
    });
  },
  methods: {
    ...mapActions("validations", ["fetchValidations"]),
    ...mapActions("users", ["fetchUsers"])
  }
};
</script>

<style scoped>
h3 {
  margin: 5px;
}

h1 {
  font-size: 55px;
}

.application--wrap {
  min-height: 0vh;
}

.no-top {
  margin-top: 0px;
}

.posted-info {
  color: #555;
  text-align: right;
  padding: 25px;
}
.headline {
  text-align: center;
}
#offer {
  padding: 25px;
  /* background-color: blue; */
}
.show_content {
  padding: 15px;
  height: 40vh;
  /* background-color: #aaa; */
  border: black 1px solid;
}
.v-btn {
  min-width: 0;
  width: 33%;
}
.orgCard {
  margin-right: 3%;
}
.linkDiscreto {
  text-decoration: none;
  color: black;
}
.linkDiscreto:hover {
  color: #666;
}
</style>
