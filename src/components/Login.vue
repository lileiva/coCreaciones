<template>
  <v-app id="inspire">
    <v-content>
      <h1 class="logo">
        &#6016;
        <span class="logoName">Nexus</span>
      </h1>
      <br>
      <h2>El lugar para encontrar tu nueva oportunidad</h2>
      <br>
      <b-row>
        <b-col class="adv-item">
          <h4 style="text-align:center;">
            <b>¿Qué es?</b>
          </h4>
          <p style="text-align:center;">
            Una plataforma donde se reúnen alumnos, profesores e insitituciones de la UC
            para resolver problemas increíbles. ¿Quieres trabajar con algún profesor?
            ¿Quieres ser voluntario en organizaciones como La Resistencia, Animalia, o la
            Escuela Popular Aurora Argomedo? Este es tu lugar
          </p>
        </b-col>
        <b-col class="adv-item">
          <h4 style="text-align:center;">
            <b>¿Cómo funciona?</b>
          </h4>
          <p style="text-align:center;">
            Buscas la oferta que te entusiasme, revisas que cumplas los requisitos mínimos
            (por ejemplo, que puedas trabajar la cantidad de horas semanales que se pidan),
            y contactas a la persona encargada.
          </p>
        </b-col>
        <b-col class="adv-item">
          <h4 style="text-align:center;">
            <b>¿Qué lo diferencia de LinkedIn o un simple foro?</b>
          </h4>
          <p style="text-align:center;margin-bottom:-100px;">
            Nexus permite que, después de trabajar, puedas entregar tu opinión de la
            organización, y ella puede hacer lo mismo de tí. Esta es la mejor manera de que
            puedas validar tu esfuerzo y tus capacidades con el resto de la Universidad.
          </p>
        </b-col>
      </b-row>
      <v-container>
        <v-layout
          align-center
          justify-center
        >
          <v-flex md8>
            <v-card class="elevation-12">
              <v-toolbar
                dark
                color="#282262"
              >
                <v-toolbar-title>Ingresa con tu cuenta aqui!</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="user"
                    prepend-icon="person"
                    name="login"
                    label="Usuario"
                    type="text"
                  />
                  <v-text-field
                    id="password"
                    v-model="password"
                    prepend-icon="lock"
                    name="password"
                    label="Contraseña"
                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="#282262"
                  @click="click"
                >
                  Ingresar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer
      color="#282262"
      class="white--text"
      app
    >
      <span class="centered">
        CoCreaciones - NA, JMC, LL, SV
        &copy; 2019
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: () => ({
    drawer: null,
    user: '',
    password: '',
    show1: false,
  }),
  methods: {
    click() {
      this.singIn({ email: this.user, password: this.password })
    },
    ...mapActions({
      singIn: 'singIn',
    }),
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

.v-content {
  background-color: #efefef;
}

h2 {
  font-size: 40px;
}

h4 b {
  font-size: 22px;
  color: #282262;
}

.centered {
  text-align: center;
  margin-bottom: 15px;
  color: #efefef;
  width: 100%;
  margin-top: 15px;
}
.adv-item{
  border-radius: 1vw;
  margin: 1vw;
  padding: 1vw;
  background-color:#92DCE5;
}
.v-btn__content {
  color: #efefef !important;
}

body,
.v-content__wrap {
  background-color: #efefef;
  padding: 10px;
}

.logo {
  margin-top: 25px;
  font-size: 128px;
  color: #282262;
}

.logoName {
  font-size: 88px;
}

h1,
h2 {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #282262;
}
</style>
