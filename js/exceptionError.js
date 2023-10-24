export class ExceptionError extends Error {
   constructor(message) {
      super(message);
      this.title = 'title'
   }
}