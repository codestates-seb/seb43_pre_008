package com.codestates.PreProject_43_008.member.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "MEMBER_INFO")
public class MemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_SEQ")
    private Long MEMBER_SEQ;

    @Column(name = "EMAIL", nullable = false, unique = true)
    private String EMAIL;

    @Column(name = "PASSWORD", nullable = false)
    private String PASSWORD;

    @Column (name = "NICK_NAME", nullable = false)
    private String NICK_NAME;
}
