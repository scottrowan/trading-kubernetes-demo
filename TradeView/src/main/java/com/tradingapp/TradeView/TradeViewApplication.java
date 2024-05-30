package com.tradingapp.TradeView;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class TradeViewApplication {

	public static void main(String[] args) {
		SpringApplication.run(TradeViewApplication.class, args);
	}

}
