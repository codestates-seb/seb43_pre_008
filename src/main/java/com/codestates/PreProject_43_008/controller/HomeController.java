package com.codestates.PreProject_43_008.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;


@RestController
public class HomeController {

    @GetMapping("/api/dummy")
    public JSONArray getData() throws IOException, ParseException {
        JSONParser parser = new JSONParser();
        Reader reader = new FileReader("src/main/resources/dummy/dummy.json");
        JSONObject jsonObject = (JSONObject) parser.parse(reader);
        JSONArray jsonArray = new JSONArray();
        jsonArray.add(jsonObject);
        return jsonArray;
    }
}
