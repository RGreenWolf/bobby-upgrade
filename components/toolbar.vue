<template>
    <div class="toolbar">
      <button @click="$emit('add-element', 'platform')">Ajouter une plateforme</button>
      <button @click="$emit('add-element', 'enemy')">Ajouter un ennemi</button>
      <!-- Ajoutez plus de boutons pour d'autres types -->
    </div>
  </template>
  
  <style>
  .toolbar {
    display: flex;
    flex-direction: column;
  }
  </style>
  