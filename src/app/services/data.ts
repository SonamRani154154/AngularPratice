import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { datatypes } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class Data {

   url="http://localhost:3000/user"
  constructor(private http:HttpClient){

    
    
  }

  getUsers():Observable<datatypes[]>{

    
       
    
     return this.http.get<datatypes[]>(this.url)
    }

    saveUsers(user:datatypes):Observable<datatypes>{
       
    
     return this.http.post<datatypes>(this.url,user)
    }

    deleteUser(id:string):Observable<datatypes>{
return this.http.delete<datatypes>(this.url+"/"+id)
    }

    getSelectedUser(id:string):Observable<datatypes>{
return this.http.get<datatypes>(this.url+"/"+id)
    }


    UpdateUser(user:datatypes):Observable<datatypes>{
return this.http.put<datatypes>(this.url+"/"+user.id,user)
    }
    
  
}
