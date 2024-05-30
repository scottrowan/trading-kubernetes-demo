package com.tradingapp.TradeSubmission.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigInteger;

@Entity
@Table(name = "trade")
@Data
@EntityListeners(AuditingEntityListener.class)
public class Trade {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trade_sequence")
    @SequenceGenerator(name = "trade_sequence", sequenceName = "trade_seq_name", allocationSize = 1)
    private Long id;

    @Column
    private String currencyPair;

    @Column
    private BigInteger amount;

    @Column
    private String side;
}
