namespace TodoApp.BaseService {

  export  interface IBaseService{
   test():void;
  }

  export  class IBaseService implements IBaseService{

   public test():void {
        alert("HELLO WORLD test");
    }
      
}
    
    }