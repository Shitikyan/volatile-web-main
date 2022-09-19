import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { SubTitleComponent } from './sub-title/sub-title.component';
import { TextSecondaryComponent } from './text-secondary/text-secondary.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    TitleComponent, 
    SubTitleComponent, 
    TextSecondaryComponent, 
    ParagraphComponent, 
    TextComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent, 
    SubTitleComponent,
    TextSecondaryComponent,
    ParagraphComponent,
    TextComponent
  ]
})
export class TypographyModule { }
