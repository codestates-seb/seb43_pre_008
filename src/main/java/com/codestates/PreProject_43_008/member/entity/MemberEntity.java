package com.codestates.PreProject_43_008.member.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
@Table(name = "MEMBER_INFO")
public class MemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_SEQ")
    private Long MEMBER_SEQ;
    @Column(name = "EMAIL",nullable = false, updatable = false)
    private String EMAIL;
    @Column(nullable = false)
    private String NICK_NAME;
    @Column(nullable = true)
    private String about;
    @Column(nullable = false)
    private String PASSWORD;
    @Column(nullable = true)
    private String img;
    @Column
    private Roles roles = Roles.MEMBER_ACTIVE;

    private boolean activated;

    public enum Roles {
        MEMBER_ACTIVE("존재하는 회원"),
        MEMBER_NOT_EXISTS("존재하지 않는 회원");
        @Getter
        private String roles;

        Roles(String roles){
            this.roles=roles;
        }
    }
}
