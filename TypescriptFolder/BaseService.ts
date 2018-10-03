namespace TodoApp.BaseService {

  export  interface IBaseService{
   test():void;
  }

  export  class BaseService implements IBaseService{

   public test():void {
        alert("HELLO WORLD");
    }
      
}
    
    }