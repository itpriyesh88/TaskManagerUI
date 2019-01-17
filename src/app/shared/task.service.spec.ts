import { TestBed, getTestBed } from '@angular/core/testing';
import { TaskService } from './task.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Task } from './task.model';
import { NgForm } from '@angular/forms';

describe('TaskService', () => {
  let injector: TestBed;
  let service: TaskService;
  let httpMock: HttpTestingController;
  let task: Task;
  let formData: NgForm;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ], imports: [HttpClientTestingModule, HttpClientModule],
      providers: [TaskService]
    });
    service = TestBed.get(TaskService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Service should be created', () => {
    const service: TaskService = TestBed.get(TaskService);
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Task[]>', () => {
    const service: TaskService = TestBed.get(TaskService);
    service.refreshList().subscribe(tasks => {      
      expect(tasks.length).toBeGreaterThan(0);
    });
    const req = httpMock.expectOne('http://localhost:61295/api/Tasks', 'call to api');
    expect(req.request.method).toBe('GET');
    httpMock.verify();
  });
});

