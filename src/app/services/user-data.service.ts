import { Injectable } from '@angular/core';
import { Agent } from 'node:http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}
  users(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
}
