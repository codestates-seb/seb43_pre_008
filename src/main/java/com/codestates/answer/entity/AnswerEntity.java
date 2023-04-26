package com.codestates.answer.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@Entity
public class AnswerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String answerContent;

//    머지 후 띵킹
//    @ManyToOne
//    @JoinColumn(name = "member_seq")
//    private Member member;

//    @ManyToOne
//    @JoinColumn(name="forum_seq")
//    private Forum forum;

}
