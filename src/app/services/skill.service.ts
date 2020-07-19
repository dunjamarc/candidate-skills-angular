import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Skill } from '@app/@core/model/skill';

const routes = {
  singleSkill: (skillId: number) => `http://localhost:3000/skills/${skillId}`,
  skillsList: () => 'http://localhost:3000/skills',
};

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private httpClient: HttpClient) {}

  getSkills(): Observable<any> {
    return this.httpClient.get(routes.skillsList()).pipe(
      map((body: Skill) => body),
      catchError(() => of(false))
    );
  }

  deleteSkill(id: number): Observable<any> {
    return this.httpClient.delete(routes.singleSkill(id)).pipe(
      map((body: any) => body),
      catchError(() => of(false))
    );
  }

  addSkill(data: Skill): Observable<any> {
    return this.httpClient.post(routes.skillsList(), data).pipe(
      map((body: any) => body),
      catchError(() => of(false))
    );
  }

  updateSkill(id: number, data: Skill): Observable<any> {
    return this.httpClient.put(routes.singleSkill(id), data).pipe(
      map((body: any) => body),
      catchError(() => of(false))
    );
  }
}
