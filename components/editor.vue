<template>
    <div class="editor">
      <h1>Éditeur de niveau</h1>
  
      <!-- Zone de dessin -->
      <div class="canvas-container">
        <canvas ref="canvas" width="800" height="600"></canvas>
      </div>
  
      <!-- Éditeur des propriétés de l'élément sélectionné -->
      <PropertyEditor
        :selected="selectedElement"
        @update="updateElement"
      />
  
      <!-- Actions -->
      <div class="actions">
        <button @click="addRectangle">Ajouter un rectangle</button>
        <button @click="addCircle">Ajouter un cercle</button>
        <button @click="exportLevel">Exporter le niveau</button>
      </div>
    </div>
  </template>
  
  <script>
  import { fabric } from 'fabric'; // Importer Fabric.js
  
  export default {
    data() {
      return {
        canvas: null,
        selectedElement: null, // Élément actuellement sélectionné
        levelData: {
          world: { width: 800, height: 600 },
          elements: [], // Liste des objets ajoutés (rectangles, cercles, etc.)
        },
      };
    },
    mounted() {
      this.initCanvas();
    },
    methods: {
      // Initialisation du canvas
      initCanvas() {
        this.canvas = new fabric.Canvas(this.$refs.canvas);
  
        // Gestion des événements de sélection
        this.canvas.on('selection:created', (e) => {
          this.selectedElement = e.selected[0] || null;
        });
        this.canvas.on('selection:updated', (e) => {
          this.selectedElement = e.selected[0] || null;
        });
        this.canvas.on('selection:cleared', () => {
          this.selectedElement = null;
        });
      },
  
      // Ajouter un rectangle
      addRectangle() {
        const rect = new fabric.Rect({
          left: 100,
          top: 100,
          width: 50,
          height: 50,
          fill: 'blue',
        });
        this.canvas.add(rect);
        this.levelData.elements.push({
          type: 'rectangle',
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          fill: rect.fill,
        });
      },
  
      // Ajouter un cercle
      addCircle() {
        const circle = new fabric.Circle({
          left: 200,
          top: 200,
          radius: 30,
          fill: 'red',
        });
        this.canvas.add(circle);
        this.levelData.elements.push({
          type: 'circle',
          left: circle.left,
          top: circle.top,
          radius: circle.radius,
          fill: circle.fill,
        });
      },
  
      // Mettre à jour les propriétés d'un élément
      updateElement(properties) {
        if (this.selectedElement) {
          this.selectedElement.set(properties);
          this.canvas.renderAll();
        }
      },
  
      // Exporter le niveau en JSON
      exportLevel() {
        const exportedData = this.canvas.toJSON();
        console.log('Exported Level:', JSON.stringify(exportedData, null, 2));
        alert('Le niveau a été exporté ! Consultez la console.');
      },
    },
  };
  </script>
  
  <style scoped>
  .editor {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .canvas-container {
    border: 1px solid #ccc;
    margin-bottom: 20px;
  }
  
  .actions {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }
  </style>
  