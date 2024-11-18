import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { of, throwError } from 'rxjs'; // this of method creates anything into an observable

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', {
      post: of({}),
      get: of({}),
    });

    // we create a fake implementation of the http client to pass into the service as it expectes a http client in its constructor
    service = new TodoService(spy);
    // then we pass that service fake initialization of the service into the component as it expects in its contructor.
    component = new TodosComponent(service);
  });

  it('should set todos property from the item returned from the server', () => {
    let todos = [1, 2, 3];

    // while testign with servcies we create a fake implementation of the service and we use the implementation like this.
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos);
    });
    component.ngOnInit();
    expect(component.todos).toEqual(todos);
  });

  it('should call the add service', () => {
    let spy = spyOn(service, 'add').and.returnValue(of({})); // when we just want to check if the service is just being called we can use of method to return any blank value.
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add a todo to when the service is called', () => {
    let todo = { id: 1 };
    spyOn(service, 'add').and.returnValue(of(todo));
    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should set the message property when getting an error while adding a new todo', () => {
    let errMessage = 'Facing some error';
    spyOn(service, 'add').and.returnValue(throwError(() => errMessage));
    component.add();
    expect(component.message).toEqual(errMessage);
  });

  it('should call the server to delete the todo if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(of({}));
    component.delete(1); // we are passign the id 1 to delete from server.
    expect(spy).toHaveBeenCalledWith(1); //  we being specific with id which we want to deliver to call with toHaveBeenCalledWith() method.
  });

  it('should not delete the todo if the user clicks on cancel', () => {
    // this x in the begining of it will disable this test.
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(of({}));
    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  });
});
