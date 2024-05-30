package com.tradingapp.MarketDataView.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;

@Entity
@Table(name = "market_data")
@Data
@EntityListeners(AuditingEntityListener.class)
public class MarketData {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String date;

    @Column(precision = 20, scale = 4)
    private BigDecimal ratio;
}
