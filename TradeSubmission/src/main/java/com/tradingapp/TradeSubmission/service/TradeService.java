package com.tradingapp.TradeSubmission.service;

import com.tradingapp.TradeSubmission.dto.TradeDto;
import com.tradingapp.TradeSubmission.entity.Trade;
import com.tradingapp.TradeSubmission.mapper.TradeMapper;
import com.tradingapp.TradeSubmission.repository.TradeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TradeService {

    private final TradeRepository tradeRepository;
    private final TradeMapper tradeMapper;

    public TradeDto submitTrade(TradeDto tradeDto) {
        Trade trade = tradeMapper.toTrade(tradeDto);

        Trade savedTrade = tradeRepository.save(trade);

        return tradeMapper.toTradeDto(savedTrade);
    }

}
