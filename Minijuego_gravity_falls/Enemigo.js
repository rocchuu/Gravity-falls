class enemigo{
  constructor(){
   this.posX = 200;
   this.posY = 200;
   this.bala = new Bala();
   this.vida = 1;
 }
 
 dibujar(){
   fill (200,0,0);
   rect (this.posX, this.posY, 50, 50);
 }
 
 moverIzquierda(){
 }
 
 moverDerecha(){
 }
 
 moverArriba(){
 }
 
 moverAbajo(){
 }
 
}
