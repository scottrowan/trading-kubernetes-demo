package com.tradingapp.TradeSubmission.controller;

import com.tradingapp.TradeSubmission.dto.TradeDto;
import com.tradingapp.TradeSubmission.service.TradeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping(value = "/trade-submit")
@RequiredArgsConstructor
public class TradeController {

    private final TradeService tradeService;

    @PostMapping("")
    @CrossOrigin(origins = "*")
    public ResponseEntity<TradeDto> createTrade(@Valid @RequestBody TradeDto tradeDto) {
        TradeDto createdTrade = tradeService.submitTrade(tradeDto);
        return ResponseEntity.created(URI.create("/trade-submit/" + tradeDto.getId())).body(createdTrade);
    }
}
