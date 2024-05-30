package com.tradingapp.MarketDataView.controller;

import com.tradingapp.MarketDataView.dto.MarketDataDto;
import com.tradingapp.MarketDataView.service.MarketDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/market-data")
@RequiredArgsConstructor
public class MarketDataController {

    private final MarketDataService marketDataService;

    @GetMapping("")
    public ResponseEntity<List<MarketDataDto>> getAllMarketData() {
        return ResponseEntity.ok(marketDataService.getAllMarketData());
    }
}
