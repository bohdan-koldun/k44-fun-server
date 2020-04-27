export class CreateQuestionDto {
  readonly question: string;
  readonly answer: string;
  readonly difficultyRate: number;
  readonly bibleQuote: string;
  readonly viewer: string;
}