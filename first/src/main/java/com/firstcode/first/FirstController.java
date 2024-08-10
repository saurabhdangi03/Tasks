package com.firstcode.first;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FirstController {
    @RequestMapping("/Hello")
    public String helloWorld() {
        return "Hello, First Application!";
    }
}
