package org.gujo.poppul.question.service;

import org.gujo.poppul.answer.service.AnswerStreamService;
import org.gujo.poppul.question.dto.QuestionStreamResponse;
import org.gujo.poppul.question.entity.Question;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class QuestionStreamService {

    private AnswerStreamService answerStreamService;


    //Converter
    public QuestionStreamResponse toDto(Question question){

        var answerList = question.getAnswerList()
                .stream().map(it->answerStreamService.toDto(it)).collect(Collectors.toList());

        return QuestionStreamResponse.builder()
                .id(question.getId())
                .name(question.getName())
                .quizId(question.getQuiz().getId())
                .answerList(answerList)
                .build();
    }

}
