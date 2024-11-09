class personaje{
 constructor(){
   this.posX = 100;
   this.posY = 100;
   this.bala = new Bala();
   this.vida = 1;
 }
 
 dibujar(){
   fill (0,0,200);
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
