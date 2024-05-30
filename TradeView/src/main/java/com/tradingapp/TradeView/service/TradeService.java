package com.tradingapp.TradeView.service;

import com.tradingapp.TradeView.dto.TradeDto;
import com.tradingapp.TradeView.mapper.TradeMapper;
import com.tradingapp.TradeView.repository.TradeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TradeService {

    private final TradeRepository tradeRepository;
    private final TradeMapper tradeMapper;

    public List<TradeDto> getAllTrades() {
        return tradeMapper.toTradeDtoList(tradeRepository.findAll());
    }
}
