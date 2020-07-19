import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Skill } from '@app/@core/model/skill';

const routes = {
  deletedSkill: (skillId: number) => `http://localhost:3000/skills/${skillId}`,
  skillsList: () => 'http://localhost:3000/skills',
  // predictions: () => `/api/predictions`,
  // predictionsRemove: () => `/api/predictions/remove`
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
    return this.httpClient.delete(routes.deletedSkill(id)).pipe(
      map((body: any) => body),
      catchError(() => of(false))
    );
  }

  // addProducts(data: NewProduct[]): Observable<any> {
  //   return this.httpClient.post(routes.predictions(), data).pipe(
  //     map((body: Response) => body),
  //     catchError(() => of(false))
  //   );
  // }

  // removeProduct(data: any): Observable<any> {
  //   return this.httpClient.post(routes.predictionsRemove(), data).pipe(
  //     map((body: any) => body),
  //     catchError((error: any) => throwError(error))
  //   );
  // }
}
