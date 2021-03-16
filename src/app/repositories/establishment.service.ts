import { ApiService } from './../services/api.service';
import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
import { Dialogs } from "@nativescript/core";
Dialogs.alert("Your message").then(function() {
    console.log("Dialog closed!");
});

export class EstablishmentRepository {
constructor(private api:ApiService) {}

this.establishmentRepository.retrieve(this.siret).subscribe((response) => {
    console.log("Dialog result: " + r.result + ", text: " + r.text);
    },
    (error) => {
    if (error.error.message === 'no results found') {
        Dialogs.alert({
            title: "Your title",
            message: "Your message",
            okButtonText: "Your button text"
        }).then(function () {
            console.log("Dialog closed!");
    };
    });
