/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function WidgetCallback(JSONobject) 
{
  var wHelloWorld = JSONobject[0];
  var wHTML = "";
  wHTML += ('<center><div id="”MyWidget”">');
  wHTML += ('<img border="”0”" width="0" height="0" src="”’" />');
  wHTML += ('<a target=""_blank"" href=""" style="text-decoration: none; ">');
  wHTML += ( wTitle + ' ' + wHelloWorld.text + '</a>');
  wHTML += ('</div></center>');
  document.getElementById('myFirstWidget').innerHTML = wHTML;
 }
