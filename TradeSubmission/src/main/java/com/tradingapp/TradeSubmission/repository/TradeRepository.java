package com.tradingapp.TradeSubmission.repository;

import com.tradingapp.TradeSubmission.entity.Trade;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TradeRepository extends JpaRepository<Trade, Long> {
}
