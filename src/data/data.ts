//データの型を定義
export interface Question {
    id: number;
    text: string;
    type: string;
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      text: '周囲の意見よりも具体的な事実を優先する',
      type: 'information',
    },
    {
      id: 2,
      text: '一人よりも大人数でのアクティビティを好む',
      type: 'energy',
    },
    {
      id: 3,
      text: '霊的なものに興味を感じない',
      type: 'decision',
    },
    {
      id: 4,
      text: '予定に変更が生じたとき、ストレスを感じる',
      type: 'lifeStyle',
    }
  ]
  