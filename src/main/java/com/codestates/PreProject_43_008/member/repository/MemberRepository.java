package com.codestates.PreProject_43_008.member.repository;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    Optional<MemberEntity> findByEMAIL(String EMAIL);
}
