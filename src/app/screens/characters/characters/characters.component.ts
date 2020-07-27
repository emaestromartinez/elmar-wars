import { Component, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  charactersList: Character[];
  dragAndDropRows: Character[][];

  subscriptions: SubscriptionLike[];

  constructor(private _charactersService: CharactersService) {
    this.charactersList = [];
  }

  ngOnInit(): void {
    this.subscriptions = [
      this._charactersService.listCharacters().subscribe((list) => {
        // Mapping only the necessary information into charactersList;
        this.charactersList = list.results;

        for (let i = 0; i < this.charactersList.length; ++i) {}
      })
    ];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
