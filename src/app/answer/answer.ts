export class Answer {
  text: string;
  selected: boolean = false;
  levelOfGoodness: number;

  constructor(textIn: string = '', levelOfGoodness: number = 0, selectedIn?: boolean){
      this.text = textIn;
      this.levelOfGoodness = levelOfGoodness;
      if (selectedIn !== undefined){
          this.selected = selectedIn;
      }
  }
}
