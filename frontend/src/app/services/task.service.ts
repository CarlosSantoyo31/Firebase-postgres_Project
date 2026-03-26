import { Injectable } from "@angular/core";
import { Task } from "../models/task.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../env/environments";


@Injectable({providedIn: "root"})
export class TaskService {
    private url = `${environment.apiUrl}/api/tasks`; 
    constructor(private http: HttpClient ) {}

    getAll() { return this.http.get<Task[]>(this.url); }
    
    getById(id: number) { return this.http.get<Task>(`${this.url}/${id}`); }
    
    create(t: Task) { return this.http.post<Task>(this.url, t); }
    
    update(id: number, t: Task) { return this.http.put<Task>(`${this.url}/${id}`, t); }
    
    delete(id: number) { return this.http.delete(`${this.url}/${id}`); }
}