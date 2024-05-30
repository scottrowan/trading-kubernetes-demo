package com.tradingapp.MarketDataView.service;

import com.tradingapp.MarketDataView.dto.MarketDataDto;
import com.tradingapp.MarketDataView.mapper.MarketDataMapper;
import com.tradingapp.MarketDataView.repository.MarketDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MarketDataService {

    private final MarketDataRepository marketDataRepository;
    private final MarketDataMapper marketDataMapper;

    public List<MarketDataDto> getAllMarketData() {
        return marketDataMapper.toMarketDataDtoList(marketDataRepository.findAll());
    }
}
