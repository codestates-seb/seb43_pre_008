package com.codestates.answer.mapper;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.AnswerEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    AnswerEntity postDtoToEntity(AnswerDto.Post postDto);

}
