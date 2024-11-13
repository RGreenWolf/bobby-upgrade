<template>
    <div class="property-editor" v-if="selected">
      <h3>Propriétés</h3>
      <div>
        <label>X : </label>
        <input type="number" v-model.number="x" />
      </div>
      <div>
        <label>Y : </label>
        <input type="number" v-model.number="y" />
      </div>
      <button @click="update">Mettre à jour</button>
    </div>
    <div v-else>
      <p>Sélectionnez un élément pour voir ses propriétés.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selected: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        x: 0,
        y: 0,
      };
    },
    watch: {
      selected(newVal) {
        if (newVal) {
          // Mettre à jour les valeurs lorsque l'élément sélectionné change
          this.x = newVal.left || 0;
          this.y = newVal.top || 0;
        } else {
          // Réinitialiser les valeurs si rien n'est sélectionné
          this.x = 0;
          this.y = 0;
        }
      },
    },
    methods: {
      update() {
        if (this.selected) {
          this.$emit('update', { left: this.x, top: this.y });
        }
      },
    },
  };
  </script>
  
  <style>
  .property-editor {
    border: 1px solid #ddd;
    padding: 10px;
  }
  </style>
  