/**
Robot machine
Nolan Barton-Gomez

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Creates robot head
*/
function setup() {
  createCanvas(500,500);
  background(255,255,255);
  fill(0,255,0,255);
  rectMode(CENTER);
  /Creates left leg/
  rect(220,300,50,400);
  fill(0,255,0,255);
  rectMode(CENTER);
  /Creates right leg/
  rect(280,300,50,400);
  fill(0,255,0,255);
  rectMode(CENTER);
  /Creates left arm/
  rect(175,300,300,50);
  fill(0,255,0,255);
  rectMode(CENTER);
  /Creates right arm/
  rect(325,300,300,50);
  fill(0,255,0,255);
  rectMode(CENTER);
  /Creates body/
  rect(250,300,150,300);
  fill(0,255,0,255);
  rectMode(CENTER);
  /Creates head/
  rect(250,175,250,250);
  /Creates mouth/
  stroke(255,0,0,200);
  line(200,250,300,250);
  /Creates the eyes and colours the eyes red/
  fill(255,0,0,200);
  ellipse(200,150,50,90);
  fill(255,0,0,200);
  ellipse(300,150,50,90);
}


/**
Description of draw()
*/
function draw() {

}
