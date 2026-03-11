"use strict"
function grret()
{
    console.log(this);
}
grret();

// without sctrict =>gloabl objec
// with strict =>undefined