class Juego{
  constructor(){
    this.crearPersonaje();
    this.crearEnemigos(); 
 }
 
 dibujar(){
    this.personaje.dibujar();
    for (let i=0; i<10; i++){
     this.enemigos[i].dibujar();
   }
 }
 
 inicio(){
 }
 
 crearPersonaje(){
   this.personaje = new Personaje();
 }
 
 crearEnemigos(){
   this.enemigos = [];
   for (let i=0; i<10; i++){
     this.enemigos [i] = new Enemigo();
   }
 }
}
