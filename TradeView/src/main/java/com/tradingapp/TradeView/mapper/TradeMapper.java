package com.tradingapp.TradeView.mapper;

import com.tradingapp.TradeView.dto.TradeDto;
import com.tradingapp.TradeView.entity.Trade;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TradeMapper {
    Trade toTrade(TradeDto tradeDto);

    TradeDto toTradeDto(Trade trade);

    List<TradeDto> toTradeDtoList(List<Trade> trades);

    @Mapping(target = "id", ignore = true)
    void updateTrade(@MappingTarget Trade target, Trade source);
}
