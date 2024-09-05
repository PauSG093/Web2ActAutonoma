import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UsersService, LoginInfo } from '../users/users.service';
import { UserCredential } from '@angular/fire/auth'; 

export interface Register {
  uid: string;
  email: string;
  password: boolean;
  nickname: string;
  photoURL: string;
  phoneNumber: string;
  role: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  constructor(private firestore: Firestore, private usersService: UsersService) { }
 
  getRegisters(): Observable<Register[]> {
    const registersRef = collection(this.firestore, 'registers');
    return collectionData(registersRef, {idField: 'uid'});
  }
 
  async createRegister(loginInfo: LoginInfo, register: Register) : Promise<any> {
    let userCredential: UserCredential = await this.usersService.register(loginInfo);
      .then((response) => {
        return response;
    })
    .catch(error => {
      console.log(error);
      return error;
    });
    register.uid = userCredential.user.uid;
    const registersRef = collection(this.firestore, 'registers');
    return addDoc(registersRef, {register});
  }
 
  updateRegister({uid, email, password, nickname, photoURL, phoneNumber, role}: Register) : Promise<any> {
    const docRef = doc(this.firestore, `registers/${uid}`);
    return updateDoc(docRef, {uid, email, password, nickname, photoURL, phoneNumber, role});
  }
 
  deleteRegister(register: Register) : Promise<any> {
    const docRef = doc(this.firestore, `todos/${register.uid}`);
    return deleteDoc(docRef);
  }
}

function then(arg0: (response: any) => any) {
  throw new Error('Function not implemented.');
}
