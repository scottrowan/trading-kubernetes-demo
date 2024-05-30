package com.tradingapp.TradeSubmission.dto;

import lombok.Data;

import java.math.BigInteger;

@Data
public class TradeDto {
    private Long id;

    private String currencyPair;

    private BigInteger amount;

    private String side;
}
