declare const quizForm: HTMLElement;
declare let answers: string[];
type Question = {
    category: string;
    correctAnswer: string;
    difficulty: string;
    incorrectAnswers: string[];
    question: QuestionText;
    id: string;
};
type QuestionText = {
    text: string;
};
declare const getQuestions: () => void;
declare const displayQuestions: (questions: Question[]) => void;
