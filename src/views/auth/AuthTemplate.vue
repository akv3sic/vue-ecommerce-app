<template>
    <v-row class="mt-10">
    <v-col sm="6" offset-sm="3" md="4" offset-md="4">
      <v-form class="">
        <v-card>
          <v-card-subtitle>
            <h3 class="">
              <slot name="title"></slot>
            </h3>
          </v-card-subtitle>
          <v-card-text>
            <slot name="form"></slot>
          </v-card-text>
          <v-card-actions>
            <slot name="actions"></slot>
          </v-card-actions>
          <slot name="link"></slot>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>