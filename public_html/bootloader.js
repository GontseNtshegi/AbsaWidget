/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write('<link rel="”stylesheet”" type="”text/css”" href="”style.css" />');
document.write('<script type="”text/javascript”" src="”widget.js”"></script>');
var myElement = document.getElementById('myFirstWidget');
var JavaScriptCode = document.createElement('script');
JavaScriptCode.setAttribute('type', 'text/javascript');
JavaScriptCode.setAttribute("src", 'http://widgets-gadges.com/widgetbook/chapter4/data.js');
document.getElementById('myFirstWidget').appendChild(JavaScriptCode);