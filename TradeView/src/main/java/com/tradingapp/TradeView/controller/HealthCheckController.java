package com.tradingapp.TradeView.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/trade-view")
@RequiredArgsConstructor
public class HealthCheckController {

    @GetMapping(value = "/status", produces = "application/json")
    public ResponseEntity<String> getStatus() {
        return ResponseEntity.ok("{\"status\": \"OK\"}");
    }
}
