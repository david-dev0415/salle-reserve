// "use strict";

import { ExceptionError } from './exceptionError.js';
import login from './verifyLogin.js';

(function () {

   const modeText = document.querySelector('#mode-text');
   const modeIcon = document.querySelector('#mode-icon');

   function init () {

      // My routes of pages
      const ROUTES = ['index', 'login', 'error'];
      const pathname = window.location.pathname.replace(/\//g, '').replace('.html', '');      
      const btnGoBack = document.querySelector("#btn-goBack");
      
      if (ROUTES.includes(pathname)) {

      } else {
         callException();
      }

      // console.log(routes);

   }

   function handleChangeRoute() {
      const route = window.location.hash;

   }

   function loadContent() {
      
   }

   function callException () {
      try {
         window.location.href = "error.html";
         throw new ExceptionError("Page does not exists.");
      } catch (error) {
         if (error instanceof ExceptionError) {
            console.log(error);
         } else {
            console.log("Error no manejado", error.message);
         }
      }
   }

   function changeBackground () {

   }


   // Init
   document.addEventListener("DOMContentLoaded", init);

}());