package com.tradingapp.MarketDataView.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class MarketDataDto {
    private Long id;

    private String date;

    private BigDecimal ratio;
}
