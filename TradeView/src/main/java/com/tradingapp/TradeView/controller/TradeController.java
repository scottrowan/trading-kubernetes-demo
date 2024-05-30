package com.tradingapp.TradeView.controller;

import com.tradingapp.TradeView.dto.TradeDto;
import com.tradingapp.TradeView.service.TradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/trade-view")
@RequiredArgsConstructor
public class TradeController {

    private final TradeService tradeService;

    @GetMapping("")
    public ResponseEntity<List<TradeDto>> getAllTrades() {
        return ResponseEntity.ok(tradeService.getAllTrades());
    }
}
