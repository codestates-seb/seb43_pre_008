package com.codestates.PreProject_43_008;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"com.codestates.PreProject_43_008.member.mapper"})
public class PreProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(PreProjectApplication.class, args);
	}

}
