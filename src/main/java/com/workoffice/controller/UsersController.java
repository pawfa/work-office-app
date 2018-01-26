package com.workoffice.controller;

import com.workoffice.entity.User;
import com.workoffice.service.UserService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;


@CrossOrigin
@RestController
public class UsersController {

    private UserService userService;
    private final Log logger = LogFactory.getLog(getClass());

    @Autowired
    public UsersController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/all")
    public Iterable<User> getAllEmployees() {
        return userService.findAll();
    }

    @PostMapping("/add")
    public User addEmployee(@RequestBody User emp) {
        return userService.save(emp);
    }

    @GetMapping("/profile/user/")
    public User getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        logger.info(currentPrincipalName);
        User us = userService.findByEmail(authentication.getName());
        return us;
    }


}
