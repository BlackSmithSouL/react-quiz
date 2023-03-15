import React from "react";

type Props = {
    question: string,
    answers: string[],
    callback: any,
    userAnswer: any,
    questionNr: number,
    totalQuestions: number,
}

export const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions,
}) => (
    <div>
        <p className="number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer}
                </div>
            ))}
        </div>
    </div>
)