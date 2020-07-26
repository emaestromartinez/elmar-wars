import { NgModule } from '@angular/core';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersComponent } from './characters/characters.component';

import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [CharactersComponent, CharacterCardComponent],
  declarations: [CharactersComponent, CharacterCardComponent],
  providers: []
})
export class CharactersModule {}
