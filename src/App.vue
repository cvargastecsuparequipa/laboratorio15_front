<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Sistema de Ventas</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>
    <v-navigation-drawer app>
      <!-- -->

        <v-navigation-drawer
            v-model="drawer"

            permanent
        >
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-title>Invitado</v-list-item-title>


          </v-list-item>



          <v-list v-if="mostrarMenu" dense>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
    drawer: true,
    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'My Account', icon: 'mdi-account' },
      { title: 'Users', icon: 'mdi-account-group-outline' },
    ],
    mini: true,
    mostrarMenu:false
  }),
};
</script>
