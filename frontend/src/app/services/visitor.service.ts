import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, updateDoc, deleteDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Visitor } from '../models/visitor.model';

@Injectable({ providedIn: 'root' })
export class VisitorService {

    private collectionName = 'visitors';

    constructor(private firestore: Firestore) {}

    getAll(): Observable<Visitor[]> {
        const ref = collection(this.firestore, this.collectionName);
        return collectionData(ref, { idField: 'id' }) as Observable<Visitor[]>;
    }

    getById(id: string): Observable<Visitor> {
        const ref = doc(this.firestore, this.collectionName, id);
        return docData(ref, { idField: 'id' }) as Observable<Visitor>;
    }

    create(visitor: Visitor) {
        const ref = collection(this.firestore, this.collectionName);
        return addDoc(ref, { ...visitor, date: new Date() });
    }

    update(id: string, visitor: Visitor) {
        const ref = doc(this.firestore, this.collectionName, id);
        return updateDoc(ref, { ...visitor });
    }

    delete(id: string) {
        const ref = doc(this.firestore, this.collectionName, id);
        return deleteDoc(ref);
    }
}