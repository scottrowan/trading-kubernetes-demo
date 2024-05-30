package com.tradingapp.TradeView.repository;

import com.tradingapp.TradeView.entity.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<Trade, Long> {
}
