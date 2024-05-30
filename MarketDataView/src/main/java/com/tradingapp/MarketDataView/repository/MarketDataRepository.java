package com.tradingapp.MarketDataView.repository;

import com.tradingapp.MarketDataView.entity.MarketData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketDataRepository extends JpaRepository<MarketData, Long> {
}
